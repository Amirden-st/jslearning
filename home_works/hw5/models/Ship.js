import Transport from "./Transport";
export default class Ship extends Transport {
  #started = false;
  #displacement;
  #anchorIsDropped = false;
  constructor(owner, displacement) {
    super(owner, "ship");
    this.displacement = displacement;
  }

  get displacement() {
    return this.#displacement;
  }

  set displacement(d) {
    if (d > 600000) {
      throw Error("Не думаю, что ты владеешь супертанкером");
    }
    this.#displacement = d;
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
