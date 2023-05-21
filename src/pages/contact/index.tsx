import "./Contact.scss";

import blackImg from "assets/collection/black.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-page-content">
        <div className="contact-page-content-image">
          <div className="contact-page-content-image-container">
            <img src={blackImg} alt="contact-img" />
          </div>
        </div>
        <div className="contact-page-content-form">
          <h2>Hello snuggle bunny, I need help!</h2>
          <p>
            Have questions? We are here to help. Just fill in the form below,
            and we will aim to get back to you as soon as possible.
          </p>
          <p>
            Alternatively, you can email us at{" "}
            <span>snugglebunnyclothing@gmail.com</span> or write to us at{" "}
            <span>118 Broadway, London, WI3 OSY.</span>
          </p>
          <div className="contact-page-content-form-inputs">
            <input placeholder="Name" />
            <input placeholder="Email" />
          </div>
          <div className="contact-page-content-form-textbox">
            <textarea placeholder="Message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
