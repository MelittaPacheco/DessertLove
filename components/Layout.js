import Nav from "./Nav";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div class=" h-100 bg-gradient-to-r from-red-300 to-white-100">
      <Nav />
      <div class="p-5 ">
        <main>
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
