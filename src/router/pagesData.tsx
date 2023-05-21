import About from "../pages/About";
import CareInformation from "../pages/careInformation";
import Collection from "../pages/collection";
import Contact from "../pages/contact";
import Footer from "components/footer";
import Header from "components/header";
import Home from "../pages/Home";
import Product from "pages/product";
import SizeGuide from "../pages/sizeGuide";
import { staticPages } from "./staticPages";

export const pagesData = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "our-story",
    element: <About />
  },
  {
    path: "collection",
    element: <Collection />
  },
  {
    path: "collection/item/:Id",
    element: <Product />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "care-information",
    element: <CareInformation />
  },
  {
    path: "size-guide",
    element: <SizeGuide />
  },
  ...staticPages
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
