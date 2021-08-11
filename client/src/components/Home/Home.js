import React, { useEffect, useState } from "react";
import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCustomers,
  deleteCustomer,
  editCustomer,
} from "../../actions/customer";
import { Link } from "react-router-dom";
import moment from "moment";
import { useAlert } from "react-alert";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [refresh, setRefresh] = useState(0);
  const customers = useSelector((state) => state?.customers.customers);
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch, refresh]);

  const onDelete = (id) => {
    dispatch(deleteCustomer(id));
    setRefresh(refresh + 1);
    alert.success("Customer succsessfully deleted!", {
      timeout: 2000,
    });
  };

  function compareAsc(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  function compareDesc(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  }

  

  const sorted = (customers) => {
    if (sort === "asc-cn")
      customers.sort((a, b) => a.customernumber - b.customernumber);
    if (sort === "desc-cn")
      customers.sort((a, b) => b.customernumber - a.customernumber);
    if (sort === "asc-ll")
      customers.sort((a, b) => {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
    if (sort === "desc-ll")
      customers.sort((a, b) => {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
    if (sort === "asc-un")
      customers.sort((a, b) =>
        compareAsc(a.username.toUpperCase(), b.username.toUpperCase())
      );
    if (sort === "desc-un")
      customers.sort((a, b) =>
        compareDesc(a.username.toUpperCase(), b.username.toUpperCase())
      );
    if (sort === "asc-fn")
      customers.sort((a, b) =>
        compareAsc(a.firstname.toUpperCase(), b.firstname.toUpperCase())
      );
    if (sort === "desc-fn")
      customers.sort((a, b) =>
        compareDesc(a.firstname.toUpperCase(), b.firstname.toUpperCase())
      );
    if (sort === "asc-ln")
      customers.sort((a, b) =>
        compareAsc(a.lastname.toUpperCase(), b.lastname.toUpperCase())
      );
    if (sort === "desc-ln")
      customers.sort((a, b) =>
        compareDesc(a.lastname.toUpperCase(), b.lastname.toUpperCase())
      );

    return customers;
  };

  return (
    <div className="container">
      <div className="home">
        <div className="header">
          <h1>Milon Customers</h1>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <th className="tablehead">
                <img
                  className="sort-symbol"
                  src="https://img.icons8.com/ios-filled/20/000000/numerical-sorting-12.png"
                  alt="sort"
                  onClick={() => setSort("asc-cn")}
                />
                <span>Customer Number </span>
                <img
                  className="sort-symbol"
                  src="https://img.icons8.com/material-outlined/20/000000/numerical-sorting-21.png"
                  alt="sort"
                  onClick={() => setSort("desc-cn")}
                />
              </th>
              <th className="tablehead">
                <img
                  src="https://img.icons8.com/ios-glyphs/20/000000/alphabetical-sorting--v1.png"
                  alt="sort"
                  onClick={() => setSort("asc-un")}
                />
                <span>User Name </span>
                <img
                  src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
                  alt="sort"
                  onClick={() => setSort("desc-un")}
                />
              </th>
              <th className="tablehead">
                <img
                  src="https://img.icons8.com/ios-glyphs/20/000000/alphabetical-sorting--v1.png"
                  alt="sort"
                  onClick={() => setSort("asc-un")}
                />
                <span>First Name </span>
                <img
                  src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
                  alt="sort"
                  onClick={() => setSort("desc-fn")}
                />
              </th>
              <th className="tablehead">
                <img
                  src="https://img.icons8.com/ios-glyphs/20/000000/alphabetical-sorting--v1.png"
                  alt="sort"
                  onClick={() => setSort("asc-ln")}
                />
                <span>Last Name </span>
                <img
                  src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
                  alt="sort"
                  onClick={() => setSort("desc-ln")}
                />
              </th>
              <th className="tablehead">
                <img
                  className="sort-symbol"
                  src="https://img.icons8.com/ios-filled/20/000000/numerical-sorting-12.png"
                  alt="sort"
                  onClick={() => setSort("asc-ll")}
                />
                <span>Last Login </span>
                <img
                  className="sort-symbol"
                  src="https://img.icons8.com/material-outlined/20/000000/numerical-sorting-21.png"
                  alt="sort"
                  onClick={() => setSort("desc-ll")}
                />
              </th>
              <th>Actions</th>
            </tr>
            {sorted(customers)
              ?.filter((item) => {
                if (searchTerm == "") {
                  return item;
                } else if (
                  item.firstname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.lastname.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.email.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.customernumber
                    .includes(searchTerm)
                ) {
                  return item;
                } else if (
                  item.username.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.customernumber}</td>
                    <td>{item.username}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    {item.lastlogin ? (
                      <td>
                        {moment(item.lastlogin).format("DD/MM/YYYY HH:mm:ss")}
                      </td>
                    ) : (
                      <td>
                        {moment(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                      </td>
                    )}
                    <td className="actions">
                      <Link
                        to={`/edit/${item.id}`}
                        onClick={() => dispatch(editCustomer(item.id))}
                      >
                        <img
                          src="https://img.icons8.com/office/21/000000/edit.png"
                          alt="edit"
                        />
                      </Link>
                      <img
                        src="https://img.icons8.com/color/21/000000/delete-forever.png"
                        alt="delete"
                        onClick={() => onDelete(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
