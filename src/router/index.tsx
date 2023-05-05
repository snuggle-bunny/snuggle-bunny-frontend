import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { pagesData } from "pages/pagesData";

const Router = () => {
  const router = createBrowserRouter(pagesData);

  return <RouterProvider router={router} />;
};

export default Router;
