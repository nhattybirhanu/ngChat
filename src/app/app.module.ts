import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterViewComponent } from '../register-view/register-view.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import{MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import{MatListModule} from '@angular/material/list'

import { ChatModule } from 'src/chat/chat.module';
import {MatTabsModule} from "@angular/material/tabs";
import { ChatService } from './services/chat/chat.service';
import { RegistrationService } from 'lab/ngChatRoom/src/app/services/registration/registration.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,MatButtonModule,MatListModule
    
    ,
    ChatModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ChatService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
