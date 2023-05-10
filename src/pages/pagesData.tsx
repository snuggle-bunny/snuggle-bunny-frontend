import About from "./About";
import CareInformation from "./careInformation";
import Collection from "./collection";
import Contact from "./contact";
import Footer from "components/footer";
import Header from "components/header";
import Home from "./Home";

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
    path: "contact-us",
    element: <Contact />
  },
  {
    path: "care-information",
    element: <CareInformation />
  },
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
