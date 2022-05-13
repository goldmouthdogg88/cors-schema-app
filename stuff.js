function convertCollectionToArray(inputCollection) {
  const buffer = [];
  for (var i = 0; i < inputCollection.length; i++) {
    buffer.push(inputCollection[i]);
  }
  return buffer;
}

function isSubLink() {
  for (var i = 0; i < links.length; i++) {
    if (links[i] == search.history[1]) {
      console.log("isSubLink", i);
      console.log("isVisited");
    }
  }
}

var links = convertCollectionToArray(allPageLinks).map((links) => links.href);

class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }

  hello() {
    console.log("hello", this.#privateField);
  }
}

const instance = new ClassWithPrivateField();

class Recorder {
  #count;

  constructor() {
    this.#count = 0;
  }

  increment() {
    this.#count++;
  }
}

/*
	I can get all the links on the page with the following line of code.
	However it also grabs links that I'm not interested in.
	
	I want to know if I've visitied the page, or not.
*/

/*
Search History:

search = {
	"history": [
	"https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8",
	"https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/",
	"https://www.openmymind.net/mongodb.pdf"
	]
}
*/

```js

var allPageLinks = document.querySelectorAll('a');
```[
  // For this particular serp.page, there are 69 links

  // Here is a copy of the links in an object

  ("",
  "https://support.google.com/websearch/answer/181196?hl=en",
  "",
  "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QPAgI",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8#",
  "https://www.google.com/intl/en/about/products?tab=wh",
  "https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/search%3Fq%3Dthe%2Blittle%2Bmongodb%2Bbook%26rlz%3D1C1GCEA_enUS1005US1005%26oq%3DThe%2Blittle%2Bmongo%2Bboo%26aqs%3Dchrome.1.69i57j0i22i30l4j0i10i22i30.4447j0j7%26sourceid%3Dchrome%26ie%3DUTF-8",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoAXoECAIQAw&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoAnoECAIQBA&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoA3oECAIQBQ&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoBHoECAIQBg&cshid=1652374339013249",
  "https://maps.google.com/maps?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoAHoECAIQCg",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnms&tbm=bks&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoAXoECAIQCw",
  "https://www.google.com/flights?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnms&tbm=flm&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoAnoECAIQDA",
  "https://www.google.com/finance?sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q_AUoA3oECAIQDQ",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnt&tbs=qdr:h&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QpwV6BAgCEBU",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnt&tbs=qdr:d&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QpwV6BAgCEBY",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnt&tbs=qdr:w&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QpwV6BAgCEBc",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnt&tbs=qdr:m&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QpwV6BAgCEBg",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnt&tbs=qdr:y&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QpwV6BAgCEBk",
  "https://www.google.com/search?q=The+little+mongo+boo&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&source=lnt&tbs=li:1&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QpwV6BAgCECA",
  "https://www.google.com/preferences?hl=en&prev=https://www.google.com/search?q%3Dthe%2Blittle%2Bmongodb%2Bbook%26rlz%3D1C1GCEA_enUS1005US1005%26oq%3DThe%2Blittle%2Bmongo%2Bboo%26aqs%3Dchrome.1.69i57j0i22i30l4j0i10i22i30.4447j0j7%26sourceid%3Dchrome%26ie%3DUTF-8",
  "https://myactivity.google.com/product/search?utm_source=google&utm_campaign=quick_settings&hl=en",
  "https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu",
  "https://www.google.com/safesearch?prev=https://www.google.com/search?q%3Dthe%2Blittle%2Bmongodb%2Bbook%26rlz%3D1C1GCEA_enUS1005US1005%26oq%3DThe%2Blittle%2Bmongo%2Bboo%26aqs%3Dchrome.1.69i57j0i22i30l4j0i10i22i30.4447j0j7%26sourceid%3Dchrome%26ie%3DUTF-8",
  "https://www.google.com/preferences?hl=en&prev=https://www.google.com/search?q%3Dthe%2Blittle%2Bmongodb%2Bbook%26rlz%3D1C1GCEA_enUS1005US1005%26oq%3DThe%2Blittle%2Bmongo%2Bboo%26aqs%3Dchrome.1.69i57j0i22i30l4j0i10i22i30.4447j0j7%26sourceid%3Dchrome%26ie%3DUTF-8#languages",
  "https://www.google.com/advanced_search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&hl=en",
  "https://support.google.com/websearch/?p=dsrp_search_hc&hl=en",
  "https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/",
  "https://www.openmymind.net/mongodb.pdf",
  "https://github.com/karlseguin/the-little-mongodb-book",
  "https://www.amazon.com/Little-MongoDB-Book-Karl-Seguin/dp/1493786601",
  "https://www.amazon.com/Little-MongoDB-Book-Karl-Seguin/dp/1493786601",
  "https://www.amazon.com/Little-Mongo-Schema-Design-Book/dp/1517394023",
  "https://www.amazon.com/Little-Mongo-Schema-Design-Book/dp/1517394023",
  "https://www.computer-pdf.com/database/542-tutorial-the-little-mongodb-book.html",
  "https://www.computer-pdf.com/database/542-tutorial-the-little-mongodb-book.html",
  "https://freecomputerbooks.com/The-Little-MongoDB-Book.html",
  "https://books.apple.com/us/book/the-little-mongodb-book/id511623846",
  "https://www.abebooks.com/9781493786602/Little-MongoDB-Book-Karl-Seguin-1493786601/plp",
  "https://www.freetechbooks.com/the-little-mongodb-book-t893.html",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=MongoDB:+The+Definitive+Guide&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8QsZYEegQILBAF",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=MongoDB:+The+Definitive+Guide&tbm=isch&source=iu&ictx=1&vet=1#imgrc=KEkrm9RS5aEzIM",
  "https://books.google.com/books/about/MongoDB_The_Definitive_Guide.html?id=BQS33CxGid4C&source=kp_book_description",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=MongoDB:+The+Definitive+Guide&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q4qYDegQILBAJ",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8#",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=The+Little+MongoDB+Book+PDF&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAg7EAE&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=The+Little+MongoDB+Schema+Design+Book&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAg_EAE&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=The+Little+Redis+book+PDF&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAg8EAE&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=The+Little+Go+Book&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAg-EAE&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=MongoDB+free+Books&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAg9EAE&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=MongoDB+administration+book+pdf&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAg4EAE&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=MongoDB+handbook&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q1QJ6BAhAEAE&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=10&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhA4&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=20&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhA6&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=30&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhA8&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=40&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhA-&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=50&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhBA&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=60&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhBC&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=70&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhBE&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=80&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhBG&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=90&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8tMDegQIAhBI&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&ei=Jjt9Ys-THuvM0PEPnbO4-Ao&start=10&sa=N&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q8NMDegQIAhBK&cshid=1652374339013249",
  "https://www.google.com/search?rlz=1C1GCEA_enUS1005US1005&sxsrf=ALiCzsaAAFVIYQbXQzaMAtUxXI1xfPJHLg:1652374310503&q=The+Little+Mongo+DB+Schema+Design+Book+Christian+Kvalheim&si=AC1wQDApU_L7mEr08NL2tyPAiwbkKXiOQMzKp1cMwbGxhXrbjGYgnK5TRteNBLP63oV_sk71HVQrm6L6pbvBKrvK6ER0y4JIibeKQ3YE0uCbgMdoLX-JsrKQMfyr_rnskHqqy22UW5moW9hUF4I-62Xs53z-tu6z7jnb8aOB8gBLx5sFmxuvZrO7m0Rs4AdF8IhHe5zdaqxSF3GAsKMehEvtTuzSKejfJmEdCs6MiXbncsqFqb2RVdM%3D&sa=X&ved=2ahUKEwjPvsD-tdr3AhVrJjQIHZ0ZDq8Q6RN6BAgtEAE&cshid=1652374339013249",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8#",
  "https://support.google.com/websearch/?p=ws_results_help&hl=en&fg=1",
  "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8#",
  "https://policies.google.com/privacy?hl=en&fg=1",
  "https://policies.google.com/terms?hl=en&fg=1")
];

// What we want to do now is see if any of the links that are farther to the left than serp.url
// are contained within serp.url

[
  {
    tags: "",
    primary_key: "",
    foreign_key: "asdf",
    root_query: "the little mongodb book",
    serp: {
      url: "https://www.google.com/search?q=the+little+mongodb+book&rlz=1C1GCEA_enUS1005US1005&oq=the+little+mongodb+book&aqs=chrome..69i57.18943j0j7&sourceid=chrome&ie=UTF-8",
      serp_links: [],
      serp_links_visited: [
        "https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/",
      ],
    },
    first_node: {
      primary_key: "2",
      foreign_key: "asdf",
      root_url: "https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/",
      sub_links: "https://www.openmymind.net/mongodb.pdf",
    },
    second_node: {
      primary_key: "3",
      foreign_key: "asdf",
      root_query: "determine if link visited javascript",
    },
  },
];
