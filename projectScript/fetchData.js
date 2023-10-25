let books;
const getBooks = async function (bookName) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
    );
    if (!response.ok) {
      throw new Error(
        `Could not fetch data please try again ${response.status} `
      );
    }
    books = await response.json();
    handleResponse(books.items);
  } catch (error) {
    setTimeout(() => {
      console.error("error", error.message);
    }, 200);
  }
};

const book = document.querySelector("#name");
document.querySelector(".proceed").addEventListener("click", () => {
  getBooks(book.value);
  document.querySelector(".results").textContent = "";
});

function handleResponse(response) {
  found(response);
}

function found(available) {
  switch (available) {
    case available:
      available.forEach((element) => {
        let bookHtml = `<div class="books">
                <div class="book-title">${element.volumeInfo.title}</div>
                <img src="${
                  element.volumeInfo.imageLinks.thumbnail
                    ? element.volumeInfo.imageLinks.thumbnail
                    : ""
                }" alt="${element.volumeInfo.title} image">
                <div class="rest">
                    <div class="author">Author ${
                      element.volumeInfo.authors[0]
                    }</div>
                    <div class="published">Published ${
                      element.volumeInfo.publishedDate
                    }</div>
                    <div class="page-count">Pages ${
                      element.volumeInfo.pageCount
                    }</div>
                    <a href="${element.volumeInfo.infoLink}">Learn More....</a>
                </div>
            </div>`;
        document
          .querySelector(".results")
          .insertAdjacentHTML("afterbegin", bookHtml);
      });
      break;
    case !available:
      document.querySelector(".results").innerHTML =
        "<h1>Not found Please Try another Keyword<h2>";
      break;
    default:
      break;
  }
}
