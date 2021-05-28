import Transport from "./Transport";
export default class Car extends Transport {
  #started = false;
  headlightsOn = false;
  wipersOn = false;
  constructor(owner, mark) {
    super(owner, "car");
    this.mark = mark;
  }

  start() {
    this.#started = true;
    console.log(`The car was started`);
  }
  off() {
    this.#started = false;
    console.log(`The car was off`);
  }

  useHeadlights() {
    this.headlightsOn = true;
    console.log("Headlights were on");
  }
  useWipers() {
    this.wipersOn = true;
    console.log("Headlights were on");
  }
  offHeadlights() {
    this.headlightsOn = false;
    console.log("Headlights were off");
  }
  offWipers() {
    this.wipersOn = false;
    console.log("Headlights were off");
  }
  
  isStarted() {
    return this.#started;
  }
}
