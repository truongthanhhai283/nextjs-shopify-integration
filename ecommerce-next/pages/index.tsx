import React from "react";
import type { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";

// 2. get all product
import getAllProducts from "@framework/product/get-all-product";

// 1. Infer get static props
export const getStaticProps = async () => {
  const config = getConfig();
  const productsList = await getAllProducts(config);
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
  return <>{allProducts}</>;
};

Home.Layout = Layout;

export default Home;
