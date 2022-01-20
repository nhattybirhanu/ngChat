import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ChatService} from "./chat/chat-service.service";
import {RegistrationService} from "./registration/registration.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ChatService,
    RegistrationService
  ]
})
export class ServicesModule { }
