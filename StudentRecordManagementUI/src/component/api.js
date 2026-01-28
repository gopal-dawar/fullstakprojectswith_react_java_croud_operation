  import axios from "axios";

  const API_URL = "http://localhost:8080/student";

  export const addStudent = async (student) => {
    const re = await axios.post(`${API_URL}/save`, student);
    return re.data;
  };

  export const studentlist = async () => {
    const re = await axios.get(`${API_URL}/view`);
    return re;
  };

  export const updateById = async (id, student) => {
    const re = await axios.put(`${API_URL}/update/${id}`, student);
    return re.data;
  };

  export const getById = async (id) => {
    const re = await axios.get(`${API_URL}/getById/${id}`);
    return re.data;
  };

  export const removeStudent = async (id) => {
    const re = await axios.delete(`${API_URL}/delete/${id}`);
    return re.data;
  };
