// Angular
import { Component } from '@angular/core';

@Component({
  template: require('./welcome.component.html')
})
export class WelcomeComponent {
  pageTitle: string = 'Welcome Page';
}