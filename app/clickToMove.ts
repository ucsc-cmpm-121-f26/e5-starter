import type { Direction, Position } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";

function directionTo(from: Position, to: Position): Direction | undefined {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  if (Math.abs(dx) + Math.abs(dy) !== 1) return undefined;
  if (dx === 1) return "right";
  if (dx === -1) return "left";
  return dy === 1 ? "down" : "up";
}

// Click a tile next to the player to step (or push) toward it.
export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    return board.onTileClick((at) => {
      const direction = directionTo(session.getState().puzzle.player, at);
      if (direction) session.dispatch({ kind: "move", direction });
    });
  },
};
