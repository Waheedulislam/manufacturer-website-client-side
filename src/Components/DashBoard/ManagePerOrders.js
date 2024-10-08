import React from "react";
import { toast } from "react-toastify";

const ManagePerOrders = ({ item, reload, setReload }) => {
  const { img, name, description, minimumOrder, availableQuantity, price } =
    item;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete ?");
    if (proceed) {
      const url = `https://manufacturer-website-server-side-oqy2.onrender.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
          toast("Success Fully Product Delete");
        });
    }
  };

  return (
    <div>
      <div className="card card-compacts bg-base-100 shadow-xl">
        <figure>
          <img className="h-44" src={img} alt="Shoes" />
        </figure>
        <div className="card-body my-5">
          <h2 className="text-2xl  font-bold">{name}</h2>
          <p className="text-base">{description.slice(0, 50) + "..."}</p>
          <h5 className="text-lg">
            Price: BDT <span className="text-sky-600">{price}/pcs</span>
          </h5>
          <h5 className="text-xl">
            Available Quantity: <span>{availableQuantity}</span>
          </h5>
          <h5 className="text-xl">
            Minimum Quantity: <span>{minimumOrder}</span>
          </h5>
          <div className="card-actions justify-center">
            <button
              className=" btn btn-error w-full"
              onClick={() => handleDelete(item._id)}
            >
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePerOrders;
