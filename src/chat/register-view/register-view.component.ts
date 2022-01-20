import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat/chat.service';
import { RegistrationService } from 'src/app/services/registraion/registration.service';
import { Chat } from '../models/chat-model';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  chatRoomList: Chat[] = [];
  
  message: string =''
  chatRooms: string[] = []
  registrationFormGroup = this.fb.group({
    screenName: ['', Validators.required],
    chatRoom: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private chatService: ChatService, private registerService: RegistrationService) {
  }

  ngOnInit(): void {
    this.chatRooms = this.chatService.getChatRooms();
  }

  register() {
    this.registerService.register(this.registrationFormGroup.value);
    this.message = 'Succesfully Registered';
  }
  closeMessage(){
    this.message = '';
  }

}
