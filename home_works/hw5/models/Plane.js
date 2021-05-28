import Transport from "./Transport";
export default class Plane extends Transport {
  #started = false;
  crewСapacity;
  wingspan;
  #chassisIsLowered = false;
  constructor(owner, wingspan, crewCapacity) {
    super(owner, "plane");
    this.wingspan = wingspan;
    this.crewСapacity = crewCapacity;
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
