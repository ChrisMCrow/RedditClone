import { Subreddit } from './models/subreddit.model';
import { Thread } from './models/thread.model';

export const SUBREDDITS: Subreddit[] = [
  new Subreddit("AskReddit"),
  new Subreddit("learnprogramming"),
  new Subreddit("writing")
  ];

export const THREADS: Thread[] = [
  new Thread("AskReddit", "Halloween Megathread 2018", `Please keep all top level-comments as questions, to be answered by the child-comments.

  The purpose of the megathread is to serve as a sort of subreddit of its own, an /r/askreddit about Halloween, if you will. Top-level comments should mimic regular thread titles, as questions for the child-comments to answer. Non-question top-level comments will be removed, to keep the thread as easy to use and navigate as possible.
  
  Use this thread for asking fellow redditors questions about all things Halloween-related, from costume ideas, to best memories, to favorite scary movies, and anything and everything else. And please. feel free to browse it by /new to contribute to new discussions as they arise!
  
  For those of you looking to discuss sexy Halloween, please head on over to our Sexy Halloween Megathread`),
  new Thread('AskReddit', 'r/AskReddit is looking for moderators!', `r/AskReddit is looking for new moderators. As you can probably imagine with 20+ million subscribers, the subreddit is very busy, and we need additional help to keep up with the constant demand.`),
  new Thread('learnprogramming', 'Hello', 'Blahblah'),
  new Thread('writing', `[Weekly Critique Thread] Post Here If You'd Like Feedback On Your Writing`, `Your critique submission should be a top-level comment in the thread and should include:

  *Title
  
  *Genre
  
  *Word count
  
  *Type of feedback desired (line-by-line edits, general impression, etc.)
  
  *A link to the writing`),
  new Thread('writing', `30 Creatives who broke through in their 40s, 50s & 60s`, `Lots of my writers freak out, saying they are too old, or that it's 'too late' for them to have any success as a writer. But as a cancer survivor myself, I figure that if you're not dead, you are still in with a chance! Also, the facts just don't back up the idea that there's some kind of time limit on writing success. I checked out creatives' ages when they got their break through and discovered a whopping 30 of them who were in their 40s, 50s, 60s and even beyond. Some of them are my favourites, too! Check out the list, here: http://www.bang2write.com/2016/12/the-truth-about-success-30-top-creatives-who-broke-in-late.html Good luck with your projects!`),
  new Thread('learnprogramming', `[PSA] About bots and bot tutorials`, `Bots are a complicated topic on reddit.

  Well done, they can really assist and provide value to communities, but unfortunately, such bots are the exception and not the rule.
  
  We moderators fight daily with some stupid (seemingly copy-paste code monkey programmed) "thank you", "happy cat", "sad cat", "haiku" and whatnot bots. All these bots do nothing but add clutter to a discussion and are annoyances at best.
  
  For us moderators, every useless bot means extra work.
  
  So, if you decide to write a reddit bot, please follow reddit botiquette and thoroughly test it in /r/test before letting it loose.
  
  To make it clear: Every useless, commenting bot will immediately be banned. If the creator of the bot can be identified, they will also be banned and reported to the reddit admins without any further discussion.
  
  Reddit does not need any more stupid bots. There are already more than enough.`)
]