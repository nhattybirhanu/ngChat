import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';
import { RegistrationService } from 'src/app/services/registraion/registration.service';
import { Chat } from '../models/chat-model';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {

  message: string = "";
  selectedChatRoom: string = "";
  errorMessage: string = "";
  screenName: string = "";

  constructor(private chatService: ChatService, private registrationService: RegistrationService) {
  }

  ngOnInit(): void {
    this.selectedChatRoom = this.chatService.getChatRooms()[0];
    this.setScreenName();
  }
  setScreenName(){
    this.registrationService.registeredUser$.subscribe(registrations => {
      const registration = registrations.find(r => r.chatRoom === this.selectedChatRoom);
      if (registration)
        this.screenName = registration.screenName;
      else
        this.screenName = "";
    })
  }
  sendMessage() {
    if (this.message) {
      if (this.screenName) {
        this.errorMessage = "";
        const chat: Chat = {
          message: this.message,
          chatRoom: this.selectedChatRoom,
          screenName: this.screenName,
          timestamp: new Date()
        };
        this.chatService.sendMessage(chat);
      } else
        this.errorMessage = "Must have registered screen name to chat";
    } else
      this.errorMessage = "Message should not be empty";
  }

  onChatRoomChangeEvent(chatRoom: string) {
    this.selectedChatRoom = chatRoom;
    this.setScreenName();
  }

  hideError() {
    this.errorMessage = "";
  }

}
