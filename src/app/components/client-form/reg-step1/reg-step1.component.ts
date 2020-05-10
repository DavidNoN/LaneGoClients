import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reg-step1',
  templateUrl: './reg-step1.component.html',
  styleUrls: ['./reg-step1.component.css']
})
export class RegStep1Component implements OnInit {

  @Input() regForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  }



