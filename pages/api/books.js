import { v4 as uuidv4 } from "uuid";

export let availableBooks = [
  { id: uuidv4(), name: "Harry Potter", author: "J.K. Rowling" },
];

export let rentedBooks = [
  { id: uuidv4(), name: "Harry Potter 2", author: "J.K. Rowling" },
];

export default function handler(req, res) {
  const { method, body } = req;

  switch (req.query.path) {
    case "add-book":
      if (method === "POST") {
        const { name, author } = body;
        const newBook = {
          id: uuidv4(),
          name: name,
          author: author,
        };
        availableBooks.push(newBook);
        res.status(200).json({ success: true, message: "Book added" });
      } else if (method === "GET") {
        res.status(200).json(availableBooks);
      } else {
        res.status(405).json({ success: false, message: "Error adding book" });
      }
      break;

    case "rent-book":
      if (method === "POST") {
        const bookToRent = body;
        availableBooks = availableBooks.filter((book) => book.id !== body.id);
        rentedBooks.push(bookToRent);
        res.status(200).json({ success: true, message: "Book rented" });
      } else if (method === "GET") {
        res.status(200).json(rentedBooks);
      } else {
        res.status(405).json({ success: false, message: "Error renting book" });
      }
      break;

    case "return-book":
      if (method === "POST") {
        const bookToReturn = body;
        rentedBooks = rentedBooks.filter((book) => book.id !== body.id);
        availableBooks.push(bookToReturn);
        res.status(200).json({ success: true, message: "Book returned" });
      } else if (method === "GET") {
        res.status(200).json(availableBooks);
      } else {
        res
          .status(405)
          .json({ success: false, message: "Error returning book" });
      }
      break;
  }
}
