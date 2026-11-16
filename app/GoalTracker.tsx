import { hasCrate, type Puzzle } from "../core/mod.ts";

// A derived view: everything it shows is computed from the puzzle during
// render, so it can never disagree with the board.
export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const { goals } = puzzle.layout;
  const filled = goals.filter((goal) => hasCrate(puzzle, goal)).length;
  return (
    <section className="goals" aria-label="Goals">
      <label>
        Goals filled: {filled} of {goals.length}
        <meter min={0} max={goals.length} value={filled} />
      </label>
    </section>
  );
}
