import axios from "axios";

const BASE_API_URL = "http://localhost:8080/product";

export const addProduct = async (product) => {
  const re = await axios.post(`${BASE_API_URL}/save`, product);
  return re.data;
};

export const viewAllProduct = async () => {
  const re = await axios.get(`${BASE_API_URL}/viewall`);
  return re.data;
};

export const viewById = async (id) => {
  const re = await axios.get(`${BASE_API_URL}/viewbyid/${id}`);
  return re.data;
};

export const updatebyid = async (id, product) => {
  const re = await axios.put(`${BASE_API_URL}/update/${id}`, product);
  return re.data;
};

export const deleteByid = async (id) => {
  const re = await axios.delete(`${BASE_API_URL}/delete/${id}`);
  return re.data;
};
