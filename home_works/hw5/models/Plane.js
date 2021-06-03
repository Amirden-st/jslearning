import Transport from "./Transport";
export default class Plane extends Transport {
  #started = false;
  crewСapacity;
  #wingspan;
  #chassisIsLowered = false;
  constructor(owner, wingspan, crewCapacity) {
    super(owner, "plane");
    this.wingspan = wingspan;
    this.crewСapacity = crewCapacity;
  }

  get wingspan() {
    return this.#wingspan;
  }

  set wingspan(w) {
    if (w > 120) {
      throw Error("Таких самолётов ещё не придумали");
    }
    this.#wingspan = w;
  }

  start() {
    this.#started = true;
    console.log(`The plane was started`);
  }
  off() {
    this.#started = off;
    console.log(`The plane was off`);
  }
  lowerСhassis() {
    this.#chassisIsLowered = true;
    console.log("Chassis is lowered");
  }
  raiseСhassis() {
    this.#chassisIsLowered = false;
    console.log("Chassis is raised");
  }
}
