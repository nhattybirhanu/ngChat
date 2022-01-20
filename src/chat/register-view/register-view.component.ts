import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';
import { RegistrationService } from 'src/app/services/registraion/registration.service';
import { Registration } from 'src/chat/models/registration-model';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {
  chatRoomList:String[]=[];
  regForm:FormGroup;
  constructor(private chatService:ChatService,private regService:RegistrationService,private router:Router) {
      this.regForm=new FormGroup({
        'username':new FormControl('',Validators.required),
        'group':new FormControl('',Validators.required)
      })
   }

  ngOnInit(): void {
  this.chatRoomList=this.chatService.getChatRooms();
  }
  reg(){
    const reg:Registration={
      chatRoom:this.regForm.value.group[0],
      screenName:this.regForm.value.username
    }
      this.regService.register(reg);
      this.router.navigate(['/chat'])
  }

}
