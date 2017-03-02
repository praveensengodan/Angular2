import { Component } from '@angular/core';

@Component({
  template: `
  <div class="panel panel-primary">
    <div class="panel-heading">{{pageTitle}}</div>
    <div class="panel-body">
     Welcome to the Angular 2 home page
    </div>
  </div>`
})
export class WelcomeComponent {
  pageTitle: string = 'Welcome Page';
}