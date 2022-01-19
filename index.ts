import { LightOffCommand, LightOnCommand, StereoOffCommand, StereoOnWithCDCommand } from "./src/commands";
import { Light, Stereo } from "./src/receivers";
import { Remote } from "./src/Remote";

class RemoteLoader {
  static main() {
    const remote = new Remote();
    const light = new Light();
    const stereo = new Stereo();

    remote.setCommand(0, new LightOnCommand(light), new LightOffCommand(light));
    remote.setCommand(1, new StereoOnWithCDCommand(stereo), new StereoOffCommand(stereo));

    remote.onButton(0);
    remote.undo();
    remote.onButton(0);
    remote.onButton(1);
    remote.offButton(0);
    remote.offButton(1);
  }
}

RemoteLoader.main();