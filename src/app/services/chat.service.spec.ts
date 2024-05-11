import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ChatService } from './chat.service';
import { UserService } from './user.service';
import { UtilsService } from './utils.service';

describe('ChatService', () => {
  let service: ChatService;
  let utilsService: UtilsService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ChatService,
        {
          provide: UserService,
          useValue: { getUser: () => ({ name: 'User', image: 'image/path' }) },
        },
        {
          provide: UtilsService,
          useValue: {
            generateId: () => '123',
            getCurrentTimestamp: () => new Date(),
          },
        },
      ],
    });
    service = TestBed.inject(ChatService);
    utilsService = TestBed.inject(UtilsService);
    userService = TestBed.inject(UserService);
  });

  it('should load messages from localStorage if they exist', () => {
    spyOn(localStorage, 'getItem').and.returnValue(
      JSON.stringify({ id: '123', messages: [{ id: '1', content: 'Hi' }] })
    );
    const messages = service.loadConversationFromLocalStorage('123');
    expect(messages.length).toBe(1);
    expect(messages[0].content).toEqual('Hi');
  });

  it('should return an empty array if no conversation exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const messages = service.loadConversationFromLocalStorage('999');
    expect(messages.length).toBe(0);
  });
});
