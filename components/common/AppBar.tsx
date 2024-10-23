"use client";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Container style={{ maxWidth: "1750px" }}>
        <Link
          href="/"
          className="logo d-flex align-items-center txtDecoration_None"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={30}
            className="img-fluid"
          />
          Homebity
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <NavLink className="link" href="#">
              Home
            </NavLink>
            <NavLink className="link" href="#AboutUs">
              About Us
            </NavLink>
            <NavLink className="link" href="#Services">
              Service
            </NavLink>
            <NavLink className="link" href="/#ContactUs">
              Contact
            </NavLink>
          </Nav>

          <Nav className="RequestBtn">
            <Link className="Gb-btn txtDecoration_None" href="/order">
              Quick Request
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
