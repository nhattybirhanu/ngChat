import {Injectable} from '@angular/core';
<<<<<<< HEAD
import { Registration } from 'lab/ngChatRoom/src/app/chat/models/registration.model';
=======
>>>>>>> master
import {BehaviorSubject} from "rxjs";
import { Registration } from 'src/chat/models/registration-model';

const KEY = "REGISTERED_USER";

@Injectable()
export class RegistrationService {
  private readonly registeredUser: BehaviorSubject<Registration[]>;

  get registeredUser$() {
    return this.registeredUser.asObservable();
  }

  constructor() {
    const initialState = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)!) : [];
    this.registeredUser = new BehaviorSubject<Registration[]>(initialState);
  }

  register(registration: Registration) {
    const registeredUsers = [...this.registeredUser.getValue(), registration];
    this.registeredUser.next(registeredUsers);
    localStorage.setItem(KEY, JSON.stringify(registeredUsers));
  }

}