"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import loader from "../../../public/LottieFiles/loader.json";
import { GetAgencyDetails } from "@/Redux/features/AgencySlice";
import Banner from "@/components/Banner";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
const Page = ({ params }) => {
  const { id } = params;
  const { AgencyHouse, loading, error } = useAppSelector(
    (state) => state.Agency
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetAgencyDetails(id));
  }, [id, dispatch]);
  console.log(AgencyHouse);

  if (loading === "pending") {
    return (
      <div>
        <Lottie
          style={{ maxWidth: "200px", margin: "auto" }}
          animationData={loader}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="AgencyHouse">
      <div className="top-head">
        <Container className="h-100 ">
          {AgencyHouse.slice(0, 1).map((property, idx) => (
            <div
              key={idx}
              className="h-100 d-flex align-items-center justify-center position-relative"
            >
              <div className="logo">
                <Image
                  src={property.agency.logo.url}
                  alt={property.title}
                  width={220}
                  height={300}
                  className="img-fluid"
                />
              </div>
              <div className="agency-name">
                {property.agency.name}{" "}
                <FaRegCheckCircle
                  style={{ display: "inline-block", marginTop: "-13px" }}
                />
              </div>
            </div>
          ))}
        </Container>
      </div>

      <Container>
        <Row>
          {AgencyHouse.map((property) => (
            <>
              <Banner property={property} key={Math.random() * 10} />
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Page;
