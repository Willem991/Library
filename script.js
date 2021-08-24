let bookStorage = [];

const form = document.querySelector("#bookInput");
const openBtn = document.querySelector("#addBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const lockScreen = document.querySelector("#lock");

function book(){

};

function storeBook(book){
        bookStorage[bookStorage.length] = book;
}

function displayBooks(){

};

function showForm(){
    form.style.display = "grid";
    lockScreen.style.display = "grid";
};

function hideForm(){
    form.style.display = "none";
    lockScreen.style.display = "none";
};

openBtn.addEventListener('click', showForm)

cancelBtn.addEventListener('click', () =>{
    hideForm();
});

