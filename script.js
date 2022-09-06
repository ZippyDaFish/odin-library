let myLibrary = [];

function Book(title, author, pageNum, read, index){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.index = index;
}
// creates a book object and adds it to myLibrary
function addBook(title, author, pageNum, read){
    let newBook = new Book(title, author, pageNum, read, myLibrary.length);
    myLibrary.push(newBook);
    refreshCards();
}
function bookSubmit(){
    var t = document.getElementById('title').value;
    var auth = document.getElementById('author').value;
    var p = document.getElementById('page-num').value;
    var r;
    var check = document.getElementById('read');
    if(check.checked == true){ r = "Read";}
    else if(check.check != true){ r = "Unread";}
    addBook(t, auth, p, r);
}
// creates card with info of given book object
function createCard(b) {
    var div = document.createElement('div');
    div.setAttribute('class', 'book-card text-main');
    div.innerHTML = `
    <p>${b.title}</p>
    <p>${b.author}</p>
    <p>${b.pageNum}</p>
    <button class='text-main button-main'>${b.read}</button>
    <button class='text-main button-main' onclick='removeBook(${b.index})'>${b.index}</button>
    `;
    document.getElementById('grid-main').appendChild(div);
}

function removeBook(remIndex){
    myLibrary.splice(remIndex, 1);
    console.log("Rem", remIndex);
    for(let i = remIndex; i < myLibrary.length; i++){
        myLibrary[i].index -= 1;
    }
    myLibrary.forEach(b => console.log(b.index));
    refreshCards();
}

function refreshCards() {
    document.getElementById('grid-main').innerHTML = "";
    myLibrary.forEach(b => createCard(b, b.index)); // create a card for each book in the library
}

function showForm(show){
    if(show){ document.getElementById('form-wrap').style.display = 'flex'; }
    else if(!show){ document.getElementById('form-wrap').style.display = 'none'; }
}

// event listener for adding a new book
const addBtn = document.getElementById('add-book');
addBtn.addEventListener('click', function(){showForm(true);});
const closeBtn = document.getElementById('close-form');
closeBtn.addEventListener('click', function(){showForm(false);})