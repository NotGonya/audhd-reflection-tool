const questions = [
  {
    q: "When given instructions",
    context: "Think about verbal instructions, meeting actions, or multi-step tasks before you write things down or build a system around them.",
    A: "I often lose steps, forget parts, or start before I have the full sequence.",
    B: "I need the steps to be clear and precise or I feel uncertain.",
    C: "I need clarity, but I also still lose steps or drift off track.",
    D: "I usually take in the instructions and follow them without much friction."
  },
  {
    q: "When plans suddenly change",
    context: "Think about cancelled plans, changed meeting times, new priorities, or unexpected detours.",
    A: "I can pivot quickly, but I may lose track of details or direction.",
    B: "It throws me off and I need time to adjust.",
    C: "I dislike the change, but I also dislike being locked into rigid plans.",
    D: "I usually adjust without much stress or disruption."
  },
  {
    q: "In conversation",
    context: "Think about everyday chats, work meetings, and group settings.",
    A: "I interrupt, jump ahead, or shift topics quickly.",
    B: "I spend effort working out social rules, tone, or timing.",
    C: "I do both of those things.",
    D: "Conversations usually flow without much effort or second-guessing."
  },
  {
    q: "With routines",
    context: "Think about sleep, meals, work rituals, exercise, or personal admin.",
    A: "I struggle to keep routines going consistently.",
    B: "I strongly prefer routines and feel better when they stay stable.",
    C: "I want routines and often build them, but I struggle to keep them.",
    D: "I can use routines when useful, but I do not rely on them heavily."
  },
  {
    q: "In sensory environments",
    context: "Think about noise, bright lights, crowds, scratchy clothing, smells, or busy rooms.",
    A: "I get distracted or pulled off task by the environment.",
    B: "The environment can feel overwhelming quite quickly.",
    C: "I can manage for a while, but it drains me over time.",
    D: "Most sensory environments feel manageable."
  },
  {
    q: "With interests",
    context: "Think about hobbies, research topics, shows, collections, or deep dives.",
    A: "I jump from one interest to another.",
    B: "I tend to keep deep, long-term interests.",
    C: "I get intense interests, but they rotate.",
    D: "My interests feel fairly balanced and steady."
  },
  {
    q: "When communication is vague",
    context: "Think about unclear requests like 'what are your thoughts?' or broad social hints.",
    A: "I fill in the gaps fast, but I can miss what was really wanted.",
    B: "I prefer direct, literal, clear language.",
    C: "I can work it out, but it takes effort and drains me.",
    D: "I usually infer the meaning comfortably."
  },
  {
    q: "With attention",
    context: "Think about work, study, chores, hobbies, and conversations.",
    A: "My attention jumps around quickly.",
    B: "I can get deeply absorbed in one thing.",
    C: "Both happen a lot for me.",
    D: "My attention is fairly steady for what I need to do."
  },
  {
    q: "After conversations",
    context: "Think about replaying things after social or work interactions.",
    A: "I usually move on quickly, sometimes before I have fully processed what mattered.",
    B: "I analyse what happened, what I said, and what others meant.",
    C: "I do that sometimes, especially if the interaction felt unclear.",
    D: "I usually move on without much replay or confusion."
  },
  {
    q: "When starting tasks",
    context: "Think about boring tasks, admin, emails, or anything with low interest.",
    A: "Starting is hard, even when I know it matters.",
    B: "I need clear structure before I can start well.",
    C: "I need structure and I still struggle to start.",
    D: "I can usually start tasks without major friction."
  },
  {
    q: "With social interaction",
    context: "Think about the kind of tired you feel after being around people.",
    A: "Social time tires me because I get bored, restless, or under-stimulated.",
    B: "Social time tires me because of processing, masking, or social effort.",
    C: "Both of those happen.",
    D: "Social interaction is usually manageable without heavy drain."
  },
  {
    q: "When learning new topics",
    context: "Think about how you naturally explore ideas, not how you were taught to study.",
    A: "I skim broadly and jump across topics.",
    B: "I prefer deep, structured learning in one area.",
    C: "I go very deep, but often across multiple linked topics.",
    D: "I can learn broadly or deeply without strong friction either way."
  },
  {
    q: "With rules and systems",
    context: "Think about policies, instructions, processes, games, or social rules.",
    A: "I miss details or skip parts by accident.",
    B: "I want rules and systems to be logical and consistent.",
    C: "I notice inconsistency, but I also still miss or skip parts.",
    D: "I can usually follow and apply systems without much strain."
  },
  {
    q: "With emotional reactions",
    context: "Think about frustration, shame, overwhelm, rejection, or sudden stress.",
    A: "My reactions rise quickly and hit hard.",
    B: "My reactions build more slowly and steadily.",
    C: "My reactions can be hard to regulate once they start.",
    D: "My emotional reactions are usually proportionate and manageable."
  },
  {
    q: "With organisation",
    context: "Think about your desk, inbox, life admin, home systems, or task lists.",
    A: "Things often become messy or chaotic around me.",
    B: "I prefer structure and order.",
    C: "I build good systems, but I do not always maintain them.",
    D: "My organisation is usually workable without much effort."
  },
  {
    q: "When something is interesting",
    context: "Think about hobbies, urgent research, games, or work you care about.",
    A: "I get pulled off later even if I start strong.",
    B: "I can stay absorbed for hours.",
    C: "I can hyperfocus hard and lose track of time or needs.",
    D: "I can stay engaged, but I usually keep balance and awareness."
  },
  {
    q: "Reading facial expressions and social cues",
    context: "Think about tone, mood, implied meaning, and non-verbal signals.",
    A: "I can miss signals because my attention jumps or I move too fast.",
    B: "I often find them hard to read.",
    C: "I can read them, but it takes conscious effort.",
    D: "I usually read social cues automatically enough."
  },
  {
    q: "In busy environments",
    context: "Think about shopping centres, open-plan offices, schools, airports, or family gatherings.",
    A: "They distract me and make it hard to stay on one thing.",
    B: "They overwhelm me.",
    C: "They wear me down, even if I seem fine at first.",
    D: "I can usually function in them without major strain."
  },
  {
    q: "When planning the day",
    context: "Think about setting priorities and following through, not only making lists.",
    A: "I lose sight of priorities or get pulled into whatever is loudest.",
    B: "I prefer a schedule and feel better with one.",
    C: "I make plans, but I often do not follow them the way I meant to.",
    D: "I can usually plan and follow through without major friction."
  },
  {
    q: "Overall, which feels hardest most often",
    context: "Pick the broad pattern that best describes your day-to-day friction.",
    A: "Attention, initiation, follow-through, or lost steps.",
    B: "Sensory load, social processing, change, or predictability.",
    C: "A real mixture of both.",
    D: "None of those feel like a major ongoing theme most of the time."
  }
];
