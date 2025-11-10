function printBookInfo(){
    let books = [
    {name: "Grega dienasgrāmata", author: "Jeff Kiney", isAvaliable: "ir" },
    {name: "Harijs Poters", author: "J. K. Rowling", isAvaliable: "nav" }
]

    for(i = 0; i < books.length; i ++){
        console.log("grāmata: " + books[i].name + " autors: " + books[i].author)
}
}

printBookInfo()
