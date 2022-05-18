import { FC } from "react";
import Link from "next/link";

import { Container } from "@components/ui";
import { UserNav } from "@components/common";
import style from "./Navbar.module.css";

interface Props {}

const Navbar: FC<Props> = ({}) => {
  return (
    <Container>
      <div className={style.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={style.logo}>NEXT_STORE</a>
          </Link>

          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={style.link}>All</a>
            </Link>

            <Link href="/">
              <a className={style.link}>Clothes</a>
            </Link>

            <Link href="/">
              <a className={style.link}>Accesories</a>
            </Link>

            <Link href="/">
              <a className={style.link}>Shoes</a>
            </Link>
          </nav>

          <div className="flex flex-1 justify-end space-x-8">
            <UserNav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
