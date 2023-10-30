import { product } from "@/utils/product";
import React from "react";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);
  product;
  return (
    <div
      className="
    p-8
    "
    >
      <Container>
        <ProductDetails product={product}/>
      </Container>
    </div>
  );
};

export default Product;
