function Book(name, author, year, genre){
this.name = name;
this.author = author;
this.year = year;
this.genre = genre;
this.addBook = function(){
    //Constructing the header of the cards
    const bookName = document.createElement('h2')
    bookName.innerHTML = this.name
    const BookAuthor = document.createElement('h3')
    BookAuthor.innerHTML = this.author
    const header = document.createElement('header')
    header.appendChild(bookName)
    header.appendChild(BookAuthor) 
    //Constructing the footer of the cards
    const bookYear = document.createElement('span')
    bookYear.innerHTML = this.year
    const bookGenre = document.createElement('span')
    bookGenre.innerHTML = this.genre
    const footer = document.createElement('footer')
    footer.appendChild(bookYear)
    footer.appendChild(bookGenre)


    const wrapper = document.querySelector('.wrapper')
    const newBook = document.createElement('article')
    newBook.classList.add('card')
    newBook.appendChild(header)
    newBook.appendChild(footer)
    wrapper.appendChild(newBook)
}
}



const Book1 = new Book ('The little prince', 'Antoine de Saint-Exupery','1943','Fantasy')
const Book2 = new Book ('A tale of two cities', 'Charles Dickens', '1859', 'Historical Fic')
const Book3 = new Book ('The Alchemist', 'Paulo Coelho', '1988', 'Fantasy')

let BookRead = [Book1,Book2,Book3]

document.addEventListener('DOMContentLoaded', ()=>{
    BookRead.forEach((book) => {
        book.addBook()
    });
})