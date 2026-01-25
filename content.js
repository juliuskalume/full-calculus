window.FCContent = (function () {
  const VERSION = (window.FCContentData && window.FCContentData.VERSION) || "2026.1";
  const data = window.FCContentData || {};

  const courses = data.courses || [];
  const modules = data.modules || [];
  const chapters = data.chapters || [];
  const sections = data.sections || [];
  const items = data.items || [];
  const examples = data.examples || [];
  const testBlueprints = data.testBlueprints || [];

  function indexById(list) {
    return list.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }

  const index = {
    courses: indexById(courses),
    modules: indexById(modules),
    chapters: indexById(chapters),
    sections: indexById(sections),
    items: indexById(items),
    examples: indexById(examples),
    testBlueprints: indexById(testBlueprints),
  };

  function getCourse(id) {
    return index.courses[id] || null;
  }
  function getModule(id) {
    return index.modules[id] || null;
  }
  function getChapter(id) {
    return index.chapters[id] || null;
  }
  function getSection(id) {
    return index.sections[id] || null;
  }
  function getItem(id) {
    return index.items[id] || null;
  }
  function getExample(id) {
    return index.examples[id] || null;
  }
  function getTestBlueprint(id) {
    return index.testBlueprints[id] || null;
  }

  function sortByOrder(list) {
    return [...list].sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  function getCourseModules(courseId) {
    return sortByOrder(modules.filter((m) => m.courseId === courseId));
  }

  function getModuleChapters(moduleId) {
    return sortByOrder(chapters.filter((c) => c.moduleId === moduleId));
  }

  function getChapterSections(chapterId) {
    return sortByOrder(sections.filter((s) => s.chapterId === chapterId));
  }

  function getSectionItems(sectionId) {
    return items.filter((i) => i.sectionId === sectionId);
  }

  function getSectionExamples(sectionId) {
    return examples.filter((e) => e.sectionId === sectionId);
  }

  function getItemsByTags(tags, difficulty) {
    if (!tags || !tags.length) return [];
    const tagSet = new Set(tags);
    const diffSet = difficulty && difficulty.length ? new Set(difficulty) : null;
    return items.filter((item) => {
      if (!item.tags || !item.tags.some((t) => tagSet.has(t))) return false;
      if (diffSet && !diffSet.has(item.difficulty)) return false;
      return true;
    });
  }

  function searchSections(query, courseId) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return [];
    const course = getCourse(courseId);
    const sectionIds = course
      ? course.modules
          .map((mId) => getModule(mId))
          .filter(Boolean)
          .flatMap((mod) => mod.chapters)
          .map((cId) => getChapter(cId))
          .filter(Boolean)
          .flatMap((ch) => ch.sections)
      : sections.map((s) => s.id);

    return sectionIds
      .map((id) => getSection(id))
      .filter(Boolean)
      .filter((section) => {
        const text = [
          section.title,
          ...(section.contentBlocks || []).map((b) => `${b.title} ${b.body}`),
          ...getSectionExamples(section.id).map((ex) => `${ex.prompt} ${ex.finalAnswer}`),
        ]
          .join(" ")
          .toLowerCase();
        return text.includes(q);
      });
  }

  return {
    version: VERSION,
    courses,
    modules,
    chapters,
    sections,
    items,
    examples,
    testBlueprints,
    getCourse,
    getModule,
    getChapter,
    getSection,
    getItem,
    getExample,
    getTestBlueprint,
    getCourseModules,
    getModuleChapters,
    getChapterSections,
    getSectionItems,
    getSectionExamples,
    getItemsByTags,
    searchSections,
  };
})();
