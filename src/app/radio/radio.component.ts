import { group } from '@angular/animations';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  selectedOption: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';

 
 
}