import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit {
  textField = '';

  sendText() {
    console.log('send:', this.textField);
    this.textField = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
