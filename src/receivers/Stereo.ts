export class Stereo {
  on() {
    console.log("Stereo is on.");
  }

  off() {
    console.log("Stereo is off.");
  }

  setCD() {
    console.log("CD inserted.");
  }

  removeCD() {
    console.log("CD removed.");
  }

  setVolume(amount: number) {
    console.log(`Volume has been set to ${amount}.`);
  }
}