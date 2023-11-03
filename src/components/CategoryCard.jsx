import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function CategoryCard({ icons, name }) {
  return (
    <div className="category-card bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-yellow-700 hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="text-2xl font-semibold">{name}</h1>
      </div>
      <div className="group-hover/edit:bg-yellow-700 rounded-lg p-3">
        <BsArrowUpRight size={30} className="text-yellow-700 arrow-icon" />
      </div>
    </div>
  );
}

export default CategoryCard;
