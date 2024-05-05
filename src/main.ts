import { Component } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ChatbotComponent } from './app/chatbot/chatbot.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChatbotComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <div>
      <app-chatbot></app-chatbot>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
