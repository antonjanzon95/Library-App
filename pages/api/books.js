export let availableBooks = [
  { id: 0, name: "Harry Potter", author: "J.K. Rowling" },
];

export let rentedBooks = [
  { id: 0, name: "Harry Potter 2", author: "J.K. Rowling" },
];

export const rentBook = (bookToRent) => {
  availableBooks = availableBooks.filter((book) => book.id !== bookToRent.id);
  rentedBooks.push(bookToRent);
};

export const returnBook = (bookToReturn) => {
  rentedBooks = rentedBooks.filter((book) => book.id !== bookToReturn.id);
  availableBooks.push(bookToReturn);
};

export default function handler(req, res) {
  const { method, body } = req;

  switch (req.query.path) {
    case "add-book":
      if (method === "POST") {
        const { name, author } = body;
        const newBook = {
          id: availableBooks.length + 1,
          name: name,
          author: author,
        };
        availableBooks.push(newBook);
        console.log("funkar");
        res.status(200).json({ success: true, message: "Book added" });
      } else if (method === "GET") {
        res.status(200).json(availableBooks);
        console.log("funkar");
      } else {
        res.status(405).json({ success: false, message: "Error adding book" });
      }
      break;

    case "rent-book":
      if (method === "POST") {
        const { name, author } = body;
        const bookToRent = { id: rentedBooks.length + 1, name, author };
        rentBook(bookToRent);
        res.status(200).json({ success: true, message: "Book rented" });
      } else if (method === "GET") {
        res.status(200).json(rentedBooks);
      } else {
        res.status(405).json({ success: false, message: "Error renting book" });
      }
      break;

    case "return-book":
      if (method === "POST") {
        const { name, author } = body;
        const bookToReturn = {
          id: availableBooks.length + 1,
          name: name,
          author: author,
        };
        returnBook(bookToReturn);
        res.status(200).json({ success: true, message: "Book added" });
      } else if (method === "GET") {
        res.status(200).json(availableBooks);
      } else {
        res.status(405).json({ success: false, message: "Error adding book" });
      }
      break;
  }
}
