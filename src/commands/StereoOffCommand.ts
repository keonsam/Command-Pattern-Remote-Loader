import { Command } from ".";
import { Stereo } from "../receivers";

export class StereoOffCommand implements Command {
  stereo: Stereo;
  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
  }
}