import { Command, NoCommand } from "./commands";

export class Remote {
  onCommands: Command[] = [];
  offCommands: Command[] = [];
  undoCommand: Command[] = [];

  constructor() {
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = new NoCommand();
      this.offCommands[i] = new NoCommand();
    }
  }

  setCommand(slot: number, on: Command, off: Command) {
    this.onCommands[slot] = on;
    this.offCommands[slot] = off;
  }

  onButton(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand.push(this.onCommands[slot]);
  }

  offButton(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand.push(this.offCommands[slot]);
  }

  undo() {
    const undoCommand = this.undoCommand.pop();
    if (undoCommand) {
      undoCommand.undo();
    }
  }
}
