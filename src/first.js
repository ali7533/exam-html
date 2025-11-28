"use strict";
/**
 * Simple learning-oriented TypeScript program.
 *
 * Concepts covered:
 *  - enums & string literal unions
 *  - interfaces with optional props
 *  - generics & utility types
 *  - discriminated unions for Result objects
 *  - async/await with error handling
 */
Object.defineProperty(exports, "__esModule", { value: true });
var FocusArea;
(function (FocusArea) {
    FocusArea["Syntax"] = "Syntax";
    FocusArea["Types"] = "Types";
    FocusArea["Tooling"] = "Tooling";
    FocusArea["Patterns"] = "Patterns";
})(FocusArea || (FocusArea = {}));
const lessons = [
    {
        id: 1,
        title: 'Getting comfortable with basic syntax',
        durationMinutes: 20,
        focus: FocusArea.Syntax,
        resources: ['https://www.typescriptlang.org/docs/'],
        completed: false,
    },
    {
        id: 2,
        title: 'Understanding strict typing features',
        durationMinutes: 35,
        focus: FocusArea.Types,
        resources: ['https://www.typescriptlang.org/docs/handbook/2/everyday-types.html'],
        completed: false,
    },
    {
        id: 3,
        title: 'Exploring tooling & tsconfig',
        durationMinutes: 25,
        focus: FocusArea.Tooling,
        resources: ['https://aka.ms/tsconfig'],
        completed: false,
    },
];
function updateLesson(id, updates) {
    const lesson = lessons.find((item) => item.id === id);
    if (!lesson) {
        return { ok: false, error: `Lesson with id ${id} not found` };
    }
    Object.assign(lesson, updates);
    return { ok: true, data: lesson };
}
function groupLessonsBy(key, data) {
    return data.reduce((groups, item) => {
        const groupKey = String(item[key]);
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(item);
        return groups;
    }, {});
}
async function simulateStudySession(lesson) {
    // Simulate real async work such as fetching notes
    await new Promise((resolve) => setTimeout(resolve, 250));
    if (lesson.durationMinutes > 40) {
        return { ok: false, error: 'Session too long — take a break first!' };
    }
    lesson.completed = true;
    lesson.notes = `Completed on ${new Date().toLocaleDateString()}`;
    return { ok: true, data: lesson };
}
async function main() {
    console.log('--- Your TypeScript Study Plan ---');
    lessons.forEach((lesson) => {
        console.log(`${lesson.id}. ${lesson.title} (${lesson.durationMinutes} mins)`);
    });
    const typeLessons = groupLessonsBy('focus', lessons)[FocusArea.Types] ?? [];
    console.log('\nLessons focused on typing:');
    typeLessons.forEach((lesson) => console.log(` - ${lesson.title}`));
    const updateResult = updateLesson(2, { durationMinutes: 40 });
    if (!updateResult.ok) {
        console.error(updateResult.error);
        return;
    }
    const sessionResult = await simulateStudySession(updateResult.data);
    if (!sessionResult.ok) {
        console.error(sessionResult.error);
        return;
    }
    console.log('\nCompleted lesson summary:');
    console.table(sessionResult.data);
}
main().catch((error) => {
    console.error('Unexpected error in study planner', error);
});
//# sourceMappingURL=first.js.map