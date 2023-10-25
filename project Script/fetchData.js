
let books
const getBooks = async function(bookName){
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
        if(!response.ok){
            throw new Error(`Could not fetch data please try again ${response.status} `)
        };
        books = await response.json();
        handleResponse(books.items);
    } catch (error) {
        console.error('error',error.message);
    }
}
const book = document.querySelector('#name');
document.querySelector('.proceed').addEventListener('click',()=>{
    getBooks(book.value);
})
