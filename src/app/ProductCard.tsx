"use client";
import React, { FC } from "react";
import Image from "next/image";

import { urlForImage } from "../../sanity/lib/image";

const ProductCard: FC<{ item: any }> = ({ item }) => {
  const handleAddtoCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id: item._id }),
    });

    const result = await res.json();
  };
  return (
    <div>
      <Image
        className="max-h-[200px] object-cover object-top"
        width={300}
        height={300}
        src={urlForImage(item.image).url()}
        alt={item?.title}
      />
      <h2>{item.title}</h2>
      <h3>${item.price}</h3>
      <button
        onClick={handleAddtoCart}
        className="border rounded py-2 px-6 bg-blue-500 text-white "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
