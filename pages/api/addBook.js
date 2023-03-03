import { availableBooks } from "./books";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, author } = req.body;
    const newBook = {
      id: availableBooks.length + 1,
      name: name,
      author: author,
    };
    availableBooks.push(newBook);
    res.status(200).json({ success: true, message: "Book added" });
  } else if (req.method === "GET") {
    res.status(200).json(availableBooks);
  } else {
    res.status(405).json({ success: false, message: "Error adding book" });
  }
}
