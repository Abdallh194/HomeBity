"use client";
import React from "react";

import Banner from "@/components/Banner";

//Redux
import { useAppSelector } from "@/Redux/hooks";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
//Bootstrap components
import { Container, Row } from "react-bootstrap";

//icons
import { IoIosPricetags } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";

//Lottie Files
import not_found from "../../public/LottieFiles/not_found.json";
import Lottie from "lottie-react";

const Page = () => {
  //get price from link
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose");
  //Cast Type
  type House = {
    price: number;
    area: number;
    baths: number;
    coverPhoto: {
      url: string;
    };
    externalID: string;
    id: number;
    isVerified: boolean;
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

  //Get Data From Redux
  const { SaleHouse } = useAppSelector(
    (s: { Sale: { SaleHouse: House[] } }) => s.Sale
  );
  const { RentHouse } = useAppSelector(
    (s: { Rent: { RentHouse: House[] } }) => s.Rent
  );
  const { fromsale } = useAppSelector((s) => s.Global);

  //convert from string to number
  let purposeValue = "0";
  if (purpose) {
    purposeValue = purpose;
  }

  const ResultSale = SaleHouse.filter((e) => e.price < parseInt(purposeValue));
  const ResultRent = RentHouse.filter((e) => e.price < parseInt(purposeValue));
  return (
    <div className="Search">
      <div className="head d-flex align-items-center justify-center">
        Search Result By Price <IoIosPricetags style={{ marginLeft: "5px" }} />{" "}
      </div>
      <Container>
        <div className="d-lg-flex d-md-block  mt-4 align-items-center justify-between">
          <div className="sale-head text-center fw-medium">
            House Availabe for {fromsale} at price ${purpose}
          </div>
          <Link
            href="/order"
            className="backBtn d-flex align-items-center justify-center txtDecoration_None"
          >
            Search at different price{" "}
            <RiArrowGoBackFill style={{ marginLeft: "5px" }} />
          </Link>
        </div>
        <Row className="mt-4">
          {fromsale == "Sale" ? (
            ResultSale.length > 0 ? (
              ResultSale.map((property) => (
                <Banner property={property} key={property.id} />
              ))
            ) : (
              <div className="no-house">
                <Lottie animationData={not_found} className="animation" />
                <div className="error-head">
                  There are no houses for Sale at price {purposeValue}$
                  unfortunately. Try to raise the price a little.
                </div>
              </div>
            )
          ) : ResultRent.length > 0 ? (
            ResultRent.map((property) => (
              <Banner property={property} key={property.id} />
            ))
          ) : (
            <div className="no-house">
              <Lottie animationData={not_found} className="animation" />
              <div className="error-head">
                There are no houses for Rent at price {purposeValue}$
                unfortunately. Try to raise the price a little.
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Page;
