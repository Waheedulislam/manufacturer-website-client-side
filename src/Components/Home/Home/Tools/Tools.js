import React, { useEffect, useState } from "react";
import PerTools from "./PerTools";

const Tools = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `https://manufacturer-website-server-side-oqy2.onrender.com/item`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 6));
      });
  }, []);
  return (
    <div className="my-12 ">
      <h1 className="text-center text-4xl font-bold text-primary">
        Tools: {items.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-3 gap-5 ">
        {items.map((item) => (
          <PerTools key={item._id} item={item}></PerTools>
        ))}
      </div>
    </div>
  );
};

export default Tools;
