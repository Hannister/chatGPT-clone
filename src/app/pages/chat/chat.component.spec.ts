import { TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ChatComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChatComponent, // Import standalone component here
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', '123']])),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ChatComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
