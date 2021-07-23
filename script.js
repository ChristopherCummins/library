let myLibrary = [];

function Book (title, author, numPages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = numPages;
    this.Read = read;
    this.id = title.slice(0,3).toUpperCase() + numPages;
}

let Bible = new Book("The Bible", "God", 1700, "Read");

let Hobbit = new Book("The Hobbit", "JRR Tolkein", 3443, "Unread");


myLibrary.push(Bible);
myLibrary.push(Hobbit);

console.log(myLibrary);


form = document.querySelector("form");
function addBookToLibrary(form) {
    let newBook = new Book (form.title.value, form.author.value, form.numPages.value, form.read.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function newElement() {
    addBookToLibrary(form);
    document.getElementById("addBookForm").reset();
    clearCards();
    showCards();
    addRemoveButton();
}

function showCards() {
    for (i = 0; i < myLibrary.length; i++) {
        createCard();
    }
}

showCards();

function createCard() {
    let card = document.createElement("div");
    card.classList.add("card");
    let title = myLibrary[i]["Title"];
    let author = myLibrary[i]["Author"];
    let numPages = myLibrary[i]["Pages"];
    let read = myLibrary[i]["Read"];

    let heading = document.createElement("h3");
    heading.classList.add("heading");
    let t = document.createTextNode(title);
    heading.appendChild(t);
    let subheader = document.createElement("h4");
    subheader.classList.add("subheader");
    let a = document.createTextNode("Author: " + author);
    subheader.appendChild(a);
    let p1 = document.createElement("p");
    p1.classList.add("numPages")
    let n = document.createTextNode("Page count: " + numPages);
    p1.appendChild(n);
    let p2 = document.createElement("p");
    p2.classList.add("readStatus");
    let r = document.createTextNode("Status: " + read);
    p2.appendChild(r);

    card.appendChild(heading);
    card.appendChild(subheader);
    card.appendChild(p1);
    card.appendChild(p2);

    document.getElementById("cardContainer").appendChild(card); 
    
    let updateButton = document.createElement("button");
    let update = document.createTextNode("Update Status");
    updateButton.className = "updateButton";
    updateButton.appendChild(update);
    card.appendChild(updateButton);

    let removeButton = document.createElement("button");
    let remove = document.createTextNode("Remove");
    removeButton.className = "btn btn-danger";
    removeButton.appendChild(remove);
    card.appendChild(removeButton);

}

function clearCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.textContent="";
}

function addRemoveButton() {
    let remove = document.getElementsByClassName("btn btn-danger");
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
            myLibrary.splice(remove[i], 1);
            checkLibrary();
        }
    }
}

addRemoveButton();

function addUpdateButton() {
    let update = document.getElementsByClassName("updateButton");
    for (i = 0; i < update.length; i++) {
        update[i].onclick = function() {
            console.log(i);
        }
    }
}

addUpdateButton();


function checkLibrary() {
    if (myLibrary.length === 0) {
        let cardContainer = document.getElementById("cardContainer");
        cardContainer.innerHTML ="Your library is empty. Add a book!";
    }
}

checkLibrary();