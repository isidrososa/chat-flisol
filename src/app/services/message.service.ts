import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MessageService {
  messages: FirebaseListObservable<any>;
  constructor(public af: AngularFire) { }

  loadMessages(): FirebaseListObservable<any> {
    this.messages = this.af.database.list('/messages', {
      query: {
        limitToLast: 30,
        orderByKey: true
      }
    });
    return this.messages;
  }

  sendMessage(content: string, user: any) {
    let message = {
      uid: user.uid,
      author: user.name,
      photo: user.photo,
      content: content,
      date: new Date().getTime()
    }
    this.messages.push(message);
  }
}
