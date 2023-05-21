import PrivacyPolicy from "../pages/privacy";
import Refund from "../pages/refund";
import Terms from "../pages/terms";

export const staticPages = [
  {
    path: "refund-policy",
    element: <Refund />
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "terms",
    element: <Terms />
  }
];

