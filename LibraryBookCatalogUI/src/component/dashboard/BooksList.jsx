import React, { useEffect, useState } from "react";
import { deleteByisBn, viewAllBooks } from "../../api";

const BooksList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const re = await viewAllBooks();
      setData(re);
    };
    fetchData();
    console.log(data);
  }, []);

  const removebooks = async (isbn) => {
    await deleteByisBn(isbn);
    alert("Books is Successfully removed");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Books List</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Author</th>
                <th className="px-4 py-2 text-left">ISBN</th>
                <th className="px-4 py-2 text-left">Available Copies</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {/* Static row 1 */}
              {data.map((value) => {
                return (
                  <tr className="border-t" key={value.id}>
                    <td className="px-4 py-2">{value.title}</td>
                    <td className="px-4 py-2">{value.author}</td>
                    <td className="px-4 py-2">{value.isbn}</td>
                    <td className="px-4 py-2">{value.availableCopies}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 transition">
                          Edit
                        </button>

                        <button
                          onClick={() => {
                            removebooks(value.isbn);
                          }}
                          className="px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
