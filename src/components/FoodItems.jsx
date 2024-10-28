import React from "react";
import ItemCard from "./ItemCard";
import ItemData from "../data/ItemData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search)

  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {ItemData.filter((item) => {
          if (category === "All") {
            return item.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return category === item.category && item.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            rating={item.rating}
            img={item.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
