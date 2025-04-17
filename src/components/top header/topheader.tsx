import "font-awesome/css/font-awesome.min.css";
import React from "react";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "#", label: "facebook-f" },
  { href: "#", label: "linkedin" },
  { href: "#", label: "instagram" },
  { href: "#", label: "youtube" },
  { href: "#", label: "x-twitter" },
  // Add more links as needed
];

const TopHeader: React.FC = () => (
  <div className="social-icons-row">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 contact-icons">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <a href="tel:+1 123 456 7890">+1 123 456 7890</a>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <a href="mailto:abc@gmail.com">abc@gmail.com</a>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 social-icons">
          {links.map((link: Link, index: number) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`fa-brands fa-${link.label.toLowerCase()}`}
                aria-hidden="true"
              ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TopHeader;
