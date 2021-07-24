const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numPagesInput = document.querySelector("#numPages");
const readInput = document.querySelector("#readStatus");


let myLibrary = [];

function Book (title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.pages = numPages;
    this.read = readInput.checked;
    this.id = title.slice(0,5).toUpperCase() + numPages;
}

const addBook = () => {
    title = titleInput.value
    author = authorInput.value;
    pages = numPagesInput.value;
    read = readInput.value;
    id = this.id;

    let newBook = new Book(title, author, pages, read)

    myLibrary.push(newBook);
    updateBooks();
    setLocal();
    checkLibrary();
    document.getElementById("addBookForm").reset();

}

const updateBooks = () => {
    clearCards();
    for (i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i])
    }
    checkLibrary();
}

function clearCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.textContent="";
}

const createCard = (item) => {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardAuthor = document.createElement("h4");
    const cardPages = document.createElement("p");
    const removeButton = document.createElement("button");
    const updateButton = document.createElement("button");

    card.classList.add("card");
    card.setAttribute("id", item.id);
    cardContainer.appendChild(card);

    let cardTitleText = document.createTextNode(item.title);
    cardTitle.appendChild(cardTitleText);
    cardTitle.classList.add("cardTitle");
    let cardAuthorText = document.createTextNode("Author: " + item.author);
    cardAuthor.appendChild(cardAuthorText);
    cardAuthor.classList.add("cardAuthor");
    let cardPagesText = document.createTextNode("Page count: " + item.pages);
    cardPages.appendChild(cardPagesText);
    cardPages.classList.add("cardPages")
    let cardReadText = document.createTextNode("Status: " + item.read);

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(updateButton);
    card.appendChild(removeButton);

    removeButton.className = "btn btn-danger";
    let removeButtonText = document.createTextNode("Remove");
    removeButton.appendChild(removeButtonText);
    removeButton.setAttribute("id", "removeButton");

    updateButton.className = "btn btn-primary";
    updateButton.setAttribute("id", "updateButton")
    if (item.read === false) {
        updateButton.textContent = "Not Read";
    } else {
        updateButton.textContent = "Read"
    }

    removeButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        setLocal();
        updateBooks();
    })
    
    updateButton.addEventListener("click", () => {
        item.read = !item.read;
        setLocal();
        updateBooks();
    })
}

function checkLibrary() {
    if (myLibrary.length === 0) {
        let cardContainer = document.getElementById("cardContainer");
        cardContainer.innerHTML ="Your library is empty. Add a book!";
    }
}

checkLibrary();

function setLocal() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
  };

function restoreLocal() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    if (myLibrary === null) {
        myLibrary = [];
    } else {
        checkLibrary();
        updateBooks();
    };
  };
  
restoreLocal();  