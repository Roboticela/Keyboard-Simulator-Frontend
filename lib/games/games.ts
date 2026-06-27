import type { LucideIcon } from 'lucide-react';
import {
  Gauge,
  Zap,
  Target,
  Home,
  FileText,
  Flag,
  Star,
  Brain,
  Hash,
  HelpCircle,
  Command,
  LayoutGrid,
  FunctionSquare,
  Layers,
  Timer,
  MapPin,
  Hand,
  Calculator,
  CaseSensitive,
  Eraser,
} from 'lucide-react';

export interface GameEntry {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Twenty keyboard games — each card is one focused activity. */
export const GAMES: GameEntry[] = [
  {
    slug: 'typing-speed-test',
    title: 'Typing Speed Test',
    description: 'Measure your words per minute in a 60-second typing test.',
    icon: Gauge,
  },
  {
    slug: 'word-sprint',
    title: 'Word Sprint',
    description: 'Type as many random words as you can in 30 seconds.',
    icon: Zap,
  },
  {
    slug: 'typing-accuracy',
    title: 'Typing Accuracy',
    description: 'Type a sentence with the highest accuracy — every mistake counts.',
    icon: Target,
  },
  {
    slug: 'home-row-hero',
    title: 'Home Row Hero',
    description: 'Practice only the home row keys: A S D F J K L ;',
    icon: Home,
  },
  {
    slug: 'paragraph-marathon',
    title: 'Paragraph Marathon',
    description: 'Type a full paragraph from start to finish without stopping.',
    icon: FileText,
  },
  {
    slug: 'typing-race',
    title: 'Typing Race',
    description: 'Complete the sentence before the countdown reaches zero.',
    icon: Flag,
  },
  {
    slug: 'typing-stars',
    title: 'Typing Stars',
    description: 'Destroy falling letters by pressing the matching key.',
    icon: Star,
  },
  {
    slug: 'key-memory',
    title: 'Key Memory',
    description: 'Repeat growing keyboard key sequences in order.',
    icon: Brain,
  },
  {
    slug: 'symbol-smash',
    title: 'Symbol Smash',
    description: 'Type punctuation and special symbols as fast as you can.',
    icon: Hash,
  },
  {
    slug: 'keyboard-quiz',
    title: 'Keyboard Quiz',
    description: 'Answer multiple-choice questions about keyboard hardware.',
    icon: HelpCircle,
  },
  {
    slug: 'shortcut-master',
    title: 'Shortcut Master',
    description: 'Identify what each Ctrl, Alt, and Cmd shortcut does.',
    icon: Command,
  },
  {
    slug: 'layout-quiz',
    title: 'Layout Quiz',
    description: 'Test your knowledge of QWERTY, AZERTY, and other layouts.',
    icon: LayoutGrid,
  },
  {
    slug: 'function-key-finder',
    title: 'Function Key Finder',
    description: 'Match F1 through F12 to their most common uses.',
    icon: FunctionSquare,
  },
  {
    slug: 'modifier-mash',
    title: 'Modifier Mash',
    description: 'Press the correct Ctrl, Alt, Shift, or Meta combination.',
    icon: Layers,
  },
  {
    slug: 'key-reaction-time',
    title: 'Key Reaction Time',
    description: 'Press the shown key as quickly as possible when prompted.',
    icon: Timer,
  },
  {
    slug: 'key-location-trainer',
    title: 'Key Location Trainer',
    description: 'Press the correct key when a letter appears on screen.',
    icon: MapPin,
  },
  {
    slug: 'n-key-rollover',
    title: 'N-Key Rollover',
    description: 'Hold as many different keys simultaneously as your keyboard allows.',
    icon: Hand,
  },
  {
    slug: 'number-pad-speed',
    title: 'Number Pad Speed',
    description: 'Type number sequences quickly using the numpad.',
    icon: Calculator,
  },
  {
    slug: 'shift-challenge',
    title: 'Shift Challenge',
    description: 'Type mixed-case words and shifted symbols correctly.',
    icon: CaseSensitive,
  },
  {
    slug: 'backspace-blitz',
    title: 'Backspace Blitz',
    description: 'Fix highlighted typos using Backspace before time runs out.',
    icon: Eraser,
  },
];