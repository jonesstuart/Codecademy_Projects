const books = [
  {
    title: "The City We Became",
    author: "N. K. Jemisin",
    tags: ["fantasy", "fiction", "afrofutursim", "science fiction", "sci-fi"]
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    tags: ["fiction", "young adult", "YA", "realism", "coming of age", "classic"]
  },
  {
    title: "The Hundred Thousand Kingdoms",
    author: "N. K. Jemisin",
    tags: ["fantasy", "fiction", "adventure", "series"]
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    tags: ["nonfiction", "history", "anthropology", "science", "sociology"]
  },
  {
    title: "Behave: The Biology of Humans at Our Best and Worst",
    author: "Robert M. Sapolsky",
    tags: ["nonfiction", "anthropology", "science", "sociology", "biology"]
  },
  {
    title: "The Parable of the Talents",
    author: "Octavia Butler",
    tags: ["fiction", "dystopian", "science fiction"]
  },
  {
    title: "1984",
    author: "George Orwell",
    tags: ["fiction", "dystopian", "science fiction", "classics", "adult"]
  },
  {
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    tags: ["fiction", "mystery", "magical realism"]
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    tags: ["memoir", "nonfiction", "autobiography"]
  },
  {
    title: "Wild: From Lost to Found on the Pacific Crest Trail",
    author: "Cheryl Strayed",
    tags: ["nonfiction", "memoir", "adventure", "travel"]
  }
]

// Flatten object keys into an array so that we search the entire object by the input value
const flattenObjectValuesIntoArray = (arrOfObjs) => {
  let flattenedObj;
  const flattenedObjsArr = [];
  for (let obj = 0; obj < arrOfObjs.length; obj++) {
    const objValues = Object.values(arrOfObjs[obj]);
    flattenedObj = [...objValues.flat()]
    flattenedObjsArr.push(flattenedObj)
  }
  return flattenedObjsArr;
};

// Structure filtered books as HTML and return
const structureBookAsHtml = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute('class', 'bookDiv');

  const bookTitle = document.createElement("h2");
  bookTitle.innerHTML = book.title;
  bookTitle.setAttribute('class', 'bookTitle');

  const bookAuthor = document.createElement("h3");
  bookAuthor.innerHTML = book.author;

  const bookTags = document.createElement("p");
  bookTags.innerHTML = book.tags.join(", ");

  bookDiv.append(bookTitle, bookAuthor, bookTags);

  return bookDiv;
};

const renderBooksToDom = (elements) => {
  const bookListContainer = document.querySelector("#bookList");
  bookListContainer.innerHTML = "";

  bookListContainer.append(...elements);
};

//Click handler for search button
let captureSearchValue = () => {
  //  return document.getElementById('search-bar').value.toLowerCase();
  return "fantasy";
};

// Filter books based on search input
const filterBooks = (searchValue, booksArray) => {
  searchValue = searchValue.toLowerCase(); // Convert search value to lowercase for case insensitivity
  let newArr = [];

  for (let i = 0; i < booksArray.length; i++) {
    const bookTags = booksArray[i].tags;
    for (let j = 0; j < bookTags.length; j++) {
      if (bookTags[j].toLowerCase() === searchValue) {
        newArr.push(booksArray[i]);
        break; // Break the inner loop if the tag is found
      }
    }
  }
  return newArr;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (filteredBookList) => {
  return filteredBookList.map(book => structureBookAsHtml(book));
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  let searchValue = captureSearchValue();
  let filteredBooks = filterBooks(searchValue, books);
  let finalList = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(finalList);
}

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn")

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
