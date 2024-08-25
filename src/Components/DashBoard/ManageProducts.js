import { useEffect, useState } from "react";
import ManagePerOrders from "./ManagePerOrders";

const ManageProducts = () => {
  const [reload, setReload] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `https://manufacturer-website-server-side-oqy2.onrender.com/item`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [reload]);

  return (
    <div className="my-12 ">
      <h1 className="text-center text-4xl font-bold text-primary">
        Tools: {items.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-2 gap-5 ">
        {items.map((item) => (
          <ManagePerOrders
            key={item._id}
            reload={reload}
            setReload={setReload}
            item={item}
          ></ManagePerOrders>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
