import { Component, Input } from '@angular/core';

@Component({
  selector: 'df-vmessage',
  templateUrl: './vmessage.component.html',
})
export class VMessageComponent {
  @Input() text = '';
}
