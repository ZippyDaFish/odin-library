let myLibrary = [];

function Book(title, author, pageNum, read){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function addBook(title, author, pageNum, read){
    let newBook = new Book(title, author, pageNum, read);
    myLibrary.push(newBook);
}

function createCard(b) {
    var div = document.createElement('div');
    div.setAttribute('class', 'book-card text-main');
    div.innerHTML = `
    <p>${b.title}</p>
    <p>${b.author}</p>
    <p>${b.pageNum}</p>
    <button class='text-main button-main'>Read/Unread</button>
    <button class='text-main button-main'>Remove</button>
    `;
    document.getElementById('grid-main').appendChild(div);
}

addBook('Rawr','Meep',700,true);
addBook('Oof','Schloop',1900,false);
myLibrary.forEach(b => console.log(b)); //log books to console

document.getElementById('grid-main').innerHTML = "";
myLibrary.forEach(b => createCard(b)); // create a card for each book in the library

const addBtn = document.getElementById('add-book');
addBtn.addEventListener('click', function() {
    document.getElementById('add-form').style.display = 'flex';
});