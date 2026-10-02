/* Three lenses: consequences, duties, character.
   Load with index.html?q=three-lenses
   "answer" is the index of the correct option (0 = A, 1 = B, ...). */
loadQuiz({
  title: "Three lenses: consequences, duties, character",
  questions: [
    {
      prompt: "Deontology locates the rightness of an action primarily in…",
      options: [
        "The overall balance of good and bad outcomes the action produces",
        "Whether the action conforms to duties or constraints, regardless of how things turn out",
        "Whether the action expresses the character of a good person",
        "Whether everyone affected could reasonably agree to the principle behind it"
      ],
      answer: 1,
      hint: "The word comes from the Greek deon: duty, what is binding.",
      right: "Exactly — rules over results.",
      wrong: "Close, but that's a different lens.",
      explanation: "Deontology judges acts by whether they honor duties, rights, or constraints. Some acts are wrong even if they'd produce better outcomes. (A) is consequentialism, (C) is virtue ethics, and (D) is contractualism, the “fourth family” that asks what principles reasonable people could agree to."
    },
    {
      prompt: "Your friend is in the hospital. Someone says: “A good friend wouldn't stop to calculate whether visiting is worth it, or check whether there's a duty to go. They'd just go.” Which lens is this?",
      options: [
        "Consequentialism",
        "Deontology",
        "Virtue ethics",
        "None. It's just an emotional reaction, not ethical reasoning"
      ],
      answer: 2,
      hint: "The speaker rejects both calculating and rule-checking. What's left?",
      right: "Yes — character, not calculation.",
      wrong: "Look again at what the speaker is rejecting.",
      explanation: "This is virtue ethics. Rightness flows from character: a good friend is the kind of person who simply goes. Bernard Williams called the extra step of justification “one thought too many.” Note that the statement uses no signature vocabulary like “virtue” or “character,” yet the structure gives it away."
    },
    {
      prompt: "Three roommates agree: “Don't lie about who broke the lamp.” Which justification is consequentialist?",
      options: [
        "“Lying treats the other person as a mere means to avoiding blame.”",
        "“If lies get discovered, trust in the household erodes and everyone ends up worse off.”",
        "“An honest person owns their mistakes. That's who I want to be.”",
        "“There's a house rule against lying, and rules are rules.”"
      ],
      answer: 1,
      hint: "Find the answer that points forward in time, to effects.",
      right: "Right — justified by effects.",
      wrong: "Same verdict, different reasoning.",
      explanation: "(B) justifies honesty by its effects on everyone's wellbeing. (A) is Kantian deontology, the humanity formulation. (C) is virtue ethics. (D) is rule-following, but a thin version, since it doesn't say why the rule binds. The lesson: the same verdict can rest on entirely different reasoning, so you identify the lens by the “why,” not the “what.”"
    },
    {
      prompt: "For Aristotle, courage is a mean between cowardice and recklessness. How do you find that mean in a particular situation?",
      options: [
        "Take the arithmetic midpoint: always be moderately brave",
        "Consult a fixed rule specifying how much risk is acceptable",
        "Use practical wisdom (phronesis) to judge what the situation calls for",
        "Choose whichever level of boldness maximizes expected outcomes"
      ],
      answer: 2,
      hint: "Courage in battle and courage behind the wheel look very different.",
      right: "Yes — phronesis does the work.",
      wrong: "Not quite. “The mean” isn't a formula.",
      explanation: "The mean is “relative to us” and to the situation, not a fixed midpoint. Phronesis, practical wisdom, is the skill of perceiving what a situation requires: courage on a battlefield differs from courage while driving. Aristotle also held that some acts, such as murder and theft, admit no mean at all and are simply prohibited. That is a hard floor beneath the graded virtues."
    },
    {
      prompt: "Nozick's “utility monster” gains so much from resources that strict calculation says to give it everything at everyone else's expense. Which theory does it challenge, and what's the ML analogue?",
      options: [
        "Deontology; distributional shift",
        "Consequentialism; specification gaming",
        "Virtue ethics; safe exploration",
        "Consequentialism; scalable oversight"
      ],
      answer: 1,
      hint: "What happens when you optimize the stated objective perfectly?",
      right: "Exactly — philosophers found it first.",
      wrong: "Think about optimizing an objective too literally.",
      explanation: "The utility monster satisfies the letter of “maximize total utility” while defeating its spirit. That is specification gaming, or reward hacking in Amodei et al.'s terms, constructed by a philosopher in 1974, more than forty years before ML researchers named it. Each theory has its own failure mode: consequentialism gets gamed, deontology gets loopholes and edge cases, and virtue ethics gets trait conflict."
    },
    {
      prompt: "Anthropic's constitution asks Claude to do what a deeply and skillfully ethical person would do, but also sets a few hard constraints that can't be overridden. How is this best described?",
      options: [
        "Pure virtue ethics",
        "Pure deontology using virtue vocabulary",
        "A virtue-ethics framework with deontological side-constraints",
        "Consequentialism, since the goal is to avoid bad outcomes"
      ],
      answer: 2,
      hint: "Two layers: one for most cases, one for a few absolute limits.",
      right: "Right — a hybrid, like Aristotle's.",
      wrong: "Look for two layers working together.",
      explanation: "Most behavior is meant to flow from judgment and character, which is virtue ethics. A small set of absolute prohibitions sits underneath, which is deontology. Critics call this a “double bind,” but it mirrors Aristotle's own structure: graded virtues plus acts that admit no mean. Real ethical systems for humans and machines are often hybrids. The useful skill is naming which lens governs which part."
    }
  ]
});
