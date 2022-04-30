import React, { useEffect } from "react";
import type { InferGetStaticPropsType } from "next";

// 2. get all product
import getAllProducts from "@framework/product/get-all-product";

// 1. Infer get static props
export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{products}</div>;
};

export default Home;
