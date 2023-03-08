import React, { useState } from "react";

const RentForm = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [pagesAmount, setPagesAmount] = useState("");
  const [addedMessage, setAddedMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const book = { name: bookName, author: authorName, pages: pagesAmount };
    try {
      const response = await fetch("/api/books?path=add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      const data = await response.json();
      setBookName("");
      setAuthorName("");
      setPagesAmount("");
      setAddedMessage("Book added to library!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center py-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 bg-slate-800 p-12"
        >
          <div className="flex flex-col gap-2">
            Would you like to add a book to the library?
            <label className="flex justify-between">
              Title:
              <input
                type="text"
                className="bg-slate-900"
                value={bookName}
                onChange={(event) => setBookName(event.target.value)}
                required
              />
            </label>
            <label className="flex justify-between">
              Author:
              <input
                type="text"
                className="bg-slate-900"
                value={authorName}
                onChange={(event) => setAuthorName(event.target.value)}
                required
              />
            </label>
            <label className="flex justify-between">
              Pages amount:
              <input
                type="text"
                className="bg-slate-900"
                value={pagesAmount}
                onChange={(event) => setPagesAmount(event.target.value)}
                required
              />
            </label>
            <p className="text-center font-bold m-4">
              {addedMessage && addedMessage}
            </p>
          </div>
          <button id="bookBtn" type="submit" className="p-3 bg-teal-700 w-1/2">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default RentForm;
