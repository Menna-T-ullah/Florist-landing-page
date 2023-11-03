import React from "react";
import CategoryCard from "./CategoryCard";
import { GiPorcelainVase, GiGraveFlowers, GiFlowerPot } from "react-icons/gi";
import { BsBasket3 } from "react-icons/bs";

function Categories() {
  return (
    <div className="w-full bg-pink-50 pt-24 px-10 pb-20">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] ">
        <h1 className="text-3xl font-bold leading-[37px]">
          Most <span className="text-yellow-700">Popular Categories</span>
        </h1>
        <p className="]text-lg text-gray-600">
          Each bouquet, vase, and basket is artistically created by our floral
          designers.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 py-12 gap-4">
          <CategoryCard
            icons={<GiPorcelainVase size={30} />}
            name={"Flower Vases"}
          />
          <CategoryCard
            icons={<BsBasket3 size={30} />}
            name={"Flower Bouquets"}
          />
          <CategoryCard
            icons={<GiGraveFlowers size={30} />}
            name={"Flower Baskets"}
          />
          <CategoryCard
            icons={<GiFlowerPot size={30} />}
            name={"Flower Decoration"}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
