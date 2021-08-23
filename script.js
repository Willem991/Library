let bookStorage = [];

const form = document.querySelector("#bookInput");
const openBtn = document.querySelector("#addBtn");
const cancelBtn = document.querySelector("#cancelBtn");

function book(){

};

function storeBook(book){
        bookStorage[bookStorage.length] = book;
}

function displayBooks(){

};

function showForm(){
    form.style.display = "grid";
};

function hideForm(){
    form.style.display = "none";
};

openBtn.addEventListener('click', showForm)

cancelBtn.addEventListener('click', () =>{
    hideForm();
});

