import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Chat } from 'src/chat/models/chat-model';


@Injectable()
export class ChatService {

  private readonly messages: BehaviorSubject<Chat[]>;
  private baseURL = 'https://us-central1-pka-forms-fef14.cloudfunctions.net/';

  get messages$(): Observable<Chat[]> {
    return this.messages.asObservable();
  }

  constructor(private httpClient: HttpClient) {
    this.messages = new BehaviorSubject<Chat[]>([]);
  }

  getChatRooms(): string[] {
    return ["Fun with Taxes", "The Dark Web" , "Everything NG", "Mystic-1-4-U"];
  }

  getMessages(chatRoom: string): void {
    this.httpClient
      .get<Chat[]>(`${this.baseURL}/getMessages?room=${chatRoom}`)
      .subscribe(chats => this.messages.next(chats));
  }

  sendMessage(chat: Chat): void {
    this.httpClient
      .post<Chat>(`${this.baseURL}/setMessage`, chat)
      .subscribe(() => {
        const chats = [chat, ...this.messages.getValue()];
        this.messages.next(chats);
      })
  }

}