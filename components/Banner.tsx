"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

import defaultImg from "./../public/house.jpg";

import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Col } from "react-bootstrap";

export interface Hit {
  property: {
    area: number;
    baths: number;
    coverPhoto: {
      url: string;
    };
    externalID: string;
    id: number;
    isVerified: boolean;
    price: number;
    rentFrequency: string | null;
    rooms: number;
    title: string;
    tier: number;
    agency: {
      name: string;
      logo: {
        url: string;
      };
    };
    location: {
      name: string;
    }[];
    phoneNumber: {
      mobile: string;
    };
  };
}
const Banner = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
    location,
    tier,
  },
}: Hit) => {
  return (
    <Col
      as={Link}
      href={`/order/${externalID}`}
      md={12}
      lg={4}
      passHref
      className="Details-container txtDecoration_None"
    >
      <div className="img-container">
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImg}
          alt={title}
          width={500}
          height={400}
          className="img-fluid"
        />
      </div>
      <div className="house-details fw-medium">
        <div className="price">
          {isVerified && <MdVerified className="verified" />} {price}{" "}
          <span>EGP {`${rentFrequency ? "/ " + rentFrequency : ""}`}</span>
        </div>
        <div className="house-area mt-2 d-flex justify-between align-items-center">
          <span>{tier} tier</span>
          <span>
            {rooms}{" "}
            <IoBedOutline style={{ marginLeft: "4px", color: "#0db8b8" }} />
          </span>
          <span>
            {baths} <FaBath style={{ marginLeft: "4px", color: "#0db8b8" }} />
          </span>
          <div>
            Area : {area.toFixed(1)}{" "}
            <small style={{ fontSize: "12px" }}>Square Meters</small>
          </div>
        </div>
        <div className="title mt-2 fw-medium">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </div>
        <div className="location mt-2  d-flex align-items-center">
          <IoLocationOutline style={{ color: "#0db8b8" }} />{" "}
          {location.map((e) => e.name)}
        </div>

        <div className="mt-3">
          <div className="d-flex justify-between ">
            <div className="name fw-medium">
              {agency.name} {isVerified && <MdVerified className="verified" />}
            </div>
            <Image
              src={agency ? agency.logo.url : defaultImg}
              alt={title}
              width={50}
              height={50}
              className="img-fluid"
              style={{ marginTop: "-13px" }}
            />
          </div>
          {/* <div className="contacts d-flex align-items-center  ">
            <div className="icon">
              <FaPhone style={{ marginRight: "4px" }} />
            </div>
            <div className="icon">
              <IoIosMail style={{ marginRight: "4px" }} />
            </div>
            <div className="icon" data-name="WhatsApp">
              <FaWhatsapp style={{ marginRight: "4px" }} />
            </div>
          </div> */}
        </div>
        <hr className="mt-3 mb-2" />
      </div>
    </Col>
  );
};

export default memo(Banner);
