class Recorder {
  #visitedLinks;
  #subLinks;
  #history;

  constructor() {
    this.#visitedLinks = [];
    this.#subLinks = [];
  }

  getCount(log = "") {
    if (log == "log") {
      console.log(this.#visitedLinks.length);
    } else {
      return this.#visitedLinks.length;
    }
  }

  static hello() {
    console.log("hello ");
  }

  isSubLink(history) {
    let querySelectorResults = document.querySelectorAll("a");
    const links = Recorder.convertCollectionToArray(querySelectorResults);

    for (let i = 0; i < links.length; i++) {
      if (links[i] == history) {
        // let _link = inputLink[i]; // inputLink
        this.addSubLink(history); // May change to .addLink(links[i]);
        this.addVisitedLink(history);
      }
    }
  }

  static convertCollectionToArray(inputCollection) {
    const buffer = [];
    for (var i = 0; i < inputCollection.length; i++) {
      buffer.push(inputCollection[i]);
    }
    return buffer;
  }

  addSubLink(url) {
    if (typeof url != "string") {
      throw "must be a valid string";
    }
    this.#subLinks.push(url);
  }

  addVisitedLink(url) {
    if (typeof url != "string") {
      throw "must be a valid string";
    }
    this.#visitedLinks.push(url);
  }
}

var instance = new Recorder();
// instance.getCount();
// instance.addLink(0);
// instance.addLink("https://archlinux.org");
// var x = instance.getCount("log");
// console.log("dev returned value", x);

// STATIC METHODS::
// Recorder.hello();
// const data = Recorder.convertCollectionToArray([]);
// console.log(data);
