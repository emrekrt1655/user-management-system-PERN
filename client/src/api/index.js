import axios from "axios";

const apiEndpoint = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchCustomers = async () => await apiEndpoint.get("/");

export const createCustomer = async (newCustomer) =>
  await apiEndpoint.post("/add", newCustomer);

export const editCustomer = async (id, updatedCustomer) =>
  await apiEndpoint.put(`/${id}/edit`, updatedCustomer);
  
export const deleteCustomer = async (id) =>
  await apiEndpoint.get(`/${id}/delete`);
