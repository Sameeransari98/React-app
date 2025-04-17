import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

interface NavLinkItem {
  href: string;
  label: string;
}

interface NavigationBarProps {
  links: NavLinkItem[];
}

function NavigationBar({ links }: NavigationBarProps) {
  return (
    <Navbar className="sticky-top" expand="sm">
      <a className="navbar-brand" href="/">
        <img
          className="logo"
          src="/src/images/preview-xl-removebg-preview.webp"
          alt="Logo"
        />
      </a>
      <Nav className="ml-auto" navbar>
        {links.map((link, index) => (
          <NavItem key={index}>
            <NavLink className="main-nav" href={link.href}>
              {link.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
