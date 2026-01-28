import axios from "axios";

const BASE_API_URL = "http://localhost:8080/books";

export const addBooks = async (books) => {
  const re = await axios.post(`${BASE_API_URL}/save`, books,);
  return re.data;
};

export const searchByAuthor = async (author) => {
  const re = await axios.get(`${BASE_API_URL}/search/${author}`);
  return re.data;
};

export const updateById = async (id, books) => {
  const re = await axios.put(`${BASE_API_URL}/update/${id}`, books);
  return re.data;
};

export const deleteByisBn = async (isbn) => {
  const re = await axios.delete(`${BASE_API_URL}/delete/${isbn}`);
  return re.data;
};

export const findById = async (id) => {
  const re = await axios.get(`${BASE_API_URL}/findbyid/${id}`);
  return re.data;
};

export const viewAllBooks = async () =>{
  const re = await axios.get(`${BASE_API_URL}/viewAll`);
  return re.data;
}