import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;

  constructor() {}

  getUser() {
    return this.user;
  }

  setUser() {
    this.user = {
      id: 'passportcard123',
      image: 'assets/images/passportcard.png',
      name: 'passportcard',
    };
  }
}
