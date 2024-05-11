import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'; // Using UUID for generating unique IDs

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  generateId(): string {
    return uuidv4();
  }

  // Generate current timestamp
  getCurrentTimestamp(): Date {
    return new Date();
  }
}
