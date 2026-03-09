const questions = [
  {
    q: "When you are given steps to follow",
    context: "Think about spoken instructions, meeting actions, or jobs with several steps.",
    A: "I miss steps, forget parts, or start before I have the full plan.",
    B: "I need the steps to be clear and exact before I feel ready.",
    C: "I need clear steps, and I still lose track once I start.",
    D: "I usually understand the steps and follow them without much trouble."
  },
  {
    q: "When plans change at short notice",
    context: "Think about cancelled plans, changed meeting times, or a sudden change in priorities.",
    A: "I switch quickly, but I can lose track of what I was doing.",
    B: "The change unsettles me and I need time to adjust.",
    C: "I feel stressed by the change, but I also feel boxed in by fixed plans.",
    D: "I usually adjust without much stress."
  },
  {
    q: "During everyday conversations",
    context: "Think about chats with friends, work meetings, and group conversations.",
    A: "I interrupt, speak too soon, or jump topics.",
    B: "I spend effort working out tone, timing, or what is expected.",
    C: "I do both of those things.",
    D: "Conversation usually feels natural and easy enough."
  },
  {
    q: "With daily routines",
    context: "Think about sleep, meals, work habits, exercise, and admin tasks.",
    A: "I find it hard to keep routines going.",
    B: "I like routines and feel better when they stay the same.",
    C: "I want routines, but I struggle to keep them going.",
    D: "I can use routines when helpful, but I do not depend on them much."
  },
  {
    q: "In noisy, bright, or busy places",
    context: "Think about crowds, strong smells, bright lights, background noise, or scratchy clothes.",
    A: "I get distracted and pulled off task.",
    B: "I feel overloaded or overwhelmed quite quickly.",
    C: "I cope at first, but it wears me down over time.",
    D: "Most places like this feel manageable."
  },
  {
    q: "With hobbies and interests",
    context: "Think about hobbies, topics you research, shows, collections, or projects.",
    A: "I move from one interest to another a lot.",
    B: "I keep a few deep interests for a long time.",
    C: "I get very into things, but my main interests rotate.",
    D: "My interests feel fairly steady and balanced."
  },
  {
    q: "When someone is not clear",
    context: "Think about vague requests, hints, or open-ended comments.",
    A: "I fill in the gaps fast, but I can guess wrong.",
    B: "I want people to say exactly what they mean.",
    C: "I can work it out, but it takes effort.",
    D: "I usually work out the meaning without much trouble."
  },
  {
    q: "With attention and focus",
    context: "Think about work, study, chores, hobbies, and conversations.",
    A: "My attention moves around quickly.",
    B: "I can stay locked onto one thing for a long time.",
    C: "Both of those happen a lot for me.",
    D: "My focus is fairly steady for what I need to do."
  },
  {
    q: "After a conversation ends",
    context: "Think about how often you replay conversations in your head.",
    A: "I move on fast, sometimes before I have taken it all in.",
    B: "I replay it and think about what people meant.",
    C: "I do that sometimes, mostly if it felt unclear or tense.",
    D: "I usually move on without much replay or doubt."
  },
  {
    q: "When you need to start a boring task",
    context: "Think about emails, forms, chores, or low-interest tasks.",
    A: "Starting feels hard, even when I know it matters.",
    B: "I need a clear plan or structure before I can start well.",
    C: "I need structure, and I still struggle to start.",
    D: "I can usually get started without major trouble."
  },
  {
    q: "After spending time with people",
    context: "Think about the kind of tiredness you feel after social time.",
    A: "I feel restless, bored, or under-stimulated.",
    B: "I feel drained by the social effort, reading people, or holding it together.",
    C: "Both of those happen.",
    D: "Social time is usually manageable and not too draining."
  },
  {
    q: "When learning something new",
    context: "Think about how you naturally learn, not how you were taught at school.",
    A: "I skim, explore widely, and jump across topics.",
    B: "I prefer deep learning in one clear area at a time.",
    C: "I go deep, but across several linked topics.",
    D: "I can learn in different ways without much strain."
  },
  {
    q: "With rules, systems, and processes",
    context: "Think about policies, instructions, games, or agreed ways of doing things.",
    A: "I miss details or skip parts by accident.",
    B: "I want systems to make sense and stay consistent.",
    C: "I notice when things do not make sense, but I still miss parts at times.",
    D: "I can usually follow systems without much strain."
  },
  {
    q: "When emotions rise",
    context: "Think about frustration, shame, rejection, stress, or feeling overwhelmed.",
    A: "My reaction rises fast and hits hard.",
    B: "My reaction builds more slowly and stays with me.",
    C: "Once it starts, it can be hard to settle again.",
    D: "My reactions are usually manageable for the situation."
  },
  {
    q: "With organisation",
    context: "Think about your desk, inbox, task list, home systems, or life admin.",
    A: "Things often get messy or chaotic around me.",
    B: "I like order and feel better when things are organised.",
    C: "I build good systems, but I do not keep them going well.",
    D: "My organisation is usually good enough without much effort."
  },
  {
    q: "When something is interesting",
    context: "Think about games, hobbies, urgent research, or work you care about.",
    A: "I start strong, but later get pulled away.",
    B: "I can stay absorbed in it for hours.",
    C: "I can get so focused that I lose track of time or my needs.",
    D: "I stay engaged, but I usually keep balance and awareness."
  },
  {
    q: "Reading facial expressions and social cues",
    context: "Think about tone of voice, mood, hints, and body language.",
    A: "I miss cues because I move too fast or my attention shifts.",
    B: "I often find cues hard to read.",
    C: "I can read them, but I need to think about it.",
    D: "I usually pick up social cues without much effort."
  },
  {
    q: "In places with a lot going on",
    context: "Think about airports, shopping centres, open-plan offices, schools, or family gatherings.",
    A: "There is too much to notice, and I get pulled in many directions.",
    B: "It feels overwhelming.",
    C: "I seem fine at first, but it drains me later.",
    D: "I can usually function in places like this without major strain."
  },
  {
    q: "When planning your day",
    context: "Think about setting priorities and then following through.",
    A: "I lose sight of priorities or get pulled into the loudest thing.",
    B: "I like having a plan or schedule and feel better with one.",
    C: "I make plans, but I often do not follow them the way I meant to.",
    D: "I can usually plan and follow through without major trouble."
  },
  {
    q: "Overall, what causes the most day-to-day friction",
    context: "Pick the broad pattern that fits most often.",
    A: "Attention, getting started, following through, or losing steps.",
    B: "Sensory load, social effort, change, or needing predictability.",
    C: "A real mix of both.",
    D: "None of those feels like a major ongoing issue most of the time."
  }
];
