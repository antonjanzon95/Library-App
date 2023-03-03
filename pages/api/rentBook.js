import { rentBook, rentedBooks } from "./books";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, author } = req.body;
    const bookToRent = { id: rentedBooks.length + 1, name, author };
    rentBook(bookToRent);
    res.status(200).json({ success: true, message: "Book rented" });
  } else if (req.method === "GET") {
    res.status(200).json(rentedBooks);
  } else {
    res.status(405).json({ success: false, message: "Error renting book" });
  }
}
