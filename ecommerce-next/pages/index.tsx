import React from "react";
import type { InferGetStaticPropsType } from "next";

// 2. get all product
import getAllProducts from "@framework/product/get-all-product";

// 1. Infer get static props
export const getStaticProps = async () => {
  const productsList = await getAllProducts();
  const allProducts = JSON.stringify(productsList);

  return {
    props: {
      allProducts,
    },
    revalidate: 4 * 60 * 60,
  };
};

const Home = ({
  allProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{allProducts}</div>;
};

export default Home;
