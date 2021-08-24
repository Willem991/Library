let bookStorage = [];

const form = document.querySelector("#bookInput");
const openBtn = document.querySelector("#addBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const lockScreen = document.querySelector("#lock");
const confirmBtn = document.querySelector("#confirmBtn");
const library = document.querySelector("#library")
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

function displayBooks(bookArray){
    let mainDiv = document.createElement('div');
    mainDiv.style.width = "250px";
    mainDiv.style.height = "450px";
    mainDiv.style.backgroundColor = "red";
    mainDiv.style.margin = "25px"
    mainDiv.id = bookcounter;

    let removeBtn = document.createElement("button");

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
        displayBooks();
        hideForm();
    }else{
        alert("Either a value is empty or your pages entry is not a number");
    }
});



