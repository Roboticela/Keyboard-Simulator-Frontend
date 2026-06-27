import { BlogPostMeta } from './types';
import { titleToSlug } from './utils';

const BLOG_TITLES = [
  'What Is a Keyboard Simulator and Why Should You Care?',
  'The History of the Computer Keyboard',
  'How to Type Faster: A Complete Guide for Beginners',
  'Touch Typing vs Hunt and Peck: Which One Is Right for You?',
  'Understanding Keyboard Layouts Around the World',
  'Why 3D Visualization Makes Learning Keyboards So Much Better',
  'How to Set Up a Comfortable Typing Workspace',
  'Complete Guide to Using the Keyboard Simulator for the First Time',
  'Mechanical vs Membrane Keyboards: A Deep Dive',
  'The Role of Keyboards in Accessibility and Assistive Technology',
  'How Programmers Use Keyboards Differently Than Everyone Else',
  'How to Use the Keyboard Simulator for Remote Teaching',
  'Laptop Keyboards vs Desktop Keyboards: What Is the Real Difference?',
  'The Psychology of Clicking: Why Keyboard Sound and Feel Matter',
  'What Is React Three Fiber and Why Does It Power the Best 3D Keyboard Simulator',
  'Laptop Keyboard Models Compared: Asus, Dell, HP, and Toshiba',
  'How Keyboard Shortcuts Can Transform Your Productivity',
  "A Student's Guide to Typing More Efficiently for School",
  'The Science of Muscle Memory and Keyboard Learning',
  'Eight Beautiful Keyboard Themes Explained',
  "How to Teach Your Child to Type: A Parent's Guide",
  'Why Open-Source Software Matters for Tools Like the Keyboard Simulator',
  'Typing for Gamers: How Keyboard Skills Transfer to Gaming',
  'Step-by-Step Guide to Learning All Five Laptop Keyboard Models',
  'The Future of Keyboard Technology: What Is Coming Next',
  'Understanding Key Travel and Why It Matters for Typing',
  'How to Use a Keyboard Simulator to Prepare for a New Laptop',
  'Ergonomic Keyboards: Do You Really Need One?',
  'How to Improve Your Number Pad Typing Speed',
  'What Are Status Indicator Lights and Why Does the Simulator Include Them?',
  'Keyboard Typing for Writers: Tips and Techniques',
  'Keyboard Backlight and What You Should Know About It',
  'How the Keyboard Simulator Works Under the Hood',
  'Keyboard Cleaning and Maintenance: Keeping Your Keys in Good Shape',
  'How Teachers Can Use the Keyboard Simulator in the Classroom',
  'The Difference Between Typing Speed and Typing Efficiency',
  'How Keyboard Input Works: A Technical Look for Curious People',
  'Keyboard Legends: Famous Typists and Speed Records',
  'Customizing Your Keyboard: Keycaps, Switches, and Beyond',
  'How to Type Without Looking at Your Keyboard: A 30-Day Challenge',
  'Comparing Keyboard Simulators: What Makes One Better Than Another',
  'Keyboard Simulation in Professional Training Environments',
  'Understanding the Fn Key and Function Layers on Laptop Keyboards',
  'Why Every Office Worker Should Know These Keyboard Shortcuts',
  'How Keyboard Skills Help Students in Standardized Tests',
  'The Art of Typing Practice: Making It Effective and Not Boring',
  'How to Use the Keyboard Simulator for Accessibility Training',
  'Building a Home Practice Setup for Serious Typing Improvement',
  'Keyboard Simulator vs Traditional Typing Tutors: What Works Better?',
  'How to Help Someone Who Is Afraid of Technology Learn to Use a Keyboard',
  'Why the Keyboard Is Still King Despite Voice and Touch Interfaces',
  'Keyboard Layouts for Coders: Understanding QWERTY, Dvorak, and Colemak',
  'How to Build a Typing Portfolio for Job Applications',
  'The Connection Between Music and Typing: Rhythm, Speed, and Flow',
  'Using the Keyboard Simulator for Special Needs Classrooms',
  'Keyboard Shortcuts for Creative Professionals: Designers, Video Editors, and Artists',
  'What the Keyboard of the Future Might Look Like',
  'Advanced Guide to Using the Keyboard Simulator for Typing Instruction',
  'The Keyboard Simulator as a Tool for Self-Expression and Creativity',
  'Your Complete Keyboard Journey: From Beginner to Advanced',
] as const;

export const BLOG_POSTS_META: BlogPostMeta[] = BLOG_TITLES.map((title, index) => ({
  number: index + 1,
  title,
  slug: titleToSlug(title),
  excerpt: '',
}));

export const BLOGS_PER_PAGE = 30;

export function getPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS_META.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS_META.map((post) => post.slug);
}
