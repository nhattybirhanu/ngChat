import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Chat } from '../models/chat-model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @Output() onChatRoomChangeEvent = new EventEmitter();

  chatRooms: string[] = [];
  selectedChatRoom: string = "";
  chatMessages: Chat[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatRooms = this.chatService.getChatRooms();
    this.selectedChatRoom = this.chatRooms[0];
    this.chatService.getMessages(this.selectedChatRoom);
    this.chatService.messages$.subscribe(chatMessages => {
      this.chatMessages = chatMessages.filter(m => m.screenName !== undefined);
    });
  }


  onSelectChatRoom(event: Event) {
    const chatRoom = (event.target as HTMLSelectElement).value;
    this.chatService.getMessages(chatRoom);
    this.onChatRoomChangeEvent.emit(chatRoom);
  }
}
