import React from "react";

const RentForm = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <form
          type="submit"
          className="flex flex-col justify-center items-center gap-4 bg-slate-100 p-12 font-extrabold"
        >
          <label className="flex flex-col gap-2">
            What book do you wish to rent?
            <input
              type="text"
              name="bookInput"
              className="bg-slate-300"
              required
            />
          </label>
          <button
            id="bookBtn"
            className="p-4 shadow-md shadow-white bg-slate-400 w-1/2"
          >
            Rent Book
          </button>
        </form>
      </div>
    </>
  );
};

export default RentForm;
