import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//icons
import { FaRegLightbulb, FaRocket, FaCircleCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="Services" className="DreamDesign cus_Margin_Padding">
      <Container>
        <Row className="row">
          <Col md={12} lg={6} className=" DreamDesign-card">
            <div className="gb-head">
              Designing Your Dream in Three Simple Steps
            </div>
            <div className="card-details">
              <div className="d-flex">
                <div className="icon cus-line">
                  <FaRocket />
                </div>
                <div className="card-info">
                  <div className="head">Start Project</div>
                  <div className="desc">
                    Embark on your design adventure by initiating your project.
                    Share your vision and set the stage for a bespoke design
                    experience
                  </div>
                </div>
              </div>
              <div className="d-flex mt-5">
                <div className="icon cus-line">
                  <FaRegLightbulb />
                </div>
                <div className="card-info">
                  <div className="head">Craft</div>
                  <div className="desc">
                    Collaborate closely to achieve design excellence refining
                    your vision and crafting brilliance into every aspect of
                    your space
                  </div>
                </div>
              </div>
              <div className="d-flex mt-5">
                <div className="icon">
                  <FaCircleCheck />
                </div>
                <div className="card-info">
                  <div className="head">Execute</div>
                  <div className="desc">
                    Witness your vision becoming a reality as we execute the
                    design plan with precision. Celebrate the joy of your
                  </div>
                </div>
              </div>
              <Link href="#" className="Gb-btn mt-5 d-block txtDecoration_None">
                Start Design
              </Link>
            </div>
          </Col>
          <Col md={12} lg={6} className="Image-card">
            <Image
              src="/DreamDesign.png"
              alt="DreamDesign img"
              width={700}
              height={500}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
