import { availableBooks, returnBook } from "./books";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, author } = req.body;
    const bookToReturn = {
      id: availableBooks.length + 1,
      name: name,
      author: author,
    };
    returnBook(bookToReturn);
    res.status(200).json({ success: true, message: "Book added" });
  } else if (req.method === "GET") {
    res.status(200).json(availableBooks);
  } else {
    res.status(405).json({ success: false, message: "Error adding book" });
  }
}
