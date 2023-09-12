class Book {
    constructor() {
       this.booktitle = "";
       this.bookprice = 0;
    }

    get title() {
       return this.booktitle;
    }

    set title(a) {
        
        this.booktitle = a;
    }

    get price() {
       return this.bookprice;
    }

    set price(a) {
         if (a >= 0) {
         this.bookprice = a;
         }else {
            alert("Invalid price. Price must be a positive number.");
        }
    }
}

let currentBook = new Book();

const getDetails = document.getElementById("getBtn");
const setDetails = document.getElementById("setBtn");


setDetails.addEventListener("click",(e)=>{

    const titleBook = document.getElementById("title").value;
    const priceBook = document.getElementById("price").value;
    
    if(titleBook==""){
        alert("Invalid title.");
    }

    try {
    currentBook.title = titleBook;
    currentBook.price = priceBook;

    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("bookDetails").innerHTML = "";
    }
    catch (error) {
        alert(error.message); 
    }
});

getDetails.addEventListener("click",(e)=>{
    
    const bookDetails = document.getElementById("bookDetails");

    bookDetails.innerHTML = `Title: ${currentBook.title}, Price: \$${currentBook.price}`;

});