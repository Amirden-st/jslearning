export default class Transport {
  #owner;
  #started = false;
  #kindOf;
  constructor(owner, kindOf) {
    this.#owner = owner;
    this.kindOf = kindOf;
  }
  
  get owner() {
    return this.#owner
  }

  get kindOf() {
    return this.#kindOf
  }

  set kindOf(kind) {
    if (!["car", "ship", "plane", "train", "rocket", "space ship"].includes(kind.toLowerCase())) {
      throw new TypeError("This kind of transport does not exist!")
    }
    else {
      this.#kindOf = kind;
    }
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

