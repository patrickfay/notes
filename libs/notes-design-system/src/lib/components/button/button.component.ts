import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class NdsButtonComponent {
  public testBtnFunctionality(): void {
    console.log('shablagoo!');
  }
}
