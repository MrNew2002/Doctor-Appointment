import Header from "../compoments/Header/Header";

import Footer from "../compoments/Footer/Footer";

import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
