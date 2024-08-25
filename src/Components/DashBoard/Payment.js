import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Shared/Loading/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `https://manufacturer-website-server-side-oqy2.onrender.com/itemOrder/${id}`;

  const { data: orders, isLoading } = useQuery(["itemOrder", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
      },
    }).then((res) => res.json())
  );
  console.log(orders);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="hero min-h-screen bg-base-200 ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card w-50 max-w-md bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="font-bold text-success">Hello,{orders.userName}</p>
            <h2 class="card-title">Pay for: {orders.name}</h2>
            <p className="font-bold">
              Please pay:{" "}
              <span className="text-blue-500 font-bold">${orders.price}</span>
            </p>
            <p className="font-bold">
              Order Quantity:{" "}
              <span className="text-primary font-bold">${orders.quantity}</span>
            </p>
            <p className="font-bold">Your Email: {orders.email}</p>
          </div>
        </div>

        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
