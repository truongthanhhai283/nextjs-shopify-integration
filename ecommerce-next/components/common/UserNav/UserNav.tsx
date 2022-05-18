import { FC } from "react";
import Link from "next/link";

import { Bag as Cart, Heart } from "@components/icons";
import style from "./UseNav.module.css";

const UserNav: FC = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Cart />
        </li>
        <li>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default UserNav;
