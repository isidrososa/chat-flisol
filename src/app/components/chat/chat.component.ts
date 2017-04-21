import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/services/auth.service';
import { MessageService } from 'app/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  message: string = '';
  chatBox: HTMLElement;

  constructor(public auth: AuthService, public msg: MessageService) { }

  ngOnInit() {
    this.chatBox = document.getElementById('box-chat');
    this.msg.loadMessages().subscribe(
      rs => setTimeout(() => this.chatBox.scrollTop = this.chatBox.scrollHeight, 100),
      er => console.log('Not authorized')
    );
  }

  sendMessage() {
    if (this.message.length > 0) {
      this.msg.sendMessage(this.message, this.auth.user);
      this.message = '';
    }
  }

  logout() {
    this.auth.logout();
  }
}