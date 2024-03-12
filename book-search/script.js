// Click handler for search button
const captureSearchValue = () => {
    return document.getElementById("search-bar").value;
  }
   
  // Filter books based on search input
  const filterBooks = () => {
    let bookDeets = flattenObjectValuesIntoArray(books);
    let matched = [];
  
    for (let i =0; i < bookDeets.length; i++) {
    if (captureSearchValue === bookDeets) {
      return matched[i].push(bookDeets)
  
    }
    }
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = () => {
  
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = () => {
  
  }
  
  // Grab search button from the DOM
  
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });