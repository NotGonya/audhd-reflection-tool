const questions = [
  {
    q: "When someone gives you instructions with several steps",
    context: "Think about spoken instructions, meeting actions, or tasks with multiple steps.",
    A: "When someone gives me several steps, I often miss steps, forget parts, or start before I understand the full plan.",
    B: "When someone gives me several steps, I need the steps explained clearly and precisely before I feel ready to begin.",
    C: "When someone gives me several steps, I need clear instructions but I still lose track of them once I start.",
    D: "When someone gives me several steps, I usually understand the instructions and follow them without much difficulty."
  },
  {
    q: "When plans change suddenly",
    context: "Think about cancelled plans, changed meeting times, or unexpected schedule changes.",
    A: "When plans change suddenly, I can switch quickly but I may lose track of what I was originally doing.",
    B: "When plans change suddenly, I feel unsettled and need time to adjust.",
    C: "When plans change suddenly, I feel stressed by the change but also frustrated by rigid plans.",
    D: "When plans change suddenly, I usually adjust without much stress."
  },
  {
    q: "During everyday conversations",
    context: "Think about conversations with friends, colleagues, or groups.",
    A: "During conversations, I often interrupt, speak too quickly, or jump to another topic.",
    B: "During conversations, I spend effort working out tone, meaning, or when it is my turn to speak.",
    C: "During conversations, I both interrupt at times and spend effort analysing what people mean.",
    D: "During conversations, the flow of conversation usually feels natural."
  },
  {
    q: "With daily routines",
    context: "Think about sleep routines, meals, work habits, and personal tasks.",
    A: "With daily routines, I find it hard to keep routines consistent.",
    B: "With daily routines, I prefer routines to stay stable and predictable.",
    C: "With daily routines, I try to build routines but struggle to maintain them.",
    D: "With daily routines, I can use routines when helpful but I do not depend on them heavily."
  },
  {
    q: "In noisy, bright, or crowded environments",
    context: "Think about busy offices, shopping centres, airports, or loud events.",
    A: "In noisy or busy environments, I get distracted easily and struggle to stay focused.",
    B: "In noisy or busy environments, the sensory input quickly feels overwhelming.",
    C: "In noisy or busy environments, I cope at first but feel drained over time.",
    D: "In noisy or busy environments, I can usually function without much difficulty."
  },
  {
    q: "With hobbies or interests",
    context: "Think about hobbies, topics you research, shows you follow, or projects you enjoy.",
    A: "With hobbies or interests, I frequently move from one interest to another.",
    B: "With hobbies or interests, I usually stay focused on a small number of deep interests for a long time.",
    C: "With hobbies or interests, I develop intense interests but they rotate over time.",
    D: "With hobbies or interests, my interests stay fairly balanced and steady."
  },
  {
    q: "When communication is vague or unclear",
    context: "Think about hints, open-ended requests, or unclear instructions.",
    A: "When communication is vague, I tend to guess the meaning quickly but may guess incorrectly.",
    B: "When communication is vague, I prefer people to explain exactly what they mean.",
    C: "When communication is vague, I can work out the meaning but it takes effort.",
    D: "When communication is vague, I usually understand the intended meaning."
  },
  {
    q: "With attention and concentration",
    context: "Think about work, study, chores, or conversations.",
    A: "With attention and concentration, my attention shifts quickly from one thing to another.",
    B: "With attention and concentration, I can stay focused on one thing for a long period of time.",
    C: "With attention and concentration, I experience both intense focus and rapid distraction.",
    D: "With attention and concentration, my focus is usually steady enough for what I need to do."
  },
  {
    q: "After a conversation ends",
    context: "Think about how often you think about a conversation afterwards.",
    A: "After conversations, I usually move on quickly and do not think about them again.",
    B: "After conversations, I often replay the conversation and analyse what people meant.",
    C: "After conversations, I sometimes replay the conversation if it felt confusing or tense.",
    D: "After conversations, I rarely feel the need to analyse what happened."
  },
  {
    q: "When starting a task you are not interested in",
    context: "Think about emails, forms, chores, or routine work tasks.",
    A: "When starting an uninteresting task, I struggle to begin even when I know the task matters.",
    B: "When starting an uninteresting task, I need a clear structure or plan before I begin.",
    C: "When starting an uninteresting task, I need structure and still find it difficult to begin.",
    D: "When starting an uninteresting task, I can usually start the task without major difficulty."
  },
  {
    q: "After spending time with people",
    context: "Think about social events, gatherings, or group activities.",
    A: "After social time, I often feel restless or under-stimulated.",
    B: "After social time, I feel mentally drained from the effort of social interaction.",
    C: "After social time, I sometimes feel both restless and socially drained.",
    D: "After social time, I usually feel fine and recover quickly."
  },
  {
    q: "When learning something new",
    context: "Think about how you naturally approach learning new topics.",
    A: "When learning something new, I explore widely and jump between related topics.",
    B: "When learning something new, I prefer to go deeply into one topic at a time.",
    C: "When learning something new, I go deeply into several connected topics.",
    D: "When learning something new, I can learn in different ways without difficulty."
  },
  {
    q: "When following rules or systems",
    context: "Think about workplace rules, instructions, or organised systems.",
    A: "When following rules or systems, I sometimes miss details or skip steps by accident.",
    B: "When following rules or systems, I want the rules to be logical and consistent.",
    C: "When following rules or systems, I notice inconsistencies but still miss details at times.",
    D: "When following rules or systems, I can usually follow the rules without difficulty."
  },
  {
    q: "When strong emotions appear",
    context: "Think about frustration, rejection, embarrassment, or stress.",
    A: "When strong emotions appear, my emotional reactions rise quickly and strongly.",
    B: "When strong emotions appear, my emotional reactions build slowly but last longer.",
    C: "When strong emotions appear, once the emotion starts it is difficult for me to settle again.",
    D: "When strong emotions appear, my reactions are usually manageable."
  },
  {
    q: "With personal organisation",
    context: "Think about your workspace, task lists, inbox, or home organisation.",
    A: "With personal organisation, my environment often becomes messy or disorganised.",
    B: "With personal organisation, I prefer things to stay structured and organised.",
    C: "With personal organisation, I create good systems but struggle to maintain them.",
    D: "With personal organisation, my organisation usually stays workable."
  },
  {
    q: "When something strongly interests you",
    context: "Think about hobbies, games, research topics, or work you enjoy.",
    A: "When something interests me, I may start enthusiastically but later lose focus.",
    B: "When something interests me, I can stay absorbed in it for hours.",
    C: "When something interests me, I can become so focused that I lose track of time or needs.",
    D: "When something interests me, I stay engaged but keep a sense of balance."
  },
  {
    q: "When reading facial expressions or social signals",
    context: "Think about tone of voice, body language, or implied meaning.",
    A: "When reading social signals, I sometimes miss them because my attention shifts.",
    B: "When reading social signals, I often find them difficult to interpret.",
    C: "When reading social signals, I can understand them but need to think about them.",
    D: "When reading social signals, I usually recognise them automatically."
  },
  {
    q: "In environments where many things are happening",
    context: "Think about airports, shopping centres, classrooms, or busy offices.",
    A: "In busy environments, my attention gets pulled in many directions.",
    B: "In busy environments, the situation quickly feels overwhelming.",
    C: "In busy environments, I appear fine but feel drained afterwards.",
    D: "In busy environments, I can usually function without much difficulty."
  },
  {
    q: "When planning your day",
    context: "Think about deciding priorities and completing tasks.",
    A: "When planning my day, I often lose track of priorities.",
    B: "When planning my day, I prefer to follow a clear schedule or plan.",
    C: "When planning my day, I make plans but struggle to follow them.",
    D: "When planning my day, I usually plan and follow through effectively."
  },
  {
    q: "Looking at your day-to-day life overall",
    context: "Choose the pattern that causes the most consistent friction.",
    A: "Attention, task initiation, or follow-through cause the most friction in my daily life.",
    B: "Sensory overload, social processing, or change cause the most friction in my daily life.",
    C: "A mixture of attention challenges and sensory or social challenges causes friction in my daily life.",
    D: "None of these patterns cause major ongoing friction in my daily life."
  }
];