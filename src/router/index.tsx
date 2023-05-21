import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { pagesData } from "router/pagesData";

const Router = () => {
  const router = createBrowserRouter(pagesData);

  return <RouterProvider router={router} />;
};

export default Router;
