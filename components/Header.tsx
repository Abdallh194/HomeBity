"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className="Header">
      <Container>
        <Row>
          <Col md={12} lg={6} className="InfoCard">
            <div className="main-head">
              Finding Your <span className="wo1">Choise</span>{" "}
              <span style={{ color: "#008fa3" }}>Elegant</span>{" "}
              <span className="wo2">House</span>
              <div className="line"></div>
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              id quidem eos minus aspernatur reiciendis qui nemo ex, magnam
              suscipit quae rem repellendus ullam veniam animi quisquam. Vel,
              odit provident!
            </div>
            <a
              href="#AboutUs"
              className="Gb-btn d-block text-decoration-none mt-5"
            >
              Get Started
            </a>
          </Col>
          <Col md={12} lg={6} className="ImgCard">
            <div className="img-container">
              <Image
                src="/house.jpg"
                alt="house"
                width={900}
                height={900}
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
