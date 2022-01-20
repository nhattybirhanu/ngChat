import { Component, OnInit } from '@angular/core';
import { ChatService } from 'lab/ngChatRoom/src/app/services/chat/chat-service.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {
  chatRoomList:String[]=[];
  constructor(private chatService:ChatService) {

   }

  ngOnInit(): void {
  //  this.chatRoomList=this.chatService.getChatRooms();
  }

}
