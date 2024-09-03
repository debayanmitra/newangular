import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Welcome to TEST Angular Static Web Page {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
