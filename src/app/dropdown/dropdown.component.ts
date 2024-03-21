import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  selectedOption: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';

  onChange(){
    if (this.selectedOption === 'Phone') {
      console.log(this.phoneNumber = '7304108968');
    } else if (this.selectedOption === 'Email') {
      console.log(this.emailAddress = 'ghotekarpranoti@gmail.com'); 
    }
  }
}
