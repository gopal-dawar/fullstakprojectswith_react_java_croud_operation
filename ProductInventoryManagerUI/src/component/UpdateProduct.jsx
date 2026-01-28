import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatebyid, viewById } from "../api";

const UpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: 0,
    manufacturer: "",
    quantity: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const re = await viewById(id);
      setData(re);
    };
    fetchData();
  }, [id]);

  const formhandling = (e) => {
    e.preventDefault();

    const updateData = async () => {
      await updatebyid(id, data);
      alert("Successfully Updated!");
    };
    updateData();
  };

  return (
    <div>
      <div className="flex justify-center items-center h-150">
        <form
          className="w-1/4 bg-amber-300/50 p-5 flex flex-col gap-5"
          onSubmit={(e) => formhandling(e)}
        >
          <h1 className="p-3 text-center w-full font-bold text-3xl">
            Upate Data
          </h1>
          <input
            className="px-4 shadow w-full py-2"
            type="text"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            className="px-4 shadow w-full py-2"
            type="number"
            placeholder="Enter Price"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
          <input
            className="px-4 shadow w-full py-2"
            type="text"
            placeholder="Manufacturer"
            value={data.manufacturer}
            onChange={(e) => setData({ ...data, manufacturer: e.target.value })}
          />
          <input
            className="px-4 shadow w-full py-2"
            type="number"
            placeholder="Quantity"
            value={data.quantity}
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
          />
          <div className="flex justify-center items-center gap-x-3">
            <input
              className="p-2 bg-amber-600 text-white rounded mt-4"
              type="reset"
              placeholder="Cancel"
              onClick={() => navigate("/productlist")}
            />
            <input
              className="p-2 bg-amber-600 text-white rounded mt-4"
              type="submit"
              placeholder="Update"
              onClick={() => navigate("/productlist")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
