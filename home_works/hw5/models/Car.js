import Transport from "./Transport";
export default class Car extends Transport {
  #started = false;
  headlightsOn = false;
  wipersOn = false;
  #weight;
  constructor(owner, mark, weight) {
    super(owner, "car");
    this.mark = mark;
    this.weight = weight;
  }

  get weight() {
    return this.#weight;
  }

  set weight(w) {
    if ((w < 1000) | (w > 2500)) {
      throw new Error(
        "Вес машины не может быть меньше 1 тонны или больше 2,5 тонн"
      );
    }
    this.#weight = w;
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
