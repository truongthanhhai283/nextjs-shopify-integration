import { FC } from "react";

import { Navbar, Footer } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";

import style from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={style.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
