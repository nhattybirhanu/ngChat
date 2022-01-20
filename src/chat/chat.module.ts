import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation/conversation.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { ChatViewComponent } from './chat-view/chat-view.component';
import { RegistrationService } from 'src/app/services/registraion/registration.service';
import { ChatService } from 'src/app/services/chat/chat.service';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterViewComponent } from './register-view/register-view.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    ChatViewComponent,
    ConversationComponent,
    RegisterViewComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTabsModule,  
  ],
  exports: [
    ChatViewComponent
  ],
  providers: [
    RegistrationService,
    ChatService
  ]
})
export class ChatModule { }
