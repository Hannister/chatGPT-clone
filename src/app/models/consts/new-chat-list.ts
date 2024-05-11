import { NewChat } from '../new-chat';

export const BUTTON_OPTIONS: NewChat[] = [
  {
    id: 1,
    title: 'Explain nostalgia',
    description: 'to a kindergartener',
    question: 'Can you explain the concept of "nostalgia" to a kindergartener?',
  },
  {
    id: 2,
    title: 'Plan a trip',
    description: 'to experience Seoul like a local',
    question: `I'm planning a 4-day trip to Seoul. Can you suggest an itinerary that doesn't involve popular tourist attractions?`,
  },
  {
    id: 3,
    title: 'Tell me a fun fact',
    description: 'about the Roman Empire',
    question: 'Tell me a random fun fact about the Roman Empire',
  },
  {
    id: 4,
    title: 'Create a workout plan',
    description: 'for resistance training',
    question:
      'I need to start resistance training. Can you create a 7-day workout plan for me to ease into it?',
  },
];
