import { Command } from ".";
import { Stereo } from "../receivers";

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;
  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.setVolume(0);
    this.stereo.removeCD();
    this.stereo.off();
  }
}
