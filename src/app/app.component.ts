import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Welcome to {{value}}</div>`,
})
export class AppComponent {
  value = 'TEST Angular Static Web Page.';
}
