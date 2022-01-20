import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatViewComponent} from "./chat/chat-view/chat-view.component";
import {RegisterViewComponent} from "./chat/register-view/register-view.component";

const routes: Routes = [
  {
    path: "registration",
    component: RegisterViewComponent
  },
  {
    path: "chats",
    component: ChatViewComponent
  },
  {path:'', component: RegisterViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
