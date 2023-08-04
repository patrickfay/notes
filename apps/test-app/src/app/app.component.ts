import { Component } from '@angular/core';
import { NdsButtonComponent } from '@notes/notes-design-system';

@Component({
  standalone: true,
  imports: [NdsButtonComponent],
  selector: 'notes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
}
