import axios from "axios";

const BASE_API_URL = "http://localhost:8080";

export const viewAllData = async () => {
  const re = await axios.get(`${BASE_API_URL}/viewAll`);
  return re.data;
};

export const searchByModelOrYear = async (modelOrYear) => {
  const re = await axios.get(`${BASE_API_URL}/search`, modelOrYear);
  return re.data;
};

export const findVehicleById = async (id) => {
  const re = await axios.get(`${BASE_API_URL}/viewByid/${id}`);
  return re.data;
};

export const saveData = async (vehicle) => {
  const re = await axios.post(`${BASE_API_URL}/save`, vehicle);
  return re.data;
};

export const updateVehicle = async (id, vehicle) => {
  const re = await axios.put(`${BASE_API_URL}/update/${id}`, vehicle);
  return re.data;
};

export const deletebyid = async (id) => {
  const re = await axios.delete(`${BASE_API_URL}/delete/${id}`);
  return re.data;
};
