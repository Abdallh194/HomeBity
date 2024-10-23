import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="AboutUs ">
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="infoCard">
            <div className="work-nums d-flex">
              <div className="col text-center">
                <div className="num">+12K</div>
                <div className="name">Project Complete</div>
              </div>
              <div className="col text-center">
                <div className="num">+6K</div>
                <div className="name">Satisfied Clients </div>
              </div>
              <div className="col text-center">
                <div className="num">+7K</div>
                <div className="name">Unique Styles </div>
              </div>
              <div className="col text-center">
                <div className="num">+3K</div>
                <div className="name">Review Complete</div>
              </div>
            </div>
            <div className="triple-x">
              <span>x</span>
              <span>x</span>
              <span>x</span>
            </div>
            <div className="main-head">
              Designing Your Dream With Brilliance{" "}
              <span className="d-block">with HomeBity</span>
            </div>
            <div className="sub-head">
              Designing Your Dream in Three Simple Steps
            </div>
            <div className="info">
              Elevate your spaces with bespoke interior designs that reflect
              your unique style and aspirations, crafted with precision and
              brilliance for an unforgettable
            </div>
            <div className="">
              <Link
                href="/orderSale"
                className=" Gb-btn d-block txtDecoration_None"
              >
                Sale a House
              </Link>
              <Link
                href="/orderRent"
                className=" Gb-btn d-block txtDecoration_None"
              >
                Rent a House
              </Link>
            </div>
          </Col>
          <Col md={12} lg={6} className="ImgCard p-0">
            <Image
              src="/about.jpg"
              alt="about image"
              width={1200}
              height={5000}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
