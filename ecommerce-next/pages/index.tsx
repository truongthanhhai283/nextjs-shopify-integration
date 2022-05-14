import React from "react";
import type { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";

// 2. get all product
import getAllProducts from "@framework/product/get-all-product";

// 1. Infer get static props
export const getStaticProps = async () => {
  const config = getConfig();
  const productsList = await getAllProducts(config);

  return {
    props: {
      productsList,
    },
    revalidate: 4 * 60 * 60,
  };
};

const Home = ({
  productsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Grid>
      {productsList.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

Home.Layout = Layout;

export default Home;
