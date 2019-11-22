import api from "./axios";

export const getSearchId = () => {
  return api.get("search");
};

export const getTickets = searchId => {
  return api.get("tickets", { params: { searchId } });
};
