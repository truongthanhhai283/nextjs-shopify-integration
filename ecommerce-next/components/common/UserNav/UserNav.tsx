import { FC } from "react";
import Link from "next/link";

import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";
import style from "./UseNav.module.css";

const UserNav: FC = () => {
  const { openSidebar } = useUI();
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Cart onClick={openSidebar} />
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
