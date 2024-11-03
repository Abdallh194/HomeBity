"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import React, { memo, useEffect } from "react";
import { GetHouseDetails } from "@/Redux/features/GbSlice";
import { Col, Container, Row } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { IoArrowForward, IoBedOutline } from "react-icons/io5";
import { FaBath, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { MdNotListedLocation, MdVerified } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Footer from "@/components/common/Footer";
import Lottie from "lottie-react";
import loader from "../../../public/LottieFiles/loader.json";
import Link from "next/link";
const HouseDetailsComponent = ({ params }) => {
  const { HouseDetails, loading, error } = useAppSelector(
    (state) => state.Global
  );

  const dispatch = useAppDispatch();
  const { id } = params;

  useEffect(() => {
    dispatch(GetHouseDetails(id));
  }, [id, dispatch]);

  if (loading === "pending") {
    return (
      <div>
        <Lottie
          style={{ maxWidth: "200px", margin: "auto" }}
          animationData={loader}
        />{" "}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!HouseDetails || HouseDetails.message) {
    return <div>No House Details Available</div>;
  }

  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    furnishingStatus,
    location,
    photos,
    type,
    purpose,
    completionStatus,
    createdAt,
    amenities,
    phoneNumber,
  } = HouseDetails;
  const date = new Date(createdAt * 1000);
  console.log("rerender [id]");

  return (
    <div className="HouseDetails">
      <div className="head">Explore Your New Home For Sale or Rent</div>
      <Container>
        <Row className="cusmt">
          <Col md={12} lg={6}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {photos.map((e, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={e.url}
                    alt=""
                    width={800}
                    height={800}
                    className="img-fluid"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-4">
              <h5>Added By</h5>
              <div className="d-flex justify-between ">
                <div className="name fw-medium">
                  {agency.name}{" "}
                  {isVerified && <MdVerified className="verified" />}
                </div>
                <Image
                  src={agency.logo.url}
                  alt={title}
                  width={80}
                  height={80}
                  className="img-fluid"
                  style={{ marginTop: "-10px" }}
                />
              </div>
              <div className="contacts d-flex align-items-center">
                <a
                  href={`tel:${phoneNumber.mobile}`}
                  target="_blnck"
                  className="icon"
                >
                  <FaPhone style={{ marginRight: "4px" }} /> Call
                </a>
                <a href="mailto:AbdallhSabry194@gmail.com" className="icon">
                  <IoIosMail style={{ marginRight: "4px" }} /> Email
                </a>
                <a
                  href={`https://wa.me/${phoneNumber.mobile}`}
                  className="icon"
                >
                  <FaWhatsapp style={{ marginRight: "4px" }} /> WhatsApp
                </a>
              </div>
              <Link
                href={`/agency/${agency.externalID}`}
                className="name fw-medium d-block text-black mt-3"
              >
                View all agency properties{" "}
                <IoArrowForward style={{ display: "inline-block" }} />
              </Link>
            </div>
          </Col>
          <Col md={12} lg={6} className="house-details-card">
            <div className="price">
              {isVerified && <MdVerified className="verified" />} {price}{" "}
              <span>EGP {`${rentFrequency ? "/ " + rentFrequency : ""}`}</span>
            </div>
            <div className="house-area mt-3 d-flex justify-between align-items-center">
              <span>
                <IoBedOutline
                  style={{ marginRight: "3px", color: "#0db8b8" }}
                />
                {rooms} Rooms
              </span>
              <span>
                <FaBath style={{ marginRight: "3px", color: "#0db8b8" }} />
                {baths} Baths
              </span>
              <div className="r">
                <FaChartArea
                  style={{
                    marginRight: "5px",
                    color: "#0db8b8",
                    display: "inline",
                  }}
                />
                Area : {area.toFixed(1)}{" "}
                <small style={{ fontSize: "12px" }}> Square Meters</small>
              </div>
            </div>
            <div className="title mt-3 fw-medium">
              {title.length > 60 ? `${title.substring(0, 60)}...` : title}
            </div>
            <div className="desc mt-3">
              {description.length > 250
                ? `${description.substring(0, 250)}...`
                : description}
            </div>
            <div className="location mt-3">
              <MdNotListedLocation style={{ display: "inline" }} /> Locations :{" "}
              {location.slice(0, 3).map((e, idx) => (
                <span key={idx}>{e.name}</span>
              ))}
            </div>
            {amenities.map((group, idx) => (
              <div key={idx} className="mt-3 amenities">
                <div className="amenti">{group.text}</div>
                {group.amenities.map((amenity, subIdx) => (
                  <span key={subIdx}>{amenity.text}</span>
                ))}
              </div>
            ))}
            <Row className="mt-3">
              <Col lg={6} className="property">
                {type && (
                  <>
                    <div>Type : </div> <span>{type}</span>
                  </>
                )}
              </Col>
              <Col lg={6} className="property">
                {purpose && (
                  <>
                    <div>Purpose : </div> <span>{purpose}</span>
                  </>
                )}
              </Col>
              <Col lg={6} className="property">
                {completionStatus && (
                  <>
                    <div>Completion : </div> <span>{completionStatus}</span>
                  </>
                )}
              </Col>
              <Col lg={6} className="property">
                {furnishingStatus && (
                  <>
                    <div>Finishing : </div> <span>{furnishingStatus}</span>
                  </>
                )}
              </Col>
              <Col lg={6} className="property">
                {createdAt && (
                  <>
                    <div>Added on : </div>{" "}
                    <span>{date.toLocaleString().slice(0, 10)}</span>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default memo(HouseDetailsComponent);
