import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FaqComponent } from './faq/faq.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ViewComponent } from './client-form/view/view.component';
import { RegStep2Component } from './client-form/reg-step2/reg-step2.component';
import { RegStep3Component } from './client-form/reg-step3/reg-step3.component';
import { RegStep4Component } from './client-form/reg-step4/reg-step4.component';
import { RegStep1Component } from './client-form/reg-step1/reg-step1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { ControlComponent } from './client-form/control/control.component';
import { CdkStepperModule } from '@angular/cdk/stepper';






@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    FormsModule,
    CdkStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    UserProfileComponent,
    SidebarComponent,
    FaqComponent,
    HomeComponent,
    ViewComponent,
    RegStep2Component,
    RegStep3Component,
    RegStep4Component,
    RegStep1Component,
    ControlComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
