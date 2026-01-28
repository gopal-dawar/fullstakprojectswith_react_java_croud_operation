import React, { useState } from "react";
import { addBooks } from "../../api";

const Addbook = () => {
  const bookfield = {
    title: "",
    author: "",
    isbn: "",
    availableCopies: 0,
  };
  const [books, setBooks] = useState(bookfield);

  const formhandling = (e) => {
    e.preventDefault();

    const fetchdata = async () => {
      await addBooks(books);
      alert("Data Successfully added!");
      setBooks(bookfield);
    };
    fetchdata();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Book Details
        </h2>

        <form onSubmit={(e) => formhandling(e)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter book title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={books.title}
              onChange={(e) => setBooks({ ...books, title: e.target.value })}
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              placeholder="Enter author name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={books.author}
              onChange={(e) => setBooks({ ...books, author: e.target.value })}
            />
          </div>

          {/* ISBN */}
          <div>
            <label className="block text-sm font-medium mb-1">ISBN</label>
            <input
              type="text"
              placeholder="Enter ISBN number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={books.isbn}
              onChange={(e) => setBooks({ ...books, isbn: e.target.value })}
            />
          </div>

          {/* Available Copies */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Available Copies
            </label>
            <input
              type="number"
              placeholder="Enter number of copies"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={books.availableCopies}
              onChange={(e) =>
                setBooks({ ...books, availableCopies: e.target.value })
              }
            />
          </div>

          {/* Button */}
          <input
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Addbook;
