window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.2-dm";
  window.FCContentData.VERSION = VERSION;

  const examples = [
  {
    "id": "ex-c1-logic-propositions-1",
    "sectionId": "c1-logic-propositions",
    "prompt": "Give one practical use-case where propositions and truth values appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.logic.propositions"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-logic-connectives-1",
    "sectionId": "c1-logic-connectives",
    "prompt": "Give one practical use-case where logical connectives appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.logic.connectives"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-logic-quantifiers-1",
    "sectionId": "c1-logic-quantifiers",
    "prompt": "Give one practical use-case where quantifiers appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.logic.quantifiers"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-proof-techniques-1",
    "sectionId": "c1-proof-techniques",
    "prompt": "Give one practical use-case where proof techniques appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.logic.proofs"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-sets-operations-1",
    "sectionId": "c1-sets-operations",
    "prompt": "Give one practical use-case where set operations appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.sets.operations"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-power-sets-1",
    "sectionId": "c1-power-sets",
    "prompt": "Give one practical use-case where power sets appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.sets.power"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-functions-injective-1",
    "sectionId": "c1-functions-injective",
    "prompt": "Give one practical use-case where injective/surjective functions appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.functions.injective"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-functions-composition-1",
    "sectionId": "c1-functions-composition",
    "prompt": "Give one practical use-case where function composition appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.functions.composition"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-counting-sum-product-1",
    "sectionId": "c1-counting-sum-product",
    "prompt": "Give one practical use-case where sum and product rules appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.counting.rules"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-permutations-1",
    "sectionId": "c1-permutations",
    "prompt": "Give one practical use-case where permutations appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.counting.permutations"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-combinations-1",
    "sectionId": "c1-combinations",
    "prompt": "Give one practical use-case where combinations appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.counting.combinations"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-pigeonhole-1",
    "sectionId": "c1-pigeonhole",
    "prompt": "Give one practical use-case where pigeonhole principle appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-relations-properties-1",
    "sectionId": "c1-relations-properties",
    "prompt": "Give one practical use-case where relation properties appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.relations.properties"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-equivalence-relations-1",
    "sectionId": "c1-equivalence-relations",
    "prompt": "Give one practical use-case where equivalence relations appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.relations.equivalence"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-partial-orders-1",
    "sectionId": "c1-partial-orders",
    "prompt": "Give one practical use-case where partial orders appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.relations.partial_orders"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-hasse-diagrams-1",
    "sectionId": "c1-hasse-diagrams",
    "prompt": "Give one practical use-case where hasse diagrams appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.relations.hasse"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-divisibility-1",
    "sectionId": "c1-divisibility",
    "prompt": "Give one practical use-case where divisibility appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.number.divisibility"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-modular-arithmetic-1",
    "sectionId": "c1-modular-arithmetic",
    "prompt": "Give one practical use-case where modular arithmetic appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.number.modular"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-gcd-euclid-1",
    "sectionId": "c1-gcd-euclid",
    "prompt": "Give one practical use-case where gcd and euclidean algorithm appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.number.gcd"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c1-prime-factorization-1",
    "sectionId": "c1-prime-factorization",
    "prompt": "Give one practical use-case where prime factorization appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.number.primes"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-graphs-basics-1",
    "sectionId": "c2-graphs-basics",
    "prompt": "Give one practical use-case where graphs and terminology appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.graph.basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-degree-paths-1",
    "sectionId": "c2-degree-paths",
    "prompt": "Give one practical use-case where degrees, walks, and paths appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.graph.paths"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-euler-hamilton-1",
    "sectionId": "c2-euler-hamilton",
    "prompt": "Give one practical use-case where euler and hamilton cycles appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-graph-isomorphism-1",
    "sectionId": "c2-graph-isomorphism",
    "prompt": "Give one practical use-case where graph isomorphism appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.graph.isomorphism"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-trees-basics-1",
    "sectionId": "c2-trees-basics",
    "prompt": "Give one practical use-case where trees basics appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.trees.basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-spanning-trees-1",
    "sectionId": "c2-spanning-trees",
    "prompt": "Give one practical use-case where spanning trees appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.trees.spanning"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-bfs-dfs-1",
    "sectionId": "c2-bfs-dfs",
    "prompt": "Give one practical use-case where bfs and dfs appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.trees.search"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-shortest-paths-1",
    "sectionId": "c2-shortest-paths",
    "prompt": "Give one practical use-case where shortest paths appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-recurrence-relations-1",
    "sectionId": "c2-recurrence-relations",
    "prompt": "Give one practical use-case where recurrence relations appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-linear-recurrence-1",
    "sectionId": "c2-linear-recurrence",
    "prompt": "Give one practical use-case where linear recurrences appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.linear"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-master-theorem-1",
    "sectionId": "c2-master-theorem",
    "prompt": "Give one practical use-case where master theorem appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.master"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-generating-functions-1",
    "sectionId": "c2-generating-functions",
    "prompt": "Give one practical use-case where generating functions appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.generating"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-inclusion-exclusion-1",
    "sectionId": "c2-inclusion-exclusion",
    "prompt": "Give one practical use-case where inclusion-exclusion appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-binomial-theorem-1",
    "sectionId": "c2-binomial-theorem",
    "prompt": "Give one practical use-case where binomial theorem appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-catalan-1",
    "sectionId": "c2-catalan",
    "prompt": "Give one practical use-case where catalan numbers appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-recurrence-counting-1",
    "sectionId": "c2-recurrence-counting",
    "prompt": "Give one practical use-case where counting with recurrence appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-probability-axioms-1",
    "sectionId": "c2-probability-axioms",
    "prompt": "Give one practical use-case where probability axioms appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.probability.axioms"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-conditional-probability-1",
    "sectionId": "c2-conditional-probability",
    "prompt": "Give one practical use-case where conditional probability appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.probability.conditional"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-random-variables-1",
    "sectionId": "c2-random-variables",
    "prompt": "Give one practical use-case where discrete random variables appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.probability.random_variables"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c2-expectation-variance-1",
    "sectionId": "c2-expectation-variance",
    "prompt": "Give one practical use-case where expectation and variance appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.probability.expectation"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-dfa-nfa-1",
    "sectionId": "c3-dfa-nfa",
    "prompt": "Give one practical use-case where dfa and nfa appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-regular-expressions-1",
    "sectionId": "c3-regular-expressions",
    "prompt": "Give one practical use-case where regular expressions appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.automata.regex"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-automata-closure-1",
    "sectionId": "c3-automata-closure",
    "prompt": "Give one practical use-case where closure properties appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.automata.closure"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-minimization-1",
    "sectionId": "c3-minimization",
    "prompt": "Give one practical use-case where state minimization appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.automata.minimization"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-context-free-grammars-1",
    "sectionId": "c3-context-free-grammars",
    "prompt": "Give one practical use-case where context-free grammars appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.languages.cfg"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-pushdown-automata-1",
    "sectionId": "c3-pushdown-automata",
    "prompt": "Give one practical use-case where pushdown automata appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.languages.pda"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-normal-forms-1",
    "sectionId": "c3-normal-forms",
    "prompt": "Give one practical use-case where normal forms appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.languages.normal_forms"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-pumping-lemma-1",
    "sectionId": "c3-pumping-lemma",
    "prompt": "Give one practical use-case where pumping lemma appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.languages.pumping"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-time-complexity-1",
    "sectionId": "c3-time-complexity",
    "prompt": "Give one practical use-case where time complexity appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.complexity.time"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-big-o-omega-theta-1",
    "sectionId": "c3-big-o-omega-theta",
    "prompt": "Give one practical use-case where big-o, big-omega, big-theta appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-p-np-1",
    "sectionId": "c3-p-np",
    "prompt": "Give one practical use-case where p vs np appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.complexity.p_np"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-reductions-1",
    "sectionId": "c3-reductions",
    "prompt": "Give one practical use-case where polynomial reductions appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.complexity.reductions"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-rsa-basics-1",
    "sectionId": "c3-rsa-basics",
    "prompt": "Give one practical use-case where rsa basics appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.crypto.rsa"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-diffie-hellman-1",
    "sectionId": "c3-diffie-hellman",
    "prompt": "Give one practical use-case where diffie-hellman appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-hash-functions-1",
    "sectionId": "c3-hash-functions",
    "prompt": "Give one practical use-case where hash functions appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.crypto.hash"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-digital-signatures-1",
    "sectionId": "c3-digital-signatures",
    "prompt": "Give one practical use-case where digital signatures appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.crypto.signatures"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-linear-programming-1",
    "sectionId": "c3-linear-programming",
    "prompt": "Give one practical use-case where linear programming appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.optimization.linear"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-integer-programming-1",
    "sectionId": "c3-integer-programming",
    "prompt": "Give one practical use-case where integer programming appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "easy",
    "tags": [
      "dm.optimization.integer"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-network-flows-1",
    "sectionId": "c3-network-flows",
    "prompt": "Give one practical use-case where network flows appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.optimization.flows"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "ex-c3-matching-algorithms-1",
    "sectionId": "c3-matching-algorithms",
    "prompt": "Give one practical use-case where matching algorithms appears.",
    "steps": [
      {
        "kind": "identify",
        "text": "Identify the finite objects involved."
      },
      {
        "kind": "model",
        "text": "Translate the problem to a discrete model."
      },
      {
        "kind": "solve",
        "text": "Apply the relevant rule or theorem to conclude."
      }
    ],
    "finalAnswer": "A valid discrete model with clear reasoning.",
    "difficulty": "medium",
    "tags": [
      "dm.optimization.matching"
    ],
    "version": "2026.2-dm"
  }
];

  window.FCContentData.examples = examples;
})();
