import Transport from "./Transport";
export default class Ship extends Transport {
  #started = false;
  displacement;
  #anchorIsDropped = false;
  constructor(owner, displacement) {
    super(owner, "Ship");
    this.displacement = displacement;
  }
  start() {
    this.#started = true;
    console.log(`The ship was started`);
  }
  off() {
    this.#started = off;
    console.log(`The ship was off`);
  }

  dropAnchor() {
    this.#anchorIsDropped = true;
    console.log("Anchor was dropped");
  }
  raiseAnchor() {
    this.#anchorIsDropped = false;
    console.log("Anchor was raised");
  }
}
