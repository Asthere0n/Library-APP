function Book(name, author, year, genre) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.addBooktoHTML = function () {

        //Building the header of the cards
        const bookName = document.createElement('h2')
        bookName.innerHTML = this.name
        const BookAuthor = document.createElement('h3')
        BookAuthor.innerHTML = this.author
        const header = document.createElement('header')
        header.appendChild(bookName)
        header.appendChild(BookAuthor)

        //Building the footer of the cards
        const bookYear = document.createElement('span')
        bookYear.innerHTML = this.year
        const bookGenre = document.createElement('span')
        bookGenre.innerHTML = this.genre
        const footer = document.createElement('footer')
        footer.appendChild(bookGenre)
        footer.appendChild(bookYear)

        //Building the card
        const wrapper = document.querySelector('.wrapper')
        const newBook = document.createElement('article')
        newBook.classList.add('card')
        newBook.appendChild(header)
        newBook.appendChild(footer)
        wrapper.appendChild(newBook)
    }
}



const Book11 = new Book('The little prince', 'Antoine de Saint-Exupery', '1943', 'Fantasy')
const Book12 = new Book('A tale of two cities', 'Charles Dickens', '1859', 'Historical Fic')
const Book13 = new Book('The Alchemist', 'Paulo Coelho', '1988', 'Fantasy')

const myLibrary = new Set()

document.addEventListener('DOMContentLoaded', () => {
    myLibrary.forEach((book) => {
        book.addBooktoHTML()
    });
})

//Functionality of AddBook Pop-up
const newBookButton = document.getElementById('newBookButton')
const closePopUpButton = document.getElementById('closeButton')
const PopUp = document.getElementById('newBookPopUp')

newBookButton.addEventListener('click', () => {
    PopUp.classList.remove('hidden')
})

closePopUpButton.addEventListener('click', () => {
    PopUp.classList.add('hidden')
})

//Functionality of AddBook form
const AddBookAccept = document.getElementById('newBookAccept')
AddBookAccept.addEventListener('click', () => {
    console.log(typeof (myLibrary))

    const name = document.getElementById('bookName').value
    const author = document.getElementById('bookAuthor').value
    const genre = document.getElementById('bookGenre').value
    const year = document.getElementById('bookYear').value

    const newBook = new Book(name, author, year, genre)
    //Create the new Object and adding it to library
    myLibrary.add(newBook)
    newBook.addBooktoHTML()

    //Clear the form and close the PopUp

    document.getElementById('bookName').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookYear').value = '';
    document.getElementById('bookGenre').value = ''
    PopUp.classList.add('hidden')
})

