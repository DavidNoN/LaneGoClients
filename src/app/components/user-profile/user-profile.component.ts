import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: string;
  showMsg: boolean;
  cadena: string;
  saveCadena: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {

  }

  ActualizarBio( title: string ) {
      this.showMsg = true;
      localStorage.setItem('cadena', title );
      this.cadena = localStorage.getItem('cadena');
  }

}
