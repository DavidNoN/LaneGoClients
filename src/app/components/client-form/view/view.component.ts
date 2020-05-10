import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,  Validators, FormBuilder, FormArray } from '@angular/forms';
import * as jsPDF from 'jspdf';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {

  test: Date = new Date();
  registrationForm: FormGroup;
  completed = false;
  completed2 = false;
  completed3 = false;
  completed4 = false;
  btb = false;
  bta = false;
  bte = false;
  value: string;
  pb = 'Paquete Lane Go! empresas';
  definePrice: number;
  precioB = 3500000;
  precioA = 6500000;
  precioE = 16000000;
  temp: any;


  @ViewChild('content') content: ElementRef;
  public downloadPDF() {

    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
      };
      const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 10, 10, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    setTimeout(function () {
      doc.save('LaneGo.pdf');
  }, 5000);


  }


  constructor(private fb: FormBuilder
    ) {

    this.crearFormulario();
    this.cargarDataAlFormulario();

  }

  ngOnInit() {
  }



  get empresaNoValido() {
    return this.registrationForm.get('empresa').invalid && this.registrationForm.get('empresa').touched;
  }
  get nitNoValido() {
    return this.registrationForm.get('nit').invalid && this.registrationForm.get('nit').touched;
  }

  get correoNoValido() {
    return this.registrationForm.get('correo').invalid && this.registrationForm.get('correo').touched;
  }

  get contactoNoValido() {
    return this.registrationForm.get('contacto').invalid && this.registrationForm.get('contacto').touched;
  }

  get nombreNoValido() {
    return this.registrationForm.get('nombre').invalid && this.registrationForm.get('nombre').touched;
  }

  get actividadNoValido() {
    return this.registrationForm.get('actividad').invalid && this.registrationForm.get('actividad').touched;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


  completeStep(): void {
    this.completed = true;
  }

  colorBoton1() {
    this.btb = true;
    this.bta = false;
    this.bte = false;
  }
  colorBoton2() {
    this.btb = false;
    this.bta = true;
    this.bte = false;
  }
  colorBoton3() {
    this.btb = false;
    this.bta = false;
    this.bte = true;
  }

  completeStep2(value: string): void {
    this.registrationForm.get('paquete').setValue(value);
    this.completed2 = true;
    this.temp = this.registrationForm.get('paquete').value
    console.log(this.temp)
    if (this.temp === 'basico') {
      this.definePrice = this.precioB;
      this.definePrice.toString();
    }
    if (this.temp === 'avanzado') {
      this.definePrice = this.precioA;
      this.definePrice.toString();
    }
    if (this.temp === 'elite') {
      this.definePrice = this.precioE;
      this.definePrice.toString();
    }
  }

  completeStep4(): void {
    this.completed4 = true;
  }

  completeStep3(): void {
    this.completed3 = true;
  }

  createListeners() {
    this.registrationForm.get('paquete').valueChanges.subscribe( console.log );
  }



  crearFormulario() {
    this.registrationForm = this.fb.group({
      paquete: ['', [] , ],
      empresa: ['', [Validators.required, Validators.minLength(3)] , ],
      nit: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(^[0-9]+-{1}[0-9]{1})$')]  , ],
      correo: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')] ,  ],
      contacto: ['', [Validators.required, Validators.minLength(10), Validators.pattern('(^[0-9]+)$'), Validators.maxLength(10)], ],
      nombre: ['', [Validators.required, Validators.minLength(8)], ],
      actividad: ['', [Validators.required, Validators.minLength(6)], ],
    }, {
    });
  }

  cargarDataAlFormulario() {
    this.registrationForm.setValue({
      paquete: '',
      empresa: 'hdsahsj',
      nit: '2138823183-9',
      correo: 'sdasa@g.co',
      contacto: '5676545654',
      nombre: 'David jdskajdsa',
      actividad: 'vagancia',
    });
  }




  guardar() {
    if ( this.registrationForm.invalid ) {
      return Object.values( this.registrationForm.controls ).forEach( control => {

        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
        control.markAsTouched();
        }
      });
  }
}

}



// getRandomOrder() {
//   const random: number = Math.floor(Math.random() * (999999 - 100000)) + 100000;
//   this.order = random;
//   return this.order;
// }

