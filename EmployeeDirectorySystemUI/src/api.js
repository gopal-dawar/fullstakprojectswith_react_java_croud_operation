import axios from "axios";

const BASE_API_URL = "http://localhost:8080/employee";

export const searchEmployee = async (name) => {
  const re = await axios.get(`${BASE_API_URL}/search/${name}`);
  return re.data;
};

export const viewEmployee = async () => {
  const re = await axios.get(`${BASE_API_URL}/view`);
  return re.data;
};

export const addEmployee = async (employee) => {
  const re = await axios.post(`${BASE_API_URL}/save`, employee);
  return re.data;
};

export const updateById = async (id, employee) => {
  const re = await axios.put(`${BASE_API_URL}/update/${id}`, employee);
  return re.data;
};

export const deleteById = async (id) => {
  const re = await axios.delete(`${BASE_API_URL}/delete/${id}`);
  return re.data;
};

export const getById = async (id) => {
  const re = await axios.get(`${BASE_API_URL}/viewById/${id}`);
  return re.data;
};
