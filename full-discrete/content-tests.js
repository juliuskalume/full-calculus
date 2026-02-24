window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.2-dm";
  window.FCContentData.VERSION = VERSION;

  const testBlueprints = [
  {
    "id": "placement-c1",
    "courseId": "calc-1",
    "chapterId": "c1-logic-proofs-basics",
    "title": "Placement Test: Discrete Math I",
    "questionCount": 50,
    "timeLimitSec": 3600,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": []
    },
    "rewards": {
      "xp": 150,
      "unlockSectionIds": []
    },
    "placementCourse": "calc-1",
    "fallbackScope": "course",
    "version": "2026.2-dm"
  },
  {
    "id": "placement-c2",
    "courseId": "calc-2",
    "chapterId": "c2-graph-theory-basics",
    "title": "Placement Test: Discrete Math II",
    "questionCount": 50,
    "timeLimitSec": 3600,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": []
    },
    "rewards": {
      "xp": 180,
      "unlockSectionIds": []
    },
    "placementCourse": "calc-2",
    "fallbackScope": "course",
    "version": "2026.2-dm"
  },
  {
    "id": "placement-c3",
    "courseId": "calc-3",
    "chapterId": "c3-automata-basics",
    "title": "Placement Test: Discrete Math III",
    "questionCount": 50,
    "timeLimitSec": 3600,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": []
    },
    "rewards": {
      "xp": 200,
      "unlockSectionIds": []
    },
    "placementCourse": "calc-3",
    "fallbackScope": "course",
    "version": "2026.2-dm"
  },
  {
    "id": "test-c1-logic-proofs-basics",
    "courseId": "calc-1",
    "chapterId": "c1-logic-proofs-basics",
    "title": "Unit Test: Logic and Proofs",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.logic.propositions"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.logic.connectives"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.logic.quantifiers"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.logic.proofs"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c1-sets-functions-basics",
    "courseId": "calc-1",
    "chapterId": "c1-sets-functions-basics",
    "title": "Unit Test: Sets and Functions",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.sets.operations"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.sets.power"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.functions.injective"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.functions.composition"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c1-counting-basics",
    "courseId": "calc-1",
    "chapterId": "c1-counting-basics",
    "title": "Unit Test: Counting Principles",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.counting.rules"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.counting.permutations"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.counting.combinations"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.counting.pigeonhole"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c1-relations-basics",
    "courseId": "calc-1",
    "chapterId": "c1-relations-basics",
    "title": "Unit Test: Relations and Orders",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.relations.properties"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.relations.equivalence"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.relations.partial_orders"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.relations.hasse"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c1-number-theory-basics",
    "courseId": "calc-1",
    "chapterId": "c1-number-theory-basics",
    "title": "Unit Test: Number Theory",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.number.divisibility"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.number.modular"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.number.gcd"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.number.primes"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c2-graph-theory-basics",
    "courseId": "calc-2",
    "chapterId": "c2-graph-theory-basics",
    "title": "Unit Test: Graph Theory",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.graph.basics"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.graph.paths"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.graph.euler_hamilton"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.graph.isomorphism"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c2-trees-algorithms-basics",
    "courseId": "calc-2",
    "chapterId": "c2-trees-algorithms-basics",
    "title": "Unit Test: Trees and Algorithms",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.trees.basics"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.trees.spanning"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.trees.search"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.trees.shortest_paths"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c2-recurrence-basics",
    "courseId": "calc-2",
    "chapterId": "c2-recurrence-basics",
    "title": "Unit Test: Recurrence Relations",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.recurrence.basics"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.recurrence.linear"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.recurrence.master"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.recurrence.generating"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c2-combinatorics-advanced-basics",
    "courseId": "calc-2",
    "chapterId": "c2-combinatorics-advanced-basics",
    "title": "Unit Test: Advanced Combinatorics",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.combinatorics.inclusion"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.combinatorics.binomial"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.combinatorics.catalan"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.combinatorics.recurrence"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c2-discrete-probability-basics",
    "courseId": "calc-2",
    "chapterId": "c2-discrete-probability-basics",
    "title": "Unit Test: Discrete Probability",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.probability.axioms"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.probability.conditional"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.probability.random_variables"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.probability.expectation"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c3-automata-basics",
    "courseId": "calc-3",
    "chapterId": "c3-automata-basics",
    "title": "Unit Test: Finite Automata",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.automata.dfa_nfa"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.automata.regex"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.automata.closure"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.automata.minimization"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c3-formal-languages-basics",
    "courseId": "calc-3",
    "chapterId": "c3-formal-languages-basics",
    "title": "Unit Test: Formal Languages",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.languages.cfg"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.languages.pda"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.languages.normal_forms"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.languages.pumping"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c3-complexity-basics",
    "courseId": "calc-3",
    "chapterId": "c3-complexity-basics",
    "title": "Unit Test: Complexity Theory",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.complexity.time"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.complexity.asymptotic"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.complexity.p_np"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.complexity.reductions"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c3-cryptography-basics",
    "courseId": "calc-3",
    "chapterId": "c3-cryptography-basics",
    "title": "Unit Test: Discrete Cryptography",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.crypto.rsa"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.crypto.diffie_hellman"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.crypto.hash"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.crypto.signatures"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  },
  {
    "id": "test-c3-discrete-optimization-basics",
    "courseId": "calc-3",
    "chapterId": "c3-discrete-optimization-basics",
    "title": "Unit Test: Discrete Optimization",
    "questionCount": 10,
    "timeLimitSec": 1200,
    "passThreshold": 0.8,
    "blueprint": {
      "distribution": [
        {
          "tags": [
            "dm.optimization.linear"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.optimization.integer"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.optimization.flows"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        },
        {
          "tags": [
            "dm.optimization.matching"
          ],
          "count": 2,
          "difficulty": [
            "easy",
            "medium",
            "hard"
          ]
        }
      ]
    },
    "rewards": {
      "xp": 75,
      "unlockSectionIds": []
    },
    "version": "2026.2-dm"
  }
];

  window.FCContentData.testBlueprints = testBlueprints;
})();
