import axios from "axios";

// Base URL (controller level)
const BASE_URL = "http://localhost:8080";

// CREATE Account
export const createAccount = (accountData) => {
  return axios.post(`${BASE_URL}/save`, accountData);
};

// READ Account by ID
export const getAccountById = async (accountId) => {
  return await axios.get(`${BASE_URL}/viewById/${accountId}`);
};

// UPDATE Account
export const updateAccount = (accountId, accountData) => {
  return axios.put(`${BASE_URL}/update/${accountId}`, accountData);
};

// DELETE Account
export const deleteAccount = async (accountId) => {
  return await axios.delete(`${BASE_URL}/delete/${accountId}`);
};
