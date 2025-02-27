import { Outlet } from "react-router-dom";

import { Header } from "../components/header";
import Footer from "../components/Footer";

export const Layout = () => {
  return (
    <>
    <header>
        <Header/>
    </header>
      <main>
        <Outlet />
      </main>
      <footer><Footer/></footer>
    </>
  );
};
