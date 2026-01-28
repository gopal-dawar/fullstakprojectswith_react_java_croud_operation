import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import UpdateProduct from "./component/UpdateProduct";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
