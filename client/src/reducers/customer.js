import * as types from "../actions/types";

const customerReducer = (customers = [], action) => {
  switch (action.type) {
    case types.FETCH_CUSTOMERS:
      return action.payload;

    case types.CREATE_CUSTOMER:
      return [...customers, action.payload];

    case types.DELETE_CUSTOMER:
      return {
        ...customers,
        customers: customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    case types.EDIT_CUSTOMER:
      return customers.map((customer) =>
        customer.id === action.payload.id ? action.payload : customer
      );

    default:
      return customers;
  }
};

export default customerReducer;
