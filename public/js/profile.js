// handle API call to google books.
const searchBooks = async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector(".search-input").value.trim();

  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({ search: searchInput }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(data);
  console.log(data.items[0].volumeInfo.title);
  console.log(data.items[0].volumeInfo.authors);
  console.log(data.items[0].volumeInfo.description);
  console.log(data.items[0].volumeInfo.imageLinks.thumbnail);

  document.querySelector(".getBook").innerHTML = "";
  renderAllBooks(data);
};

const renderAllBooks = (volumeData) => {
  //event.preventDefault();
  console.log(volumeData);
  const getBooks = document.querySelector(".getBook");
//for (let i = 0; i < volumeData.length; i++) {

  let bookCard =
          `
     <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${volumeData.items[0].volumeInfo.imageLinks.thumbnail}" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${volumeData.items[0].volumeInfo.title}</h5>
              <p class="card-text">${volumeData.items[0].volumeInfo.description}</p>
              <p class="card-text"><small class="text-muted">${volumeData.items[0].volumeInfo.authors}</small></p>
            </div>
          </div>
        </div>
      </div>
      <div class="ReadButton">
    <button type="button" id="btn-haveread" class="btn btn-primary add-button">Books I've Read</button>
  </div>
  <div class="ListButton">
    <button type="button" id="btn-wantread" class="btn btn-primary add-button">Add this Book to me Reading List</button>
  </div>
      `;
      getBooks.insertAdjacentHTML("beforeend", bookCard);
     // console.log(bookCard);
}
//}

/********Add books to my I have read list***********/
const addHaveRead = () => {
  //event.preventDefault();
  console.log(volumeData.items);
  const haveReadBooks = document.querySelector(".haveRead");
//for (let i = 0; i < volumeData.length; i++) {

  let haveReadCard =
          `
     <div class="card mb-3" col-md-3>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${volumeData.items[0].volumeInfo.imageLinks.thumbnail}" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${volumeData.items[0].volumeInfo.title}</h5>
              <p class="card-text"><small class="text-muted">${volumeData.items[0].volumeInfo.authors}</small></p>
            </div>
          </div>
        </div>
      </div>
      `;
      haveReadBooks.insertAdjacentHTML("beforeend", haveReadCard);
}
//}



//};

// Add a book I want read to a mysql database
// const addWantRead = async (event) => {
//   event.preventDefault();

// };

document.querySelector("#booksearch").addEventListener("click", searchBooks);
document.querySelector("#btn-haveread").addEventListener("click", addHaveRead);
// document.querySelector("#btn-wantread").addEventListener("click", addWantRead);