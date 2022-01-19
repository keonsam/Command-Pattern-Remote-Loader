import { Command } from ".";
import { Light } from "../receivers";

export class LightOffCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
