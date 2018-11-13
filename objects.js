let library = [];

let user1 = {name: 'Nick', id: 7, books: []};
let user2 = {name: 'John', id: 15, books: []};

let book1 = { title: "The Catcher in the Rye", author: "J.D Salinger", isbn: "0316769487", category: "Classic Literature" };
let book2 = { title: "To Kill a Mockingibrd", author: "Harper Lee", isbn: "0446310786", category: "Classic Literature" };
let book3 = { title: "Eloquent JavaScript", author: "Marijn Haverbeke", isbn: "1593279507", category: "Programming Languages" };


// adding the only two users we have to the library array
library.push(user1, user2);

const addBook2User = (userName, book) => {
  library.forEach((user) => {
    if (user.name === userName) {
      user.books.push(book);
      console.log('adicionado');
    }
    console.log(user);
  });

  return "Ok";
};

const listBooksUser = (userName) => {
  library.forEach((user) => {
    if (user['name'] === userName) {
      user.books.forEach((book) => {
        console.log(`User: ${userName} has book: ${book.title}`);
      });
    }

  });

  return library;
};

const listBooksPerUser = () => {
  library.forEach((user, index) => {
    console.log(`${index + 1}. the user named ${user.name} has the following books:`);
    if (user.books.length == 0) return console.log(`the user ${user.name} has no booked books.`); 
    user.books.forEach((book) => {
      console.log(`---> title: ${book.title}, author ${book.author}, category: ${book.category}, isbn: ${book.isbn}`);
    });
  });

  return library;
};

console.log(addBook2User('Nick', book1));
console.log(addBook2User('Nick', book2));

library[1].books.push(book3);

console.log(library[1]);

console.log(listBooksUser('Nick'));

console.log(listBooksPerUser());