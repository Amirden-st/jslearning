export default class Transport {
  #owner;
  #started = false;
  constructor(owner, kindOf) {
    this.#owner = owner;
    this.kindOf = kindOf;
  }

  start() {
    this.#started = true;
    console.log(`The ${this.#owner}'s transport was started`);

  }
  off() {
    this.#started = false;
    console.log(`The ${this.#owner}'s transport was off`);
  }
  getOwner() {
    return this.#owner;
  }

  isStarted() {
    return this.#started;
  }
}
