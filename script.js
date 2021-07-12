let myLibrary = [];

function Book (title, author, numPages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = numPages;
    this.Read = read;
}

let Bible = new Book("The Bible", "God", 1700, true);

myLibrary.push(Bible);

console.log(myLibrary);

function showForm() {
    document.getElementById("addBookForm").style.display="block";
}

form = document.querySelector("form");
function addBookToLibrary(form) {
    let newBook = new Book (form.title.value, form.author.value, form.numPages.value, form.read.value);
    let bookArray = [newBook.Title, newBook.Author, newBook.Pages, newBook.Read];
    myLibrary.push(newBook);
    console.log(myLibrary);
    addBookToTable(table, bookArray);

}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function addBookToTable(table, bookArray) {
    let row = table.insertRow();
    for (let key of bookArray) {
        let cell = row.insertCell();
        let text = document.createTextNode(key);
        cell.appendChild(text);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(myLibrary[0]);
generateTable(table, myLibrary);
generateTableHead(table, data);

