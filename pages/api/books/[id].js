import { readData } from "./index";

export default function handler(req, res) {
  const { method } = req;

  const data = readData() || { availableBooks: [], rentedBooks: [] };

  if (method === "GET") {
    const { id } = req.query;
    const books = [...data.availableBooks, ...data.rentedBooks];
    const book = books.find((book) => book.id === id);
    if (!book) {
      res.status(404).json({ success: false, message: "Book not found" });
      return;
    }
    res.status(200).json({ success: true, pages: book.pages });
  } else {
    res.status(405).json({ success: false, message: "Error fetching pages" });
  }
}
