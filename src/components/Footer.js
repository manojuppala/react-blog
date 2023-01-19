import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright text-center text-secondary py-3">
        <div className="container text-center">
          <a
            href="https://github.com/manojuppala"
            target="_blank"
            rel="noopener noreferrer"
            className="h5 pr-3 text-secondary"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/manojuppala/"
            target="_blank"
            rel="noopener noreferrer"
            className="h5 pr-3 text-secondary"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://youtube.com/thedataguy"
            target="_blank"
            rel="noopener noreferrer"
            className="h5 pr-3 text-secondary"
          >
            <i className="fa fa-youtube"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/11874811/manoj"
            target="_blank"
            rel="noopener noreferrer"
            className="h5 pr-3 text-secondary"
          >
            <i className="fa fa-stack-overflow"></i>
          </a>
        </div>
        <span className="text-muted meta-data">
          {" "}
          © 2022 Copyright: <a href="https://manojuppala.ml/">manojuppala.com</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
