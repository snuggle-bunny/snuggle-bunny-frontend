import "./Footer.scss";

import {
  FaCcAmex,
  FaCcApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaTwitter
} from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { footerData } from "data/footerData";

const Footer = () => {
  const footerLinks = footerData.map(({ link, title }) => (
    <div className="footer-link" key={title}>
      <Link to={`/${link}`}>{title}</Link>
    </div>
  ));

  return (
    <footer>
      <div className="footer-links-container">{footerLinks}</div>
      <div className="footer-icons">
        <div className="footer-icons-payments">
          <FaCcVisa size="30px" className="footer-icons-payments-icon" />
          <FaCcAmex size="30px" className="footer-icons-payments-icon" />
          <FaCcMastercard size="30px" className="footer-icons-payments-icon" />
          <FaCcApplePay size="30px" className="footer-icons-payments-icon" />
          <FaCcDiscover size="30px" className="footer-icons-payments-icon" />
        </div>
        <div className="footer-icons-socials">
          <FaTwitter size="30px" className="footer-icons-socials-icon" />
          <AiFillInstagram size="30px" className="footer-icons-socials-icon" />
        </div>
      </div>
      <div className="footer-copyright">© 2021, Snuggle Bunny</div>
    </footer>
  );
};

export default Footer;
