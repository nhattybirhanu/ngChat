import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ConversationComponent } from './conversation/conversation.component';



@NgModule({
  declarations: [
    ChatViewComponent,
    ConversationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
