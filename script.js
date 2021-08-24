let bookStorage = [];

const form = document.querySelector("#bookInput");
const openBtn = document.querySelector("#addBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const lockScreen = document.querySelector("#lock");
const confirmBtn = document.querySelector("#confirmBtn");
const library = document.querySelector("#library");
let bookcounter = 0;

function book(){
    bookcounter++

    this.title = document.querySelector("#titleIn").value;
    this.author = document.querySelector("#authorIn").value;
    this.pages = document.querySelector("#pagesIn").value;
    this.read = document.querySelector("#readIn").checked;
    this.number = bookcounter;
};

function storeBook(book){
        bookStorage[bookStorage.length] = book;
}

function removeBook(btn){
    let i = btn.id;
    console.log(i);
    let mainDiv = document.querySelector(`#div${i}`);
    library.removeChild(mainDiv);  
};

function displayBooks(bookArray, indx){
    let mainDiv = document.createElement('div');
    mainDiv.style.width = "250px";
    mainDiv.style.height = "450px";
    mainDiv.style.backgroundColor = "red";
    mainDiv.style.margin = "25px"
    mainDiv.style.display = "grid";
    mainDiv.style.gridTemplateRows = "repeat(5, auto)";
    mainDiv.style.alignItems = "center";
    mainDiv.style.justifyItems = "center";
    mainDiv.id = `div${bookcounter}`;

    let infoTitle = document.createElement('p');
    infoTitle.textContent = `Title: ${bookArray[indx].title}`;

    let infoAuthor = document.createElement('p');
    infoAuthor.textContent = `Author: ${bookArray[indx].author}`;

    let infoPages = document.createElement('p');
    infoPages.textContent = `Pages: ${bookArray[indx].pages}`;

    let infoRead = document.createElement('p');
    infoRead.textContent = `Read: ${bookArray[indx].read}`;

    let removeBtn = document.createElement("button");
    removeBtn.style.gridRowStart = "5";
    removeBtn.style.margin = "20px";
    removeBtn.textContent = "Remove";
    removeBtn.id = bookcounter;

    removeBtn.addEventListener('click', () =>{
        removeBook(removeBtn);
    })

    mainDiv.appendChild(infoTitle);
    mainDiv.appendChild(infoAuthor);
    mainDiv.appendChild(infoPages);
    mainDiv.appendChild(infoRead);
    mainDiv.appendChild(removeBtn);
    library.appendChild(mainDiv);

};

function showForm(){
    form.style.display = "grid";
    lockScreen.style.display = "grid";
};

function hideForm(){
    form.style.display = "none";
    lockScreen.style.display = "none";
    document.querySelector("#titleIn").value = "";
    document.querySelector("#authorIn").value = "";
    document.querySelector("#pagesIn").value = "";
    document.querySelector("#readIn").checked = false;
    

};

function checkForm(){
    let title = document.querySelector("#titleIn").value;
    let author = document.querySelector("#authorIn").value;
    let pages = document.querySelector("#pagesIn").value;

    if(title != "" && author != "" && pages > 0 ){
        return true;
    }else{
        return false;
    }
}

openBtn.addEventListener('click', showForm)

cancelBtn.addEventListener('click', () =>{
    hideForm();
});

confirmBtn.addEventListener("click", () => {
    if(checkForm()){
        let newBook = new book();
        storeBook(newBook);
        displayBooks(bookStorage, bookStorage.length -1);
        hideForm();
    }else{
        alert("Either a value is empty or your pages entry is not a number");
    }
});



