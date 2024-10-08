import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [items, setItems] = useState({});
  // console.log(items);

  const [user] = useAuthState(auth);

  // load oneItem
  useEffect(() => {
    const url = `https://manufacturer-website-server-side-oqy2.onrender.com/itemPurchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items, purchaseId]);

  // submit
  const handleNewItem = (event) => {
    event.preventDefault();
    const addOrder = {
      email: user.email,
      userName: user.displayName,
      name: items.name,
      price: items.price,
      quantity: event.target.quantity.value,
      address: event.target.address.value,
      phon: event.target.phon.value,
    };
    console.log(addOrder);

    if (event.target.quantity.value < items.minimumOrder) {
      toast.error(
        "The order quantity can not be Minimum than the available quantity."
      );
    } else if (event.target.quantity.value >= items.availableQuantity) {
      // post
      toast.error(
        "The order quantity can not be higher than the available quantity."
      );
    } else {
      const url = `https://manufacturer-website-server-side-oqy2.onrender.com/itemOrder`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Successful Item added");
          event.target.reset();
        });
    }
    console.log(addOrder);
  };

  return (
    <div>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="px-16">
            <div className="card w-full   bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-4xl font-bold text-primary py-4 text-center ">
                  Product Information
                </h3>
                <h2 className="text-xl pb-2 font-bold">
                  Name: <small className="text-primary">{items.name}</small>
                </h2>
                <p className="text-base">{items.description}</p>
                <h5 className="text-lg">
                  Price: BDT{" "}
                  <span className="text-sky-600">{items.price}/pcs</span>
                </h5>
                <h5 className="text-xl">
                  Available Quantity: <span>{items.availableQuantity}</span>
                </h5>
                <h5 className="text-xl">
                  Minimum Quantity: <span>{items.minimumOrder}</span>
                </h5>
              </div>
            </div>
            <div className="card w-full mt-12 bg-base-100 shadow-xl ">
              <div className="card-body ">
                <h2 className="text-2xl font-bold pb-2 text-center text-primary">
                  Order Confirm
                </h2>
                <div className="lg:pl-14">
                  {/* from */}
                  <form onSubmit={handleNewItem}>
                    {/* quantity */}
                    <div className="pl-20">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text font-bold pl-10 text-primary">
                            Quantity
                          </span>
                        </label>

                        <input
                          required
                          type="number"
                          name="quantity"
                          placeholder="Quantity"
                          className="mb-3 input input-bordered w-36  max-w-xs"
                        />
                      </div>
                    </div>
                    {/* name  */}
                    <div className="form-control pb-3 text-center w-full max-w-xs">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        readOnly
                        value={user.displayName}
                        className="input input-bordered w-full max-w-md "
                      />
                    </div>
                    {/* email */}
                    <div className="form-control pb-3 text-center w-full max-w-xs">
                      <input
                        type="email"
                        value={user.email}
                        readOnly
                        name="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    {/* address  */}
                    <div className="form-control pb-3 text-center w-full max-w-xs">
                      <input
                        type="text"
                        autoComplete="off"
                        name="address"
                        required
                        placeholder="Address"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    {/* phone  */}
                    <div className="form-control pb-3 text-center w-full max-w-xs">
                      <input
                        type="text"
                        required
                        autoComplete="off"
                        name="phon"
                        placeholder="Phone Number"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>

                    <input
                      type="submit"
                      className="sm:w-56 ml-8 w-8/12 text-center btn btn-primary"
                      value="Submit Information"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <img className="w-6/12 " src={items.img} />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
