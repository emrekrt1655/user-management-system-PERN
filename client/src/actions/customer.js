import * as api from "../api/index";
import * as types from "./types";

export const fetchCustomers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCustomers();
    dispatch({
      type: types.FETCH_CUSTOMERS,
      payload: data,
    });
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const createCustomer = (customer) => async (dispatch) => {
  try {
    const { data } = await api.createCustomer(customer);
    dispatch({ type: types.CREATE_CUSTOMER, payload: data });
  } catch (error) {
    console.log(`error`, error.message);
  }
};

export const editCustomer = (id, customer) => async (dispatch) => {
  try {
    const { data } = await api.editCustomer(id, customer);
    dispatch({ type: types.EDIT_CUSTOMER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await api.deleteCustomer(id);

    dispatch({ type: types.DELETE_CUSTOMER, payload: id });
  } catch (error) {
    console.log(error);
  }
};
