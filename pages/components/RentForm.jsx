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
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className="flex flex-col gap-2 text-xl justify-center items-center">
            <h2 className="text-center">
              Would you like to add a book to the library?
            </h2>
            <label className="flex flex-col">
              Title:
              <input
                type="text"
                className="bg-slate-100 rounded "
                value={bookName}
                onChange={(event) => setBookName(event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col">
              Author:
              <input
                type="text"
                className="bg-slate-100 rounded "
                value={authorName}
                onChange={(event) => setAuthorName(event.target.value)}
                required
              />
            </label>
            <label className="flex flex-col">
              Pages amount:
              <input
                type="text"
                className="bg-slate-100 rounded "
                value={pagesAmount}
                onChange={(event) => setPagesAmount(event.target.value)}
                required
              />
            </label>
            <p className="text-center font-bold m-4">
              {addedMessage && addedMessage}
            </p>
          </div>
          <button
            id="bookBtn"
            type="submit"
            className="p-3 border-2 w-1/2 bg-black bg-opacity-60 hover:bg-slate-100 hover:text-black font-extrabold"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default RentForm;
