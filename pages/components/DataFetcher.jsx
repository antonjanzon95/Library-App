import React from "react";

const DataFetcher = ({ bookList }) => {
  return (
    <ul>
      {bookList.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

export default DataFetcher;
