import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api";

const AddProduct = () => {
  const initial = {
    name: "",
    price: "",
    manufacturer: "",
    quantity: "",
  };
  const [data, setData] = useState(initial);

  const navigate = useNavigate();

  const formhandling = (e) => {
    e.preventDefault();
    const savedata = async () => {
      await addProduct(data);
    };
    savedata();
    alert("Form Submitted");
    setData(initial);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="w-1/4 bg-amber-300/50 p-5 flex flex-col gap-5 rounded-lg"
        onSubmit={formhandling}
      >
        <h1 className="p-3 text-center font-bold text-3xl">Add Product</h1>

        <input
          className="px-4 shadow w-full py-2"
          type="text"
          placeholder="Enter Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          require
        />

        <input
          className="px-4 shadow w-full py-2"
          type="number"
          placeholder="Enter Price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          required
        />

        <input
          className="px-4 shadow w-full py-2"
          type="text"
          placeholder="Manufacturer"
          value={data.manufacturer}
          onChange={(e) => setData({ ...data, manufacturer: e.target.value })}
          required
        />

        <input
          className="px-4 shadow w-full py-2"
          type="number"
          placeholder="Quantity"
          value={data.quantity}
          onChange={(e) => setData({ ...data, quantity: e.target.value })}
          required
        />

        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="p-2 bg-gray-500 text-white rounded mt-4"
            onClick={() => navigate("/productlist")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="p-2 bg-amber-600 text-white rounded mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
