import React from "react";

interface FooterProps {
  columns: {
    title: string;
    links: { href: string; text: string }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ columns }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 footer-column-1 text-start">
            <img src="/src/images/preview-xl-removebg-preview.png" alt="" />
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {columns.map((column, index) => (
            <div
              key={index}
              className=" col-lg-3 col-md-3 col-sm-6 footer-column"
            >
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
