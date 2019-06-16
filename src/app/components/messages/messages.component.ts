import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        id: '1',
        text: 'hello1'
      },
      {
        id: '2',
        text: 'hello2'
      },
      {
        id: '3',
        text: 'hello3'
      },
    ];
  }

}
