import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by
            <a href="https://github.com/jgudo">JULIUS GUEVARRA</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img
          alt="Footer logo"
          className="footer-logo"
          src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
        />
        <h5 className="text-center">©&nbsp;2023</h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Fork this project &nbsp;
            <a href="https://github.com/jgudo/ecommerce-react">HERE</a>
          </span>
        </strong>
      </div>
    </footer>
  );
}

export default Footer;
