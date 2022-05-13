const open = require("open");

data = [
  {
    meta: {
      date: new Date(),
    },
  },
  {
    primary_key: "1",
    foreign_key: "asdf3",
    url: "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    primary_key: "2",
    foreign_key: "asdf3",
    url: "https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/",
  },
  {
    primary_key: "3",
    foreign_key: "asdf3",
    url: "https://www.openmymind.net/mongodb.pdf",
  },
  {
    primary_key: "4",
    foreign_key: "cwewbf54y",
    url: "https://www.google.com/search?q=determine+if+link+visited+javascript&rlz=1C1GCEA_enUS1005US1005&oq=determine+if+link&aqs=chrome.1.69i57j35i39j0i512l3j0i22i30l5.4447j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    primary_key: "5",
    foreign_key: "cwewbf54y",
    url: "https://stackoverflow.com/questions/7290959/how-can-i-detect-visited-and-unvisited-links-on-a-page",
    terminate: true,
  },
  {
    primary_key: "6",
    foreign_key: "cccw542e",
    url: "",
  },
  {
    primary_key: "7",
    foreign_key: "veb45j",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
  {
    primary_key: "",
    foreign_key: "",
    url: "",
  },
];

/*

> data.filter(x => x['foreign_key'] == 'asdf3')
[ { primary_key: '1', foreign_key: 'asdf3' }, { primary_key: '3', foreign_key: 'asdf3' } ]

*/
function filterByKeyAndInputString(inputArray, key, filterString) {
  if (typeof inputArray != "object" && inputArray.length > 0) {
    throw "filterByKey([Array], [string], and must not be empty.)";
  }
  return data.filter((x) => x[key] == filterString);
}

function addObjectProperty(property, value) {
  // select all but the meta object
  data.slice(1, data.length).map((x) => (x[property] = value));
}

function applyPrimaryKey() {
  // Count the number of objects in the data set.
  // assign each item its index

  data.slice(1, data.length).map((x) => (x.primary_key = data.indexOf(x)));
}
// I want to find the sublinks of a page.
// Because having a map of the links that I've visited will
// tell me where I've looked already?
function findSubLinks() {}

// specify the app to open in
// open(url, {app: 'firefox'});

// open the url in the default browser
