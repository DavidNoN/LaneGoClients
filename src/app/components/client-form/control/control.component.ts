import { ChangeDetectorRef, Component, Input, QueryList, OnInit } from '@angular/core';
import { CdkStep, CdkStepper } from '@angular/cdk/stepper';





@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [{provide: CdkStepper, useExisting: ControlComponent}],
})
export class ControlComponent extends CdkStepper {

  @Input() index: number;

  onClick(index: number): void {
    this.selectedIndex = index;
  }




}
