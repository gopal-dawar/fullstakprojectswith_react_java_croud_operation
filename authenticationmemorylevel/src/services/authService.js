import api from "../api";

export const getHomeData = () => {
  return api.get("/Admin");
};
