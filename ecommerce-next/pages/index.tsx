import React from "react";
import type { InferGetStaticPropsType } from "next";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
import { Hero } from "@components/ui";
import { Marquee } from "@components/ui";

// 2. get all product
import { getAllProducts } from "@framework/product";

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
    <>
      <Grid>
        {productsList.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Tootsie roll wafer pie gingerbread bonbon apple pie ice cream. Marzipan ice cream chocolate caramels chocolate chocolate bar tootsie roll. Wafer jelly toffee jelly-o cake wafer cotton candy pastry oat cake. Danish dragée toffee oat cake biscuit chocolate brownie. Jujubes sweet icing candy sweet roll gummies topping. Marshmallow donut pastry cookie pudding. Tootsie roll tootsie roll oat cake liquorice marzipan liquorice marzipan. Gummies muffin wafer candy canes cupcake cupcake shortbread tootsie roll. Dessert macaroon pastry chupa chups topping pastry icing liquorice. Macaroon gummies sugar plum cheesecake liquorice. Bear claw pudding gummi bears candy sweet roll gummi bears. Pastry bonbon jelly beans tart topping pastry."
      />
      <Marquee variant="primary">
        {productsList.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>

      <Grid layout="B">
        {productsList.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <Marquee variant="secondary">
        {productsList.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </>
  );
};

Home.Layout = Layout;

export default Home;
