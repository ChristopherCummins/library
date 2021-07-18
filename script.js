let myLibrary = [];

function Book (title, author, numPages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = numPages;
    this.Read = read;
}

let Bible = new Book("The Bible", "God", 1700, true);

let Hobbit = new Book("The Hobbit", "JRR Tolkein", 3443, true);


myLibrary.push(Bible);
myLibrary.push(Hobbit);

console.log(myLibrary);

function showForm() {
    document.getElementById("addBookForm").style.display="block";
}

form = document.querySelector("form");
function addBookToLibrary(form) {
    let newBook = new Book (form.title.value, form.author.value, form.numPages.value, form.read.value);
    myLibrary.push(newBook);
    console.log(myLibrary);

    document.getElementById("addBookForm").reset();

}

function newElement() {
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numPages = document.getElementById("numPages").value;
    let read = document.getElementById("read").value;

    let heading = document.createElement("h3");
    heading.classList.add("heading");
    let t = document.createTextNode(title);
    heading.appendChild(t);
    let subheader = document.createElement("h4");
    let a = document.createTextNode(author);
    subheader.appendChild(a);
    let p1 = document.createElement("p");
    let n = document.createTextNode(numPages);
    p1.appendChild(n);
    let p2 = document.createElement("p");
    let r = document.createTextNode(read);
    p2.appendChild(r);

    card.appendChild(heading);
    card.appendChild(subheader);
    card.appendChild(p1);
    card.appendChild(p2);

    document.getElementById("cardContainer").appendChild(card);

    addBookToLibrary(form);

    let span = document.createElement("SPAN");
    let remove = document.createTextNode("Remove");
    span.className = "remove";
    span.appendChild(remove);
    card.appendChild(span);

    let removeList = document.getElementsByClassName("remove");
    for (i = 0; i < removeList.length; i++) {
        removeList[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
        }
    }

}   

let numBooks = document.getElementsByClassName("card")
for (i = 0; i < numBooks.length; i++) {
    let span = document.createElement("SPAN");
    let remove = document.createTextNode("Remove");
    span.className = "remove";
    span.appendChild(remove);
    numBooks[i].appendChild(span);
}

let remove = document.getElementsByClassName("remove");
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
    }
}