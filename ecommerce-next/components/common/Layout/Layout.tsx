import { FC } from "react";

import { Navbar, Footer } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

import style from "./Layout.module.css";
import { ApiProvider } from "@framework";

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <ApiProvider>
      <div className={style.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
