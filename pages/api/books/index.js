import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

export const dataFilePath = path.join(process.cwd(), "data", "books.json");

export const readData = () => {
  try {
    const fileContent = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading data file", error);
    return null;
  }
};

export const writeData = (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataFilePath, jsonData, "utf-8");
  } catch (error) {
    console.error("Error writing data file", error);
  }
};

export default function handler(req, res) {
  const { method, body } = req;

  const data = readData() || { availableBooks: [], rentedBooks: [] };

  switch (req.query.path) {
    case "add-book":
      if (method === "POST") {
        const { name, author, pages } = body;
        const newBook = {
          id: uuidv4(),
          name: name,
          author: author,
          pages: pages,
        };
        data.availableBooks.push(newBook);
        writeData(data);
        res.status(200).json({ success: true, message: "Book added" });
      } else if (method === "GET") {
        res.status(200).json(data.availableBooks);
      } else {
        res.status(405).json({ success: false, message: "Error adding book" });
      }
      break;

    case "get-books":
      if (method === "GET") {
        res.status(200).json(data.availableBooks);
      }
      break;

    case "rent-book":
      if (method === "POST") {
        const bookToRent = body;
        data.availableBooks = data.availableBooks.filter(
          (book) => book.id !== body.id
        );
        data.rentedBooks.push(bookToRent);
        writeData(data);
        res.status(200).json({ success: true, message: "Book rented" });
      } else if (method === "GET") {
        res.status(200).json(data.rentedBooks);
      } else {
        res.status(405).json({ success: false, message: "Error renting book" });
      }
      break;

    case "return-book":
      if (method === "POST") {
        const bookToReturn = body;
        data.rentedBooks = data.rentedBooks.filter(
          (book) => book.id !== body.id
        );
        data.availableBooks.push(bookToReturn);
        writeData(data);
        res.status(200).json({ success: true, message: "Book returned" });
      } else if (method === "GET") {
        res.status(200).json(data.availableBooks);
      } else {
        res
          .status(405)
          .json({ success: false, message: "Error returning book" });
      }
      break;
  }
}
