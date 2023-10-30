"use client";
import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";
import React from "react";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div
      className="grid
    grid-cols-6
    gap-2
    h-full
    max-h-[550px]
    min-h-[300px]
    sm:min-h[400px]
    "
    >
      <div
        className="
      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      border
      h-full
      gap-8
      max-h-[550px]
      min-h-[300px]
      sm:min-h[400px]
      
      "
      >
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`relative
              w-[80%]
             aspect-square
             rounded
             border-teal-400
             gap-12
                ${
                  cartProduct.selectedImg.color === image.color
                    ? "border-[1.5px]"
                    : "border-none"
                }
             `}
            >
              <Image
                src={image.image}
                alt={image.color}
                height={100}
                width={100}
                priority={true}
                className="object-contain "
              />
            </div>
          );
        })}
      </div>
      <div
        className="
      col-span-5
      relative
      aspect-square
      "
      >
        <Image
          className="
           max-h-[550px]
          min-h-[300px]
         sm:min-h[400px]
         object-contain
          "
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          height={500}
          width={500}
          priority={true}
        />
      </div>
    </div>
  );
};

export default ProductImage;
