// Stoic Philosophy Quotes Collection
// A curated collection of quotes from ancient Stoic philosophers

export interface Quote {
  id: number;
  text: string;
  author: string;
  work: string;
  book: string | null;
  themes: string[];
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  length: "very_short" | "short" | "medium" | "long";
  popularity: "low" | "medium" | "high" | "very_high";
  context: string;
  modernRelevance: string;
}

export interface Author {
  fullName: string;
  lifespan: string;
  role: string;
  mainWork: string;
  background: string;
}

export interface QuotesMetadata {
  title: string;
  description: string;
  version: string;
  lastUpdated: string;
  totalQuotes: number;
  philosophers: string[];
  themes: string[];
}

export interface QuotesCollection {
  metadata: QuotesMetadata;
  quotes: Quote[];
  categories: Record<string, string>;
  authors: Record<string, Author>;
  usageNotes: Record<string, string>;
}

export const quotesData: QuotesCollection = {
  "metadata": {
    "title": "Stoic Philosophy Quotes Collection",
    "description": "A curated collection of quotes from ancient Stoic philosophers",
    "version": "1.0",
    "lastUpdated": "2025-07-30",
    "totalQuotes": 30,
    "philosophers": ["Marcus Aurelius", "Epictetus", "Seneca", "Zeno of Citium", "Chrysippus", "Cato the Younger"],
    "themes": ["wisdom", "virtue", "resilience", "acceptance", "discipline", "death", "happiness", "control", "mindfulness", "character"]
  },
  "quotes": [
    {
      "id": 1,
      "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book II",
      "themes": ["control", "strength", "mindfulness"],
      "category": "personal_power",
      "difficulty": "beginner",
      "length": "short",
      "popularity": "high",
      "context": "Written as personal reflections during military campaigns",
      "modernRelevance": "Applicable to stress management and mental health"
    },
    {
      "id": 2,
      "text": "It's not what happens to you, but how you react to it that matters.",
      "author": "Epictetus",
      "work": "Enchiridion",
      "book": null,
      "themes": ["control", "resilience", "perspective"],
      "category": "response_to_adversity",
      "difficulty": "beginner",
      "length": "short",
      "popularity": "very_high",
      "context": "Teaching from a former slave who became a renowned philosopher",
      "modernRelevance": "Fundamental principle of cognitive behavioral therapy"
    },
    {
      "id": 3,
      "text": "We suffer more often in imagination than in reality.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter XIII",
      "themes": ["anxiety", "mindfulness", "perspective"],
      "category": "mental_discipline",
      "difficulty": "beginner",
      "length": "short",
      "popularity": "high",
      "context": "Advice to his friend Lucilius about managing worry",
      "modernRelevance": "Relevant to anxiety disorders and overthinking"
    },
    {
      "id": 4,
      "text": "The best revenge is not to be like your enemy.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book VI",
      "themes": ["virtue", "character", "forgiveness"],
      "category": "ethics",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "high",
      "context": "Reflections on dealing with difficult people and maintaining virtue",
      "modernRelevance": "Applies to conflict resolution and maintaining integrity"
    },
    {
      "id": 5,
      "text": "Wealth consists in not having great possessions, but in having few wants.",
      "author": "Epictetus",
      "work": "Discourses",
      "book": "Book IV",
      "themes": ["contentment", "simplicity", "desire"],
      "category": "materialism",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "medium",
      "context": "Teaching about true wealth and contentment",
      "modernRelevance": "Relevant to minimalism and consumer culture critique"
    },
    {
      "id": 6,
      "text": "Every new beginning comes from some other beginning's end.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter LXXVII",
      "themes": ["change", "acceptance", "transformation"],
      "category": "change_and_impermanence",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "medium",
      "context": "Discussing the nature of change and transitions in life",
      "modernRelevance": "Helpful for career changes and life transitions"
    },
    {
      "id": 7,
      "text": "Confine yourself to the present.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book VII",
      "themes": ["mindfulness", "present_moment", "focus"],
      "category": "mindfulness",
      "difficulty": "beginner",
      "length": "very_short",
      "popularity": "medium",
      "context": "Advice on maintaining focus and avoiding distractions",
      "modernRelevance": "Central to mindfulness and meditation practices"
    },
    {
      "id": 8,
      "text": "He is not poor who has little, but he who wants more.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter II",
      "themes": ["contentment", "desire", "gratitude"],
      "category": "materialism",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "medium",
      "context": "Teaching Lucilius about the nature of poverty and wealth",
      "modernRelevance": "Relevant to financial wellness and gratitude practices"
    },
    {
      "id": 9,
      "text": "The discipline of desire is the background of character.",
      "author": "Epictetus",
      "work": "Discourses",
      "book": "Book III",
      "themes": ["discipline", "character", "self_control"],
      "category": "character_development",
      "difficulty": "advanced",
      "length": "short",
      "popularity": "low",
      "context": "Teaching about the three disciplines of Stoic practice",
      "modernRelevance": "Applicable to habit formation and self-improvement"
    },
    {
      "id": 10,
      "text": "When we are no longer able to change a situation, we are challenged to change ourselves.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book IV",
      "themes": ["adaptation", "resilience", "self_improvement"],
      "category": "response_to_adversity",
      "difficulty": "intermediate",
      "length": "medium",
      "popularity": "high",
      "context": "Reflection on dealing with unchangeable circumstances",
      "modernRelevance": "Relevant to therapy and personal development"
    },
    {
      "id": 11,
      "text": "The willing, destiny guides them. The unwilling, destiny drags them.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter CVII",
      "themes": ["fate", "acceptance", "cooperation"],
      "category": "fate_and_destiny",
      "difficulty": "advanced",
      "length": "short",
      "popularity": "medium",
      "context": "Discussing the Stoic concept of fate and our relationship to it",
      "modernRelevance": "Applicable to accepting life's challenges with grace"
    },
    {
      "id": 12,
      "text": "Don't explain your philosophy. Embody it.",
      "author": "Epictetus",
      "work": "Discourses",
      "book": "Book II",
      "themes": ["action", "practice", "authenticity"],
      "category": "practical_wisdom",
      "difficulty": "intermediate",
      "length": "very_short",
      "popularity": "high",
      "context": "Teaching about the importance of living one's principles",
      "modernRelevance": "Relevant to leadership and personal integrity"
    },
    {
      "id": 13,
      "text": "A person's worth is measured by the worth of what he values.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book III",
      "themes": ["values", "character", "priorities"],
      "category": "values_and_priorities",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "medium",
      "context": "Reflection on what makes a person valuable",
      "modernRelevance": "Relevant to goal setting and life purpose"
    },
    {
      "id": 14,
      "text": "Life is long enough if you know how to use it.",
      "author": "Seneca",
      "work": "On the Shortness of Life",
      "book": null,
      "themes": ["time", "mortality", "purpose"],
      "category": "time_and_mortality",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "high",
      "context": "Essay on making the most of our limited time",
      "modernRelevance": "Relevant to time management and life satisfaction"
    },
    {
      "id": 15,
      "text": "No man is free who is not master of himself.",
      "author": "Epictetus",
      "work": "Discourses",
      "book": "Book II",
      "themes": ["freedom", "self_control", "mastery"],
      "category": "freedom_and_autonomy",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "medium",
      "context": "Teaching about true freedom coming from self-discipline",
      "modernRelevance": "Relevant to addiction recovery and self-improvement"
    },
    {
      "id": 16,
      "text": "Remember that very little disturbs us. It is our judgment on events, not the events themselves.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book IV",
      "themes": ["judgment", "perception", "peace"],
      "category": "mental_discipline",
      "difficulty": "intermediate",
      "length": "medium",
      "popularity": "medium",
      "context": "Reflection on the source of our emotional disturbances",
      "modernRelevance": "Core principle of rational emotive behavior therapy"
    },
    {
      "id": 17,
      "text": "The mind that is anxious about future misfortunes is miserable.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter XCVIII",
      "themes": ["anxiety", "future", "present_moment"],
      "category": "mental_discipline",
      "difficulty": "beginner",
      "length": "short",
      "popularity": "medium",
      "context": "Advice about not borrowing trouble from the future",
      "modernRelevance": "Highly relevant to anxiety management"
    },
    {
      "id": 18,
      "text": "First say to yourself what kind of person you want to be, then do what you have to do.",
      "author": "Epictetus",
      "work": "Discourses",
      "book": "Book III",
      "themes": ["identity", "character", "purpose"],
      "category": "character_development",
      "difficulty": "intermediate",
      "length": "medium",
      "popularity": "high",
      "context": "Teaching about aligning actions with desired character",
      "modernRelevance": "Fundamental to personal development and goal setting"
    },
    {
      "id": 19,
      "text": "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book VII",
      "themes": ["acceptance", "fate", "relationships"],
      "category": "acceptance_and_love",
      "difficulty": "intermediate",
      "length": "medium",
      "popularity": "high",
      "context": "Advice on embracing our circumstances and relationships",
      "modernRelevance": "Applicable to relationship counseling and acceptance therapy"
    },
    {
      "id": 20,
      "text": "Every moment we have is a gift. We should be grateful for it rather than frustrated by its brevity.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter LXXVII",
      "themes": ["gratitude", "mortality", "appreciation"],
      "category": "gratitude_and_appreciation",
      "difficulty": "beginner",
      "length": "medium",
      "popularity": "medium",
      "context": "Reflection on appreciating the present moment",
      "modernRelevance": "Central to gratitude practices and mindfulness"
    },
    {
      "id": 21,
      "text": "Seek not to have events happen as you want them to happen, but as they happen, you will be happy.",
      "author": "Epictetus",
      "work": "Enchiridion",
      "book": null,
      "themes": ["acceptance", "happiness", "expectations"],
      "category": "happiness_and_contentment",
      "difficulty": "intermediate",
      "length": "medium",
      "popularity": "high",
      "context": "Teaching about finding happiness through acceptance",
      "modernRelevance": "Relevant to managing expectations and finding peace"
    },
    {
      "id": 22,
      "text": "The happiness of your life depends upon the quality of your thoughts.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book II",
      "themes": ["happiness", "thoughts", "mindfulness"],
      "category": "happiness_and_contentment",
      "difficulty": "beginner",
      "length": "short",
      "popularity": "very_high",
      "context": "Reflection on the power of our mental habits",
      "modernRelevance": "Foundation of positive psychology and CBT"
    },
    {
      "id": 23,
      "text": "It is not death that a man should fear, but never beginning to live.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book XII",
      "themes": ["death", "courage", "authentic_living"],
      "category": "courage_and_mortality",
      "difficulty": "advanced",
      "length": "short",
      "popularity": "medium",
      "context": "Reflection on living fully rather than fearing death",
      "modernRelevance": "Relevant to overcoming fear and living authentically"
    },
    {
      "id": 24,
      "text": "The greatest remedy for anger is delay.",
      "author": "Seneca",
      "work": "On Anger",
      "book": "Book III",
      "themes": ["anger", "patience", "emotional_regulation"],
      "category": "emotional_management",
      "difficulty": "beginner",
      "length": "very_short",
      "popularity": "high",
      "context": "Practical advice from his treatise on managing anger",
      "modernRelevance": "Highly applicable to anger management and emotional intelligence"
    },
    {
      "id": 25,
      "text": "How much trouble he avoids who does not look to see what his neighbor says or does.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book IV",
      "themes": ["focus", "boundaries", "peace"],
      "category": "personal_boundaries",
      "difficulty": "intermediate",
      "length": "medium",
      "popularity": "medium",
      "context": "Advice on maintaining focus on one's own path",
      "modernRelevance": "Relevant to social media usage and personal boundaries"
    },
    {
      "id": 26,
      "text": "What we plant in the soil of contemplation, we shall reap in the harvest of action.",
      "author": "Meister Eckhart",
      "work": "Various Sermons",
      "book": null,
      "themes": ["contemplation", "action", "wisdom"],
      "category": "wisdom_and_action",
      "difficulty": "advanced",
      "length": "medium",
      "popularity": "low",
      "context": "Teaching about the relationship between thought and action",
      "modernRelevance": "Applicable to meditation and intentional living"
    },
    {
      "id": 27,
      "text": "The soul becomes dyed with the color of its thoughts.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book V",
      "themes": ["thoughts", "character", "influence"],
      "category": "mental_discipline",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "high",
      "context": "Reflection on how our thinking patterns shape who we become",
      "modernRelevance": "Relevant to neuroplasticity and cognitive behavioral therapy"
    },
    {
      "id": 28,
      "text": "Difficulties strengthen the mind, as labor does the body.",
      "author": "Seneca",
      "work": "Letters from a Stoic",
      "book": "Letter LXXI",
      "themes": ["resilience", "growth", "adversity"],
      "category": "resilience_and_growth",
      "difficulty": "intermediate",
      "length": "short",
      "popularity": "medium",
      "context": "Encouragement to view challenges as opportunities for growth",
      "modernRelevance": "Relevant to resilience training and post-traumatic growth"
    },
    {
      "id": 29,
      "text": "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
      "author": "Epictetus",
      "work": "Discourses",
      "book": "Book IV",
      "themes": ["freedom", "control", "liberation"],
      "category": "freedom_and_autonomy",
      "difficulty": "advanced",
      "length": "medium",
      "popularity": "medium",
      "context": "Teaching about achieving true freedom through the dichotomy of control",
      "modernRelevance": "Central to acceptance-based therapies and stress management"
    },
    {
      "id": 30,
      "text": "Be like the rocky headland on which the waves constantly break. It stands firm, and round it the seething waters are laid to rest.",
      "author": "Marcus Aurelius",
      "work": "Meditations",
      "book": "Book IV",
      "themes": ["resilience", "steadiness", "calm"],
      "category": "resilience_and_stability",
      "difficulty": "advanced",
      "length": "long",
      "popularity": "medium",
      "context": "Metaphor for maintaining stability amid life's storms",
      "modernRelevance": "Applicable to stress management and emotional regulation"
    }
  ],
  "categories": {
    "personal_power": "Quotes about taking control of one's mind and responses",
    "response_to_adversity": "Wisdom on handling challenges and setbacks",
    "mental_discipline": "Quotes about training and disciplining the mind",
    "ethics": "Moral and ethical guidance",
    "materialism": "Teachings on wealth, possessions, and contentment",
    "change_and_impermanence": "Accepting and adapting to change",
    "mindfulness": "Present-moment awareness and focus",
    "character_development": "Building virtue and good character",
    "fate_and_destiny": "Understanding our relationship with fate",
    "practical_wisdom": "Actionable philosophical guidance",
    "values_and_priorities": "Determining what matters most",
    "time_and_mortality": "Making the most of our limited time",
    "freedom_and_autonomy": "Achieving true freedom and independence",
    "acceptance_and_love": "Embracing life and relationships",
    "gratitude_and_appreciation": "Cultivating thankfulness",
    "happiness_and_contentment": "Finding genuine satisfaction",
    "courage_and_mortality": "Facing death and living courageously",
    "emotional_management": "Handling emotions skillfully",
    "personal_boundaries": "Maintaining healthy limits and focus",
    "wisdom_and_action": "Connecting contemplation with action",
    "resilience_and_growth": "Growing stronger through challenges",
    "resilience_and_stability": "Maintaining steadiness in turbulent times"
  },
  "authors": {
    "Marcus Aurelius": {
      "fullName": "Marcus Aurelius Antoninus",
      "lifespan": "121-180 CE",
      "role": "Roman Emperor and Philosopher",
      "mainWork": "Meditations",
      "background": "Last of the 'Five Good Emperors', wrote personal reflections never intended for publication"
    },
    "Epictetus": {
      "fullName": "Epictetus",
      "lifespan": "50-135 CE",
      "role": "Greek Stoic Philosopher",
      "mainWork": "Discourses and Enchiridion",
      "background": "Born a slave, became one of the most influential Stoic teachers"
    },
    "Seneca": {
      "fullName": "Lucius Annaeus Seneca",
      "lifespan": "4 BCE-65 CE",
      "role": "Roman Philosopher and Statesman",
      "mainWork": "Letters from a Stoic",
      "background": "Advisor to Emperor Nero, wealthy but practiced Stoic principles"
    }
  },
  "usageNotes": {
    "filtering": "Use themes, categories, difficulty, and popularity for filtering",
    "display": "Length field helps determine appropriate display contexts",
    "context": "Context and modernRelevance provide additional information for users",
    "randomization": "ID field allows for easy random quote selection",
    "accessibility": "All quotes include difficulty ratings for progressive learning"
  }
};

// Utility functions for quote filtering and selection
export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
  return quotesData.quotes[randomIndex];
}

export function getQuoteById(id: number): Quote | undefined {
  return quotesData.quotes.find(quote => quote.id === id);
}

export function getQuotesByAuthor(author: string): Quote[] {
  return quotesData.quotes.filter(quote => quote.author === author);
}

export function getQuotesByTheme(theme: string): Quote[] {
  return quotesData.quotes.filter(quote => quote.themes.includes(theme));
}

export function getQuotesByCategory(category: string): Quote[] {
  return quotesData.quotes.filter(quote => quote.category === category);
}

export function getQuotesByDifficulty(difficulty: Quote['difficulty']): Quote[] {
  return quotesData.quotes.filter(quote => quote.difficulty === difficulty);
}

export function getQuotesByLength(length: Quote['length']): Quote[] {
  return quotesData.quotes.filter(quote => quote.length === length);
}

export function getQuotesByPopularity(popularity: Quote['popularity']): Quote[] {
  return quotesData.quotes.filter(quote => quote.popularity === popularity);
}

export function getAllThemes(): string[] {
  return quotesData.metadata.themes;
}

export function getAllCategories(): Record<string, string> {
  return quotesData.categories;
}

export function getAllAuthors(): Record<string, Author> {
  return quotesData.authors;
} 