import React, { useEffect, useState } from "react";
import { deleteByid, viewAllProduct } from "../api";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const re = await viewAllProduct();
      setData(re);
    };
    fetchdata();
  }, []);

  const deleteData = async (id) => {
    try {
      await deleteByid(id);
      alert("Data Delete Successfully!");

      const re = await viewAllProduct();
      setData(re);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <table className="w-full">
          <tr className="bg-amber-300 ">
            <th className="p-3">Sr.No.</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Manufacturer</th>
            <th className="p-3">Action</th>
          </tr>
          {data.map((data, idx) => {
            return (
              <tr>
                <th className="p-3 font-normal">{idx + 1}</th>
                <th className="p-3 font-normal">{data.name}</th>
                <th className="p-3 font-normal">{data.price}</th>
                <th className="p-3 font-normal">{data.quantity}</th>
                <th className="p-3 font-normal">{data.manufacturer}</th>
                <th className="p-3 font-normal flex gap-x-2 justify-center">
                  <button
                    onClick={() => navigate(`/updateproduct/${data.id}`)}
                    className="p-3 bg-blue-400 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteData(data.id);
                    }}
                    className="p-3 bg-red-400  rounded"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ProductList;
