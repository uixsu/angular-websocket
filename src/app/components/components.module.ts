
import { NgModule } from '@angular/core';
import { SendFormComponent } from './send-form/send-form.component';
import { MessagesComponent } from './messages/messages.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    SendFormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    SendFormComponent,
    MessagesComponent
  ]
})
export class ComponentsModule { }
