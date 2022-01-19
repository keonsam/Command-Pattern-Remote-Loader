import { Command } from ".";

export class NoCommand implements Command {
  execute(): void { }
  undo(): void { }
}