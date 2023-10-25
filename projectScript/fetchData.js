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
    console.error("error", error.message);
  }
};
const book = document.querySelector("#name");
document.querySelector(".proceed").addEventListener("click", () => {
  getBooks(book.value);
  document.querySelector('.results').textContent = "";
});

function handleResponse(response) {
  response.forEach((element) => {
    console.log(element);
    let bookHtml = `<div class="books">
    <div class="book-title">${element.volumeInfo.title}</div>
    <img src="${element.volumeInfo.imageLinks.thumbnail ? element.volumeInfo.imageLinks.thumbnail : ""}" alt="${element.volumeInfo.title} image">
    <div class="rest">
        <div class="author">Author ${element.volumeInfo.authors[0]}</div>
        <div class="published">Published ${element.volumeInfo.publishedDate}</div>
        <div class="page-count">Pages ${element.volumeInfo.pageCount}</div>
        <a href="${element.volumeInfo.infoLink}">Learn More....</a>
    </div>
</div>`
    document.querySelector('.results').insertAdjacentHTML('afterbegin',bookHtml);
  });
}
//   imageLink.thumbnail

/*
allowAnonLogging
: 
false
authors
: 
['GLADYS SCHMITT']
canonicalVolumeLink
: 
"https://books.google.com/books/about/DAVID_THE_KING.html?hl=&id=pfRGuwEACAAJ"
contentVersion
: 
"0.3.2.0.preview.0"
imageLinks
: 
{smallThumbnail: 'http://books.google.com/books/content?id=pfRGuwEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api', thumbnail: 'http://books.google.com/books/content?id=pfRGuwEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api'}
infoLink
: 
"http://books.google.com/books?id=pfRGuwEACAAJ&dq=David&hl=&source=gbs_api"
language
: 
"en"
maturityRating
: 
"NOT_MATURE"
pageCount
: 
642
panelizationSummary
: 
{containsEpubBubbles: false, containsImageBubbles: false}
previewLink
: 
"http://books.google.com/books?id=pfRGuwEACAAJ&dq=David&hl=&cd=7&source=gbs_api"
printType
: 
"BOOK"
publishedDate
: 
"1946"
readingModes
: 
{text: false, image: false}
title
: 
"DAVID THE KING"
*/
