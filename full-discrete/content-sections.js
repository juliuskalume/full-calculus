window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.2-dm";
  window.FCContentData.VERSION = VERSION;

  const sections = [
  {
    "id": "c1-logic-propositions",
    "chapterId": "c1-logic-proofs-basics",
    "title": "Propositions and Truth Values",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in propositions and truth values.",
      "Solve foundational problems in propositions and truth values."
    ],
    "tags": [
      "dm.logic.propositions"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-logic-propositions-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Propositions and Truth Values is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-logic-propositions-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-logic-propositions-1"
    ],
    "items": [
      "it-c1-logic-propositions-mcq-1",
      "it-c1-logic-propositions-mcq-2",
      "it-c1-logic-propositions-num-1",
      "it-c1-logic-propositions-num-2",
      "it-c1-logic-propositions-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-logic-connectives",
    "chapterId": "c1-logic-proofs-basics",
    "title": "Logical Connectives",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in logical connectives.",
      "Solve foundational problems in logical connectives."
    ],
    "tags": [
      "dm.logic.connectives"
    ],
    "prerequisiteSectionIds": [
      "c1-logic-propositions"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-logic-connectives-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Logical Connectives is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-logic-connectives-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-logic-connectives-1"
    ],
    "items": [
      "it-c1-logic-connectives-mcq-1",
      "it-c1-logic-connectives-mcq-2",
      "it-c1-logic-connectives-num-1",
      "it-c1-logic-connectives-num-2",
      "it-c1-logic-connectives-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-logic-quantifiers",
    "chapterId": "c1-logic-proofs-basics",
    "title": "Quantifiers",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in quantifiers.",
      "Solve foundational problems in quantifiers."
    ],
    "tags": [
      "dm.logic.quantifiers"
    ],
    "prerequisiteSectionIds": [
      "c1-logic-connectives"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-logic-quantifiers-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Quantifiers is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-logic-quantifiers-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-logic-quantifiers-1"
    ],
    "items": [
      "it-c1-logic-quantifiers-mcq-1",
      "it-c1-logic-quantifiers-mcq-2",
      "it-c1-logic-quantifiers-num-1",
      "it-c1-logic-quantifiers-num-2",
      "it-c1-logic-quantifiers-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-proof-techniques",
    "chapterId": "c1-logic-proofs-basics",
    "title": "Proof Techniques",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in proof techniques.",
      "Solve foundational problems in proof techniques."
    ],
    "tags": [
      "dm.logic.proofs"
    ],
    "prerequisiteSectionIds": [
      "c1-logic-quantifiers"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-proof-techniques-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Proof Techniques is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-proof-techniques-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-proof-techniques-1"
    ],
    "items": [
      "it-c1-proof-techniques-mcq-1",
      "it-c1-proof-techniques-mcq-2",
      "it-c1-proof-techniques-num-1",
      "it-c1-proof-techniques-num-2",
      "it-c1-proof-techniques-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-sets-operations",
    "chapterId": "c1-sets-functions-basics",
    "title": "Set Operations",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in set operations.",
      "Solve foundational problems in set operations."
    ],
    "tags": [
      "dm.sets.operations"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-sets-operations-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Set Operations is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-sets-operations-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-sets-operations-1"
    ],
    "items": [
      "it-c1-sets-operations-mcq-1",
      "it-c1-sets-operations-mcq-2",
      "it-c1-sets-operations-num-1",
      "it-c1-sets-operations-num-2",
      "it-c1-sets-operations-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-power-sets",
    "chapterId": "c1-sets-functions-basics",
    "title": "Power Sets",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in power sets.",
      "Solve foundational problems in power sets."
    ],
    "tags": [
      "dm.sets.power"
    ],
    "prerequisiteSectionIds": [
      "c1-sets-operations"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-power-sets-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Power Sets is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-power-sets-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-power-sets-1"
    ],
    "items": [
      "it-c1-power-sets-mcq-1",
      "it-c1-power-sets-mcq-2",
      "it-c1-power-sets-num-1",
      "it-c1-power-sets-num-2",
      "it-c1-power-sets-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-functions-injective",
    "chapterId": "c1-sets-functions-basics",
    "title": "Injective/Surjective Functions",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in injective/surjective functions.",
      "Solve foundational problems in injective/surjective functions."
    ],
    "tags": [
      "dm.functions.injective"
    ],
    "prerequisiteSectionIds": [
      "c1-power-sets"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-functions-injective-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Injective/Surjective Functions is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-functions-injective-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-functions-injective-1"
    ],
    "items": [
      "it-c1-functions-injective-mcq-1",
      "it-c1-functions-injective-mcq-2",
      "it-c1-functions-injective-num-1",
      "it-c1-functions-injective-num-2",
      "it-c1-functions-injective-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-functions-composition",
    "chapterId": "c1-sets-functions-basics",
    "title": "Function Composition",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in function composition.",
      "Solve foundational problems in function composition."
    ],
    "tags": [
      "dm.functions.composition"
    ],
    "prerequisiteSectionIds": [
      "c1-functions-injective"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-functions-composition-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Function Composition is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-functions-composition-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-functions-composition-1"
    ],
    "items": [
      "it-c1-functions-composition-mcq-1",
      "it-c1-functions-composition-mcq-2",
      "it-c1-functions-composition-num-1",
      "it-c1-functions-composition-num-2",
      "it-c1-functions-composition-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-counting-sum-product",
    "chapterId": "c1-counting-basics",
    "title": "Sum and Product Rules",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in sum and product rules.",
      "Solve foundational problems in sum and product rules."
    ],
    "tags": [
      "dm.counting.rules"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-counting-sum-product-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Sum and Product Rules is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-counting-sum-product-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-counting-sum-product-1"
    ],
    "items": [
      "it-c1-counting-sum-product-mcq-1",
      "it-c1-counting-sum-product-mcq-2",
      "it-c1-counting-sum-product-num-1",
      "it-c1-counting-sum-product-num-2",
      "it-c1-counting-sum-product-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-permutations",
    "chapterId": "c1-counting-basics",
    "title": "Permutations",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in permutations.",
      "Solve foundational problems in permutations."
    ],
    "tags": [
      "dm.counting.permutations"
    ],
    "prerequisiteSectionIds": [
      "c1-counting-sum-product"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-permutations-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Permutations is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-permutations-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-permutations-1"
    ],
    "items": [
      "it-c1-permutations-mcq-1",
      "it-c1-permutations-mcq-2",
      "it-c1-permutations-num-1",
      "it-c1-permutations-num-2",
      "it-c1-permutations-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-combinations",
    "chapterId": "c1-counting-basics",
    "title": "Combinations",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in combinations.",
      "Solve foundational problems in combinations."
    ],
    "tags": [
      "dm.counting.combinations"
    ],
    "prerequisiteSectionIds": [
      "c1-permutations"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-combinations-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Combinations is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-combinations-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-combinations-1"
    ],
    "items": [
      "it-c1-combinations-mcq-1",
      "it-c1-combinations-mcq-2",
      "it-c1-combinations-num-1",
      "it-c1-combinations-num-2",
      "it-c1-combinations-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-pigeonhole",
    "chapterId": "c1-counting-basics",
    "title": "Pigeonhole Principle",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in pigeonhole principle.",
      "Solve foundational problems in pigeonhole principle."
    ],
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "prerequisiteSectionIds": [
      "c1-combinations"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-pigeonhole-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Pigeonhole Principle is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-pigeonhole-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-pigeonhole-1"
    ],
    "items": [
      "it-c1-pigeonhole-mcq-1",
      "it-c1-pigeonhole-mcq-2",
      "it-c1-pigeonhole-num-1",
      "it-c1-pigeonhole-num-2",
      "it-c1-pigeonhole-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-relations-properties",
    "chapterId": "c1-relations-basics",
    "title": "Relation Properties",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in relation properties.",
      "Solve foundational problems in relation properties."
    ],
    "tags": [
      "dm.relations.properties"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-relations-properties-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Relation Properties is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-relations-properties-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-relations-properties-1"
    ],
    "items": [
      "it-c1-relations-properties-mcq-1",
      "it-c1-relations-properties-mcq-2",
      "it-c1-relations-properties-num-1",
      "it-c1-relations-properties-num-2",
      "it-c1-relations-properties-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-equivalence-relations",
    "chapterId": "c1-relations-basics",
    "title": "Equivalence Relations",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in equivalence relations.",
      "Solve foundational problems in equivalence relations."
    ],
    "tags": [
      "dm.relations.equivalence"
    ],
    "prerequisiteSectionIds": [
      "c1-relations-properties"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-equivalence-relations-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Equivalence Relations is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-equivalence-relations-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-equivalence-relations-1"
    ],
    "items": [
      "it-c1-equivalence-relations-mcq-1",
      "it-c1-equivalence-relations-mcq-2",
      "it-c1-equivalence-relations-num-1",
      "it-c1-equivalence-relations-num-2",
      "it-c1-equivalence-relations-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-partial-orders",
    "chapterId": "c1-relations-basics",
    "title": "Partial Orders",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in partial orders.",
      "Solve foundational problems in partial orders."
    ],
    "tags": [
      "dm.relations.partial_orders"
    ],
    "prerequisiteSectionIds": [
      "c1-equivalence-relations"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-partial-orders-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Partial Orders is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-partial-orders-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-partial-orders-1"
    ],
    "items": [
      "it-c1-partial-orders-mcq-1",
      "it-c1-partial-orders-mcq-2",
      "it-c1-partial-orders-num-1",
      "it-c1-partial-orders-num-2",
      "it-c1-partial-orders-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-hasse-diagrams",
    "chapterId": "c1-relations-basics",
    "title": "Hasse Diagrams",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in hasse diagrams.",
      "Solve foundational problems in hasse diagrams."
    ],
    "tags": [
      "dm.relations.hasse"
    ],
    "prerequisiteSectionIds": [
      "c1-partial-orders"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-hasse-diagrams-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Hasse Diagrams is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-hasse-diagrams-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-hasse-diagrams-1"
    ],
    "items": [
      "it-c1-hasse-diagrams-mcq-1",
      "it-c1-hasse-diagrams-mcq-2",
      "it-c1-hasse-diagrams-num-1",
      "it-c1-hasse-diagrams-num-2",
      "it-c1-hasse-diagrams-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-divisibility",
    "chapterId": "c1-number-theory-basics",
    "title": "Divisibility",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in divisibility.",
      "Solve foundational problems in divisibility."
    ],
    "tags": [
      "dm.number.divisibility"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-divisibility-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Divisibility is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-divisibility-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-divisibility-1"
    ],
    "items": [
      "it-c1-divisibility-mcq-1",
      "it-c1-divisibility-mcq-2",
      "it-c1-divisibility-num-1",
      "it-c1-divisibility-num-2",
      "it-c1-divisibility-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-modular-arithmetic",
    "chapterId": "c1-number-theory-basics",
    "title": "Modular Arithmetic",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in modular arithmetic.",
      "Solve foundational problems in modular arithmetic."
    ],
    "tags": [
      "dm.number.modular"
    ],
    "prerequisiteSectionIds": [
      "c1-divisibility"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-modular-arithmetic-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Modular Arithmetic is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-modular-arithmetic-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-modular-arithmetic-1"
    ],
    "items": [
      "it-c1-modular-arithmetic-mcq-1",
      "it-c1-modular-arithmetic-mcq-2",
      "it-c1-modular-arithmetic-num-1",
      "it-c1-modular-arithmetic-num-2",
      "it-c1-modular-arithmetic-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-gcd-euclid",
    "chapterId": "c1-number-theory-basics",
    "title": "GCD and Euclidean Algorithm",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in gcd and euclidean algorithm.",
      "Solve foundational problems in gcd and euclidean algorithm."
    ],
    "tags": [
      "dm.number.gcd"
    ],
    "prerequisiteSectionIds": [
      "c1-modular-arithmetic"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-gcd-euclid-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "GCD and Euclidean Algorithm is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-gcd-euclid-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-gcd-euclid-1"
    ],
    "items": [
      "it-c1-gcd-euclid-mcq-1",
      "it-c1-gcd-euclid-mcq-2",
      "it-c1-gcd-euclid-num-1",
      "it-c1-gcd-euclid-num-2",
      "it-c1-gcd-euclid-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-prime-factorization",
    "chapterId": "c1-number-theory-basics",
    "title": "Prime Factorization",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in prime factorization.",
      "Solve foundational problems in prime factorization."
    ],
    "tags": [
      "dm.number.primes"
    ],
    "prerequisiteSectionIds": [
      "c1-gcd-euclid"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-prime-factorization-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Prime Factorization is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-prime-factorization-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-prime-factorization-1"
    ],
    "items": [
      "it-c1-prime-factorization-mcq-1",
      "it-c1-prime-factorization-mcq-2",
      "it-c1-prime-factorization-num-1",
      "it-c1-prime-factorization-num-2",
      "it-c1-prime-factorization-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-graphs-basics",
    "chapterId": "c2-graph-theory-basics",
    "title": "Graphs and Terminology",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in graphs and terminology.",
      "Solve foundational problems in graphs and terminology."
    ],
    "tags": [
      "dm.graph.basics"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-graphs-basics-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Graphs and Terminology is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-graphs-basics-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-graphs-basics-1"
    ],
    "items": [
      "it-c2-graphs-basics-mcq-1",
      "it-c2-graphs-basics-mcq-2",
      "it-c2-graphs-basics-num-1",
      "it-c2-graphs-basics-num-2",
      "it-c2-graphs-basics-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-degree-paths",
    "chapterId": "c2-graph-theory-basics",
    "title": "Degrees, Walks, and Paths",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in degrees, walks, and paths.",
      "Solve foundational problems in degrees, walks, and paths."
    ],
    "tags": [
      "dm.graph.paths"
    ],
    "prerequisiteSectionIds": [
      "c2-graphs-basics"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-degree-paths-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Degrees, Walks, and Paths is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-degree-paths-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-degree-paths-1"
    ],
    "items": [
      "it-c2-degree-paths-mcq-1",
      "it-c2-degree-paths-mcq-2",
      "it-c2-degree-paths-num-1",
      "it-c2-degree-paths-num-2",
      "it-c2-degree-paths-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-euler-hamilton",
    "chapterId": "c2-graph-theory-basics",
    "title": "Euler and Hamilton Cycles",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in euler and hamilton cycles.",
      "Solve foundational problems in euler and hamilton cycles."
    ],
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "prerequisiteSectionIds": [
      "c2-degree-paths"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-euler-hamilton-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Euler and Hamilton Cycles is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-euler-hamilton-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-euler-hamilton-1"
    ],
    "items": [
      "it-c2-euler-hamilton-mcq-1",
      "it-c2-euler-hamilton-mcq-2",
      "it-c2-euler-hamilton-num-1",
      "it-c2-euler-hamilton-num-2",
      "it-c2-euler-hamilton-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-graph-isomorphism",
    "chapterId": "c2-graph-theory-basics",
    "title": "Graph Isomorphism",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in graph isomorphism.",
      "Solve foundational problems in graph isomorphism."
    ],
    "tags": [
      "dm.graph.isomorphism"
    ],
    "prerequisiteSectionIds": [
      "c2-euler-hamilton"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-graph-isomorphism-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Graph Isomorphism is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-graph-isomorphism-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-graph-isomorphism-1"
    ],
    "items": [
      "it-c2-graph-isomorphism-mcq-1",
      "it-c2-graph-isomorphism-mcq-2",
      "it-c2-graph-isomorphism-num-1",
      "it-c2-graph-isomorphism-num-2",
      "it-c2-graph-isomorphism-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-trees-basics",
    "chapterId": "c2-trees-algorithms-basics",
    "title": "Trees Basics",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in trees basics.",
      "Solve foundational problems in trees basics."
    ],
    "tags": [
      "dm.trees.basics"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-trees-basics-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Trees Basics is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-trees-basics-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-trees-basics-1"
    ],
    "items": [
      "it-c2-trees-basics-mcq-1",
      "it-c2-trees-basics-mcq-2",
      "it-c2-trees-basics-num-1",
      "it-c2-trees-basics-num-2",
      "it-c2-trees-basics-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-spanning-trees",
    "chapterId": "c2-trees-algorithms-basics",
    "title": "Spanning Trees",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in spanning trees.",
      "Solve foundational problems in spanning trees."
    ],
    "tags": [
      "dm.trees.spanning"
    ],
    "prerequisiteSectionIds": [
      "c2-trees-basics"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-spanning-trees-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Spanning Trees is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-spanning-trees-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-spanning-trees-1"
    ],
    "items": [
      "it-c2-spanning-trees-mcq-1",
      "it-c2-spanning-trees-mcq-2",
      "it-c2-spanning-trees-num-1",
      "it-c2-spanning-trees-num-2",
      "it-c2-spanning-trees-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-bfs-dfs",
    "chapterId": "c2-trees-algorithms-basics",
    "title": "BFS and DFS",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in bfs and dfs.",
      "Solve foundational problems in bfs and dfs."
    ],
    "tags": [
      "dm.trees.search"
    ],
    "prerequisiteSectionIds": [
      "c2-spanning-trees"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-bfs-dfs-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "BFS and DFS is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-bfs-dfs-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-bfs-dfs-1"
    ],
    "items": [
      "it-c2-bfs-dfs-mcq-1",
      "it-c2-bfs-dfs-mcq-2",
      "it-c2-bfs-dfs-num-1",
      "it-c2-bfs-dfs-num-2",
      "it-c2-bfs-dfs-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-shortest-paths",
    "chapterId": "c2-trees-algorithms-basics",
    "title": "Shortest Paths",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in shortest paths.",
      "Solve foundational problems in shortest paths."
    ],
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "prerequisiteSectionIds": [
      "c2-bfs-dfs"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-shortest-paths-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Shortest Paths is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-shortest-paths-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-shortest-paths-1"
    ],
    "items": [
      "it-c2-shortest-paths-mcq-1",
      "it-c2-shortest-paths-mcq-2",
      "it-c2-shortest-paths-num-1",
      "it-c2-shortest-paths-num-2",
      "it-c2-shortest-paths-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-recurrence-relations",
    "chapterId": "c2-recurrence-basics",
    "title": "Recurrence Relations",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in recurrence relations.",
      "Solve foundational problems in recurrence relations."
    ],
    "tags": [
      "dm.recurrence.basics"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-recurrence-relations-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Recurrence Relations is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-recurrence-relations-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-recurrence-relations-1"
    ],
    "items": [
      "it-c2-recurrence-relations-mcq-1",
      "it-c2-recurrence-relations-mcq-2",
      "it-c2-recurrence-relations-num-1",
      "it-c2-recurrence-relations-num-2",
      "it-c2-recurrence-relations-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-linear-recurrence",
    "chapterId": "c2-recurrence-basics",
    "title": "Linear Recurrences",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in linear recurrences.",
      "Solve foundational problems in linear recurrences."
    ],
    "tags": [
      "dm.recurrence.linear"
    ],
    "prerequisiteSectionIds": [
      "c2-recurrence-relations"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-linear-recurrence-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Linear Recurrences is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-linear-recurrence-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-linear-recurrence-1"
    ],
    "items": [
      "it-c2-linear-recurrence-mcq-1",
      "it-c2-linear-recurrence-mcq-2",
      "it-c2-linear-recurrence-num-1",
      "it-c2-linear-recurrence-num-2",
      "it-c2-linear-recurrence-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-master-theorem",
    "chapterId": "c2-recurrence-basics",
    "title": "Master Theorem",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in master theorem.",
      "Solve foundational problems in master theorem."
    ],
    "tags": [
      "dm.recurrence.master"
    ],
    "prerequisiteSectionIds": [
      "c2-linear-recurrence"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-master-theorem-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Master Theorem is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-master-theorem-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-master-theorem-1"
    ],
    "items": [
      "it-c2-master-theorem-mcq-1",
      "it-c2-master-theorem-mcq-2",
      "it-c2-master-theorem-num-1",
      "it-c2-master-theorem-num-2",
      "it-c2-master-theorem-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-generating-functions",
    "chapterId": "c2-recurrence-basics",
    "title": "Generating Functions",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in generating functions.",
      "Solve foundational problems in generating functions."
    ],
    "tags": [
      "dm.recurrence.generating"
    ],
    "prerequisiteSectionIds": [
      "c2-master-theorem"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-generating-functions-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Generating Functions is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-generating-functions-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-generating-functions-1"
    ],
    "items": [
      "it-c2-generating-functions-mcq-1",
      "it-c2-generating-functions-mcq-2",
      "it-c2-generating-functions-num-1",
      "it-c2-generating-functions-num-2",
      "it-c2-generating-functions-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-inclusion-exclusion",
    "chapterId": "c2-combinatorics-advanced-basics",
    "title": "Inclusion-Exclusion",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in inclusion-exclusion.",
      "Solve foundational problems in inclusion-exclusion."
    ],
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-inclusion-exclusion-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Inclusion-Exclusion is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-inclusion-exclusion-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-inclusion-exclusion-1"
    ],
    "items": [
      "it-c2-inclusion-exclusion-mcq-1",
      "it-c2-inclusion-exclusion-mcq-2",
      "it-c2-inclusion-exclusion-num-1",
      "it-c2-inclusion-exclusion-num-2",
      "it-c2-inclusion-exclusion-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-binomial-theorem",
    "chapterId": "c2-combinatorics-advanced-basics",
    "title": "Binomial Theorem",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in binomial theorem.",
      "Solve foundational problems in binomial theorem."
    ],
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "prerequisiteSectionIds": [
      "c2-inclusion-exclusion"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-binomial-theorem-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Binomial Theorem is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-binomial-theorem-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-binomial-theorem-1"
    ],
    "items": [
      "it-c2-binomial-theorem-mcq-1",
      "it-c2-binomial-theorem-mcq-2",
      "it-c2-binomial-theorem-num-1",
      "it-c2-binomial-theorem-num-2",
      "it-c2-binomial-theorem-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-catalan",
    "chapterId": "c2-combinatorics-advanced-basics",
    "title": "Catalan Numbers",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in catalan numbers.",
      "Solve foundational problems in catalan numbers."
    ],
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "prerequisiteSectionIds": [
      "c2-binomial-theorem"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-catalan-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Catalan Numbers is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-catalan-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-catalan-1"
    ],
    "items": [
      "it-c2-catalan-mcq-1",
      "it-c2-catalan-mcq-2",
      "it-c2-catalan-num-1",
      "it-c2-catalan-num-2",
      "it-c2-catalan-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-recurrence-counting",
    "chapterId": "c2-combinatorics-advanced-basics",
    "title": "Counting with Recurrence",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in counting with recurrence.",
      "Solve foundational problems in counting with recurrence."
    ],
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "prerequisiteSectionIds": [
      "c2-catalan"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-recurrence-counting-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Counting with Recurrence is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-recurrence-counting-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-recurrence-counting-1"
    ],
    "items": [
      "it-c2-recurrence-counting-mcq-1",
      "it-c2-recurrence-counting-mcq-2",
      "it-c2-recurrence-counting-num-1",
      "it-c2-recurrence-counting-num-2",
      "it-c2-recurrence-counting-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-probability-axioms",
    "chapterId": "c2-discrete-probability-basics",
    "title": "Probability Axioms",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in probability axioms.",
      "Solve foundational problems in probability axioms."
    ],
    "tags": [
      "dm.probability.axioms"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-probability-axioms-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Probability Axioms is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-probability-axioms-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-probability-axioms-1"
    ],
    "items": [
      "it-c2-probability-axioms-mcq-1",
      "it-c2-probability-axioms-mcq-2",
      "it-c2-probability-axioms-num-1",
      "it-c2-probability-axioms-num-2",
      "it-c2-probability-axioms-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-conditional-probability",
    "chapterId": "c2-discrete-probability-basics",
    "title": "Conditional Probability",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in conditional probability.",
      "Solve foundational problems in conditional probability."
    ],
    "tags": [
      "dm.probability.conditional"
    ],
    "prerequisiteSectionIds": [
      "c2-probability-axioms"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-conditional-probability-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Conditional Probability is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-conditional-probability-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-conditional-probability-1"
    ],
    "items": [
      "it-c2-conditional-probability-mcq-1",
      "it-c2-conditional-probability-mcq-2",
      "it-c2-conditional-probability-num-1",
      "it-c2-conditional-probability-num-2",
      "it-c2-conditional-probability-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-random-variables",
    "chapterId": "c2-discrete-probability-basics",
    "title": "Discrete Random Variables",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in discrete random variables.",
      "Solve foundational problems in discrete random variables."
    ],
    "tags": [
      "dm.probability.random_variables"
    ],
    "prerequisiteSectionIds": [
      "c2-conditional-probability"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-random-variables-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Discrete Random Variables is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-random-variables-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-random-variables-1"
    ],
    "items": [
      "it-c2-random-variables-mcq-1",
      "it-c2-random-variables-mcq-2",
      "it-c2-random-variables-num-1",
      "it-c2-random-variables-num-2",
      "it-c2-random-variables-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-expectation-variance",
    "chapterId": "c2-discrete-probability-basics",
    "title": "Expectation and Variance",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in expectation and variance.",
      "Solve foundational problems in expectation and variance."
    ],
    "tags": [
      "dm.probability.expectation"
    ],
    "prerequisiteSectionIds": [
      "c2-random-variables"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-expectation-variance-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Expectation and Variance is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-expectation-variance-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c2-expectation-variance-1"
    ],
    "items": [
      "it-c2-expectation-variance-mcq-1",
      "it-c2-expectation-variance-mcq-2",
      "it-c2-expectation-variance-num-1",
      "it-c2-expectation-variance-num-2",
      "it-c2-expectation-variance-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-dfa-nfa",
    "chapterId": "c3-automata-basics",
    "title": "DFA and NFA",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in dfa and nfa.",
      "Solve foundational problems in dfa and nfa."
    ],
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-dfa-nfa-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "DFA and NFA is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-dfa-nfa-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-dfa-nfa-1"
    ],
    "items": [
      "it-c3-dfa-nfa-mcq-1",
      "it-c3-dfa-nfa-mcq-2",
      "it-c3-dfa-nfa-num-1",
      "it-c3-dfa-nfa-num-2",
      "it-c3-dfa-nfa-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-regular-expressions",
    "chapterId": "c3-automata-basics",
    "title": "Regular Expressions",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in regular expressions.",
      "Solve foundational problems in regular expressions."
    ],
    "tags": [
      "dm.automata.regex"
    ],
    "prerequisiteSectionIds": [
      "c3-dfa-nfa"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-regular-expressions-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Regular Expressions is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-regular-expressions-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-regular-expressions-1"
    ],
    "items": [
      "it-c3-regular-expressions-mcq-1",
      "it-c3-regular-expressions-mcq-2",
      "it-c3-regular-expressions-num-1",
      "it-c3-regular-expressions-num-2",
      "it-c3-regular-expressions-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-automata-closure",
    "chapterId": "c3-automata-basics",
    "title": "Closure Properties",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in closure properties.",
      "Solve foundational problems in closure properties."
    ],
    "tags": [
      "dm.automata.closure"
    ],
    "prerequisiteSectionIds": [
      "c3-regular-expressions"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-automata-closure-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Closure Properties is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-automata-closure-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-automata-closure-1"
    ],
    "items": [
      "it-c3-automata-closure-mcq-1",
      "it-c3-automata-closure-mcq-2",
      "it-c3-automata-closure-num-1",
      "it-c3-automata-closure-num-2",
      "it-c3-automata-closure-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-minimization",
    "chapterId": "c3-automata-basics",
    "title": "State Minimization",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in state minimization.",
      "Solve foundational problems in state minimization."
    ],
    "tags": [
      "dm.automata.minimization"
    ],
    "prerequisiteSectionIds": [
      "c3-automata-closure"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-minimization-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "State Minimization is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-minimization-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-minimization-1"
    ],
    "items": [
      "it-c3-minimization-mcq-1",
      "it-c3-minimization-mcq-2",
      "it-c3-minimization-num-1",
      "it-c3-minimization-num-2",
      "it-c3-minimization-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-context-free-grammars",
    "chapterId": "c3-formal-languages-basics",
    "title": "Context-Free Grammars",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in context-free grammars.",
      "Solve foundational problems in context-free grammars."
    ],
    "tags": [
      "dm.languages.cfg"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-context-free-grammars-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Context-Free Grammars is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-context-free-grammars-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-context-free-grammars-1"
    ],
    "items": [
      "it-c3-context-free-grammars-mcq-1",
      "it-c3-context-free-grammars-mcq-2",
      "it-c3-context-free-grammars-num-1",
      "it-c3-context-free-grammars-num-2",
      "it-c3-context-free-grammars-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-pushdown-automata",
    "chapterId": "c3-formal-languages-basics",
    "title": "Pushdown Automata",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in pushdown automata.",
      "Solve foundational problems in pushdown automata."
    ],
    "tags": [
      "dm.languages.pda"
    ],
    "prerequisiteSectionIds": [
      "c3-context-free-grammars"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-pushdown-automata-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Pushdown Automata is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-pushdown-automata-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-pushdown-automata-1"
    ],
    "items": [
      "it-c3-pushdown-automata-mcq-1",
      "it-c3-pushdown-automata-mcq-2",
      "it-c3-pushdown-automata-num-1",
      "it-c3-pushdown-automata-num-2",
      "it-c3-pushdown-automata-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-normal-forms",
    "chapterId": "c3-formal-languages-basics",
    "title": "Normal Forms",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in normal forms.",
      "Solve foundational problems in normal forms."
    ],
    "tags": [
      "dm.languages.normal_forms"
    ],
    "prerequisiteSectionIds": [
      "c3-pushdown-automata"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-normal-forms-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Normal Forms is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-normal-forms-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-normal-forms-1"
    ],
    "items": [
      "it-c3-normal-forms-mcq-1",
      "it-c3-normal-forms-mcq-2",
      "it-c3-normal-forms-num-1",
      "it-c3-normal-forms-num-2",
      "it-c3-normal-forms-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-pumping-lemma",
    "chapterId": "c3-formal-languages-basics",
    "title": "Pumping Lemma",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in pumping lemma.",
      "Solve foundational problems in pumping lemma."
    ],
    "tags": [
      "dm.languages.pumping"
    ],
    "prerequisiteSectionIds": [
      "c3-normal-forms"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-pumping-lemma-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Pumping Lemma is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-pumping-lemma-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-pumping-lemma-1"
    ],
    "items": [
      "it-c3-pumping-lemma-mcq-1",
      "it-c3-pumping-lemma-mcq-2",
      "it-c3-pumping-lemma-num-1",
      "it-c3-pumping-lemma-num-2",
      "it-c3-pumping-lemma-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-time-complexity",
    "chapterId": "c3-complexity-basics",
    "title": "Time Complexity",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in time complexity.",
      "Solve foundational problems in time complexity."
    ],
    "tags": [
      "dm.complexity.time"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-time-complexity-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Time Complexity is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-time-complexity-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-time-complexity-1"
    ],
    "items": [
      "it-c3-time-complexity-mcq-1",
      "it-c3-time-complexity-mcq-2",
      "it-c3-time-complexity-num-1",
      "it-c3-time-complexity-num-2",
      "it-c3-time-complexity-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-big-o-omega-theta",
    "chapterId": "c3-complexity-basics",
    "title": "Big-O, Big-Omega, Big-Theta",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in big-o, big-omega, big-theta.",
      "Solve foundational problems in big-o, big-omega, big-theta."
    ],
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "prerequisiteSectionIds": [
      "c3-time-complexity"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-big-o-omega-theta-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Big-O, Big-Omega, Big-Theta is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-big-o-omega-theta-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-big-o-omega-theta-1"
    ],
    "items": [
      "it-c3-big-o-omega-theta-mcq-1",
      "it-c3-big-o-omega-theta-mcq-2",
      "it-c3-big-o-omega-theta-num-1",
      "it-c3-big-o-omega-theta-num-2",
      "it-c3-big-o-omega-theta-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-p-np",
    "chapterId": "c3-complexity-basics",
    "title": "P vs NP",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in p vs np.",
      "Solve foundational problems in p vs np."
    ],
    "tags": [
      "dm.complexity.p_np"
    ],
    "prerequisiteSectionIds": [
      "c3-big-o-omega-theta"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-p-np-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "P vs NP is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-p-np-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-p-np-1"
    ],
    "items": [
      "it-c3-p-np-mcq-1",
      "it-c3-p-np-mcq-2",
      "it-c3-p-np-num-1",
      "it-c3-p-np-num-2",
      "it-c3-p-np-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-reductions",
    "chapterId": "c3-complexity-basics",
    "title": "Polynomial Reductions",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in polynomial reductions.",
      "Solve foundational problems in polynomial reductions."
    ],
    "tags": [
      "dm.complexity.reductions"
    ],
    "prerequisiteSectionIds": [
      "c3-p-np"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-reductions-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Polynomial Reductions is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-reductions-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-reductions-1"
    ],
    "items": [
      "it-c3-reductions-mcq-1",
      "it-c3-reductions-mcq-2",
      "it-c3-reductions-num-1",
      "it-c3-reductions-num-2",
      "it-c3-reductions-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-rsa-basics",
    "chapterId": "c3-cryptography-basics",
    "title": "RSA Basics",
    "order": 1,
    "estimatedTimeMin": 19,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in rsa basics.",
      "Solve foundational problems in rsa basics."
    ],
    "tags": [
      "dm.crypto.rsa"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-rsa-basics-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "RSA Basics is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-rsa-basics-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-rsa-basics-1"
    ],
    "items": [
      "it-c3-rsa-basics-mcq-1",
      "it-c3-rsa-basics-mcq-2",
      "it-c3-rsa-basics-num-1",
      "it-c3-rsa-basics-num-2",
      "it-c3-rsa-basics-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-diffie-hellman",
    "chapterId": "c3-cryptography-basics",
    "title": "Diffie-Hellman",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in diffie-hellman.",
      "Solve foundational problems in diffie-hellman."
    ],
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "prerequisiteSectionIds": [
      "c3-rsa-basics"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-diffie-hellman-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Diffie-Hellman is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-diffie-hellman-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-diffie-hellman-1"
    ],
    "items": [
      "it-c3-diffie-hellman-mcq-1",
      "it-c3-diffie-hellman-mcq-2",
      "it-c3-diffie-hellman-num-1",
      "it-c3-diffie-hellman-num-2",
      "it-c3-diffie-hellman-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-hash-functions",
    "chapterId": "c3-cryptography-basics",
    "title": "Hash Functions",
    "order": 3,
    "estimatedTimeMin": 21,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in hash functions.",
      "Solve foundational problems in hash functions."
    ],
    "tags": [
      "dm.crypto.hash"
    ],
    "prerequisiteSectionIds": [
      "c3-diffie-hellman"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-hash-functions-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Hash Functions is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-hash-functions-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-hash-functions-1"
    ],
    "items": [
      "it-c3-hash-functions-mcq-1",
      "it-c3-hash-functions-mcq-2",
      "it-c3-hash-functions-num-1",
      "it-c3-hash-functions-num-2",
      "it-c3-hash-functions-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-digital-signatures",
    "chapterId": "c3-cryptography-basics",
    "title": "Digital Signatures",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in digital signatures.",
      "Solve foundational problems in digital signatures."
    ],
    "tags": [
      "dm.crypto.signatures"
    ],
    "prerequisiteSectionIds": [
      "c3-hash-functions"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-digital-signatures-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Digital Signatures is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-digital-signatures-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-digital-signatures-1"
    ],
    "items": [
      "it-c3-digital-signatures-mcq-1",
      "it-c3-digital-signatures-mcq-2",
      "it-c3-digital-signatures-num-1",
      "it-c3-digital-signatures-num-2",
      "it-c3-digital-signatures-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-linear-programming",
    "chapterId": "c3-discrete-optimization-basics",
    "title": "Linear Programming",
    "order": 1,
    "estimatedTimeMin": 15,
    "difficulty": "easy",
    "learningObjectives": [
      "Explain key ideas in linear programming.",
      "Solve foundational problems in linear programming."
    ],
    "tags": [
      "dm.optimization.linear"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-linear-programming-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Linear Programming is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-linear-programming-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-linear-programming-1"
    ],
    "items": [
      "it-c3-linear-programming-mcq-1",
      "it-c3-linear-programming-mcq-2",
      "it-c3-linear-programming-num-1",
      "it-c3-linear-programming-num-2",
      "it-c3-linear-programming-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-integer-programming",
    "chapterId": "c3-discrete-optimization-basics",
    "title": "Integer Programming",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in integer programming.",
      "Solve foundational problems in integer programming."
    ],
    "tags": [
      "dm.optimization.integer"
    ],
    "prerequisiteSectionIds": [
      "c3-linear-programming"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-integer-programming-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Integer Programming is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-integer-programming-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-integer-programming-1"
    ],
    "items": [
      "it-c3-integer-programming-mcq-1",
      "it-c3-integer-programming-mcq-2",
      "it-c3-integer-programming-num-1",
      "it-c3-integer-programming-num-2",
      "it-c3-integer-programming-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-network-flows",
    "chapterId": "c3-discrete-optimization-basics",
    "title": "Network Flows",
    "order": 3,
    "estimatedTimeMin": 17,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain key ideas in network flows.",
      "Solve foundational problems in network flows."
    ],
    "tags": [
      "dm.optimization.flows"
    ],
    "prerequisiteSectionIds": [
      "c3-integer-programming"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-network-flows-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Network Flows is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-network-flows-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-network-flows-1"
    ],
    "items": [
      "it-c3-network-flows-mcq-1",
      "it-c3-network-flows-mcq-2",
      "it-c3-network-flows-num-1",
      "it-c3-network-flows-num-2",
      "it-c3-network-flows-mcq-3"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-matching-algorithms",
    "chapterId": "c3-discrete-optimization-basics",
    "title": "Matching Algorithms",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain key ideas in matching algorithms.",
      "Solve foundational problems in matching algorithms."
    ],
    "tags": [
      "dm.optimization.matching"
    ],
    "prerequisiteSectionIds": [
      "c3-network-flows"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-matching-algorithms-concept",
        "type": "definition",
        "title": "Core Idea",
        "body": "Matching Algorithms is a core discrete-math skill.<br>Focus on finite structures, precise definitions, and step-by-step reasoning.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-matching-algorithms-strategy",
        "type": "note",
        "title": "Problem-Solving Strategy",
        "body": "Model the problem first, pick the right rule, then verify boundary cases.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c3-matching-algorithms-1"
    ],
    "items": [
      "it-c3-matching-algorithms-mcq-1",
      "it-c3-matching-algorithms-mcq-2",
      "it-c3-matching-algorithms-num-1",
      "it-c3-matching-algorithms-num-2",
      "it-c3-matching-algorithms-mcq-3"
    ],
    "version": "2026.2-dm"
  }
];

  window.FCContentData.sections = sections;
})();
