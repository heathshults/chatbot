import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  chatboxOpen: boolean = false;

  toggleChatbox() {
    this.chatboxOpen = !this.chatboxOpen;
  }
}
