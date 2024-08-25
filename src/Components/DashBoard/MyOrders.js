import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/itemOrder/${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete ?");
    if (proceed) {
      const url = `http://localhost:5000/itemOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const uiDelete = orders.filter((item) => item._id !== id);
          setOrders(uiDelete);
          toast("Success Fully deleted product");
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl font-bold text-purple-500 text-center py-5">
        Welcome to Your DashBoard
      </h2>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Email</th>
            <th>Quantity</th>
            <th>payment</th>
            <th>Edits</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.quantity}</td>

              <td>
                {order.price && !order.paid && (
                  <Link to={`/dashBoard/payment/${order._id}`}>
                    <button className="btn btn-primary btn-xs">Pay</button>
                  </Link>
                )}
                {order.price && order.paid && (
                  <span className="text-primary">Paid</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-error text-white btn-sm"
                  onClick={() => handleDelete(order._id)}
                >
                  cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
