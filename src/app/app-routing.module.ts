import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ChatViewComponent } from 'src/chat/chat-view/chat-view.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "registration",
    component: ChatViewComponent
    // component: RegisterViewComponent
  },
  {
    path: "chats",
    component: ChatViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
