let books = [
    {name: "Grega dienasgrāmata", author: "Jeff Kiney", isAvaliable: "ir" },
    {name: "Harijs Poters", author: "J. K. Rowling", isAvaliable: "nav" }
]

    for(i = 0; i < books.length; i ++){
        console.log("nosaukums: " + books[i].name + " vai ir pieejama? " + books[i].isAvaliable);
    }