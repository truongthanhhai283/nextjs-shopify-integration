import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./ProductCard.module.css";
interface Props {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <a className={style.root}>
          <div className={style.productBg}></div>
          <div className={style.productTag}>
            <h3 className={style.productTitle}>
              <span>{product.name}</span>
            </h3>
            <span className={style.productPrice}>86$</span>
          </div>
          <div>
            {product.images && (
              <Image
                alt={product.name ?? "Product image"}
                src={product.images[0].url ?? placeholderImage}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
              />
            )}
          </div>
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
