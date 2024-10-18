import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";

//icons
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <div className="col-lg-5 footer-card">
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
            <div className="info mt-5">
              Designing Your Dream With Brilliance with HomeBity design
            </div>

            <div className="socials mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=100007172563893"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/abdallhrakha/?hl=ar"
                target="_blanck"
                rel="noreferrer"
                className="icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/AbdallhSabry9"
                target="_blanck"
                data-name="Twitter"
                className="icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/+201091415560"
                target="_blanck"
                rel="noreferrer"
                data-name="WhatsApp"
              >
                <FaWhatsapp className="icon" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 footer-card">
            <div className="head">Our Services</div>
            <div className="desc mt-5">Interior design</div>
            <div className="desc">Outdoor design</div>
            <div className="desc">Lightning design</div>
            <div className="desc">Office design</div>
          </div>
          <div className="col-lg-2 footer-card">
            <div className="head">Our Services</div>
            <div className="desc mt-5">Reviews</div>
            <div className="desc">Careers</div>
            <div className="desc">Pricing</div>
            <div className="desc">Press inquires</div>
          </div>
          <div className="col-lg-3 footer-card">
            <div className="head">Our Services</div>
            <div className="desc mt-5">info@vivadecor.com</div>
            <div className="desc">
              Design Avenue Cityville, CA 90210 United States
            </div>
          </div>
        </Row>
        <hr />
        <div className="copy ">
          <div>© Homebity {new Date().getFullYear()}, All Right Reserved.</div>
          <div>
            Designed By{" "}
            <a href="https://abdallh-rakha.vercel.app/" target="_blank">
              Abdallh Sabry
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
