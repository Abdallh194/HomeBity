"use client";

import Banner from "@/components/Banner";
import { useAppSelector } from "@/Redux/hooks";
import Lottie from "lottie-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { IoIosPricetags } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import not_found from "../../public/LottieFiles/not_found.json";
const Page = () => {
  //get price from link
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose");

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

  const { SaleHouse } = useAppSelector(
    (s: { Sale: { SaleHouse: House[] } }) => s.Sale
  );
  const { RentHouse } = useAppSelector(
    (s: { Rent: { RentHouse: House[] } }) => s.Rent
  );

  const { fromsale } = useAppSelector((s) => s.Global);

  // const SaleHouse = [
  //   {
  //     id: 4652713,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
  //     },
  //     price: 2500000,
  //     tier: 4,
  //     rentFrequency: null,
  //     rooms: 1,
  //     title: "Last day offer | Best Location | Family - Oriented",
  //     baths: 2,
  //     area: 53.419248,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "7659641",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971547922720",
  //     },
  //   },
  //   {
  //     id: 5832274,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
  //     },
  //     price: 300000,
  //     rentFrequency: null,
  //     rooms: 0,
  //     title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
  //     baths: 1,
  //     area: 41.89927104,
  //     tier: 4,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "8862936",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971588245496",
  //     },
  //   },
  //   {
  //     id: 4652713,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
  //     },
  //     price: 1200000,
  //     tier: 4,
  //     rentFrequency: null,
  //     rooms: 1,
  //     title: "Last day offer | Best Location | Family - Oriented",
  //     baths: 2,
  //     area: 53.419248,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "7659641",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971547922720",
  //     },
  //   },
  //   {
  //     id: 5832274,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
  //     },
  //     price: 3999,
  //     rentFrequency: null,
  //     rooms: 0,
  //     title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
  //     baths: 1,
  //     area: 41.89927104,
  //     tier: 4,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "8862936",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971588245496",
  //     },
  //   },
  //   {
  //     id: 4652713,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
  //     },
  //     price: 11999,
  //     tier: 4,
  //     rentFrequency: null,
  //     rooms: 1,
  //     title: "Last day offer | Best Location | Family - Oriented",
  //     baths: 2,
  //     area: 53.419248,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "7659641",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971547922720",
  //     },
  //   },
  //   {
  //     id: 5832274,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
  //     },
  //     price: 3999,
  //     rentFrequency: null,
  //     rooms: 0,
  //     title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
  //     baths: 1,
  //     area: 41.89927104,
  //     tier: 4,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "8862936",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971588245496",
  //     },
  //   },
  // ];
  // const RentHouse = [
  //   {
  //     id: 4652713,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
  //     },
  //     price: 11999,
  //     tier: 4,
  //     rentFrequency: "monthly",
  //     rooms: 1,
  //     title: "Last day offer | Best Location | Family - Oriented",
  //     baths: 2,
  //     area: 53.419248,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "7659641",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971547922720",
  //     },
  //   },
  //   {
  //     id: 5832274,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
  //     },
  //     price: 3999,
  //     rentFrequency: "monthly",
  //     rooms: 0,
  //     title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
  //     baths: 1,
  //     area: 41.89927104,
  //     tier: 4,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "8862936",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971588245496",
  //     },
  //   },
  //   {
  //     id: 4652713,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
  //     },
  //     price: 11999,
  //     tier: 4,
  //     rentFrequency: "monthly",
  //     rooms: 1,
  //     title: "Last day offer | Best Location | Family - Oriented",
  //     baths: 2,
  //     area: 53.419248,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "7659641",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971547922720",
  //     },
  //   },
  //   {
  //     id: 5832274,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
  //     },
  //     price: 3999,
  //     rentFrequency: "monthly",
  //     rooms: 0,
  //     title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
  //     baths: 1,
  //     area: 41.89927104,
  //     tier: 4,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "8862936",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971588245496",
  //     },
  //   },
  //   {
  //     id: 4652713,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
  //     },
  //     price: 11999,
  //     tier: 4,
  //     rentFrequency: "monthly",
  //     rooms: 1,
  //     title: "Last day offer | Best Location | Family - Oriented",
  //     baths: 2,
  //     area: 53.419248,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "7659641",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971547922720",
  //     },
  //   },
  //   {
  //     id: 5832274,
  //     coverPhoto: {
  //       url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
  //     },
  //     price: 3999,
  //     rentFrequency: "monthly",
  //     rooms: 0,
  //     title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
  //     baths: 1,
  //     area: 41.89927104,
  //     tier: 4,
  //     agency: {
  //       name: "Vivid Realty Real Estate",
  //       logo: {
  //         url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
  //       },
  //     },
  //     isVerified: true,
  //     externalID: "8862936",
  //     location: [
  //       {
  //         name: "UAE",
  //       },
  //     ],
  //     phoneNumber: {
  //       mobile: "+971588245496",
  //     },
  //   },
  // ];
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
