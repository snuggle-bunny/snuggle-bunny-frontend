import "./Main.scss";

import { IMain } from "./main.types";

const Main = ({ children }: IMain) => {
  return <main>{children}</main>;
};

export default Main;
