import About from "./About";
import Footer from "components/footer";
import Header from "components/header";
import Home from "./Home";

export const pagesData = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
];

pagesData.forEach((page) => {
  page.element = (
    <>
      <Header />
      {page.element}
      <Footer />
    </>
  );
});
