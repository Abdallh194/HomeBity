"use client";
import Banner from "@/components/Banner";
import { GetDataRent } from "@/Redux/features/RentSlice";
import { GetSale } from "@/Redux/features/SaleSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import React, {
  useEffect,
  useRef,
  useState, //
} from "react";
import { Alert, Container, Form, FormControl, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { HandleSearchResult } from "@/Redux/features/GbSlice";
import MyLoader from "@/components/Skelton/HouseSkelton";

const Order = () => {
  const SaleHouse = [
    {
      id: 4652713,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
      },
      price: 2500000,
      tier: 4,
      rentFrequency: null,
      rooms: 1,
      title: "Last day offer | Best Location | Family - Oriented",
      baths: 2,
      area: 53.419248,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "7659641",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
      },
    },
    {
      id: 5832274,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
      },
      price: 300000,
      rentFrequency: null,
      rooms: 0,
      title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
      baths: 1,
      area: 41.89927104,
      tier: 4,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "8862936",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971588245496",
      },
    },
    {
      id: 4652713,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
      },
      price: 1200000,
      tier: 4,
      rentFrequency: null,
      rooms: 1,
      title: "Last day offer | Best Location | Family - Oriented",
      baths: 2,
      area: 53.419248,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "7659641",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
      },
    },
    {
      id: 5832274,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
      },
      price: 3999,
      rentFrequency: null,
      rooms: 0,
      title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
      baths: 1,
      area: 41.89927104,
      tier: 4,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "8862936",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971588245496",
      },
    },
    {
      id: 4652713,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
      },
      price: 11999,
      tier: 4,
      rentFrequency: null,
      rooms: 1,
      title: "Last day offer | Best Location | Family - Oriented",
      baths: 2,
      area: 53.419248,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "7659641",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
      },
    },
    {
      id: 5832274,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
      },
      price: 3999,
      rentFrequency: null,
      rooms: 0,
      title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
      baths: 1,
      area: 41.89927104,
      tier: 4,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "8862936",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971588245496",
      },
    },
  ];

  const RentHouse = [
    {
      id: 4652713,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
      },
      price: 11999,
      tier: 4,
      rentFrequency: "monthly",
      rooms: 1,
      title: "Last day offer | Best Location | Family - Oriented",
      baths: 2,
      area: 53.419248,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "7659641",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
      },
    },
    {
      id: 5832274,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
      },
      price: 3999,
      rentFrequency: "monthly",
      rooms: 0,
      title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
      baths: 1,
      area: 41.89927104,
      tier: 4,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "8862936",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971588245496",
      },
    },
    {
      id: 4652713,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
      },
      price: 11999,
      tier: 4,
      rentFrequency: "monthly",
      rooms: 1,
      title: "Last day offer | Best Location | Family - Oriented",
      baths: 2,
      area: 53.419248,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "7659641",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
      },
    },
    {
      id: 5832274,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
      },
      price: 3999,
      rentFrequency: "monthly",
      rooms: 0,
      title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
      baths: 1,
      area: 41.89927104,
      tier: 4,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "8862936",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971588245496",
      },
    },
    {
      id: 4652713,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
      },
      price: 11999,
      tier: 4,
      rentFrequency: "monthly",
      rooms: 1,
      title: "Last day offer | Best Location | Family - Oriented",
      baths: 2,
      area: 53.419248,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "7659641",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
      },
    },
    {
      id: 5832274,
      coverPhoto: {
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/718755271/f80cb2b20905402a84f9bce417ab699a",
      },
      price: 3999,
      rentFrequency: "monthly",
      rooms: 0,
      title: "FULLY FURNISHED STUDIO || READY TO MOVE IN || CALL US NOW",
      baths: 1,
      area: 41.89927104,
      tier: 4,
      agency: {
        name: "Vivid Realty Real Estate",
        logo: {
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/596601613/bd94157114a04faca77b1c3938499534",
        },
      },
      isVerified: true,
      externalID: "8862936",
      location: [
        {
          name: "UAE",
        },
      ],
      phoneNumber: {
        mobile: "+971588245496",
      },
    },
  ];

  // const { SaleHouse } = useAppSelector((s) => s.Sale);
  // const { RentHouse } = useAppSelector((s) => s.Rent);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  // dispatch(GetSale());
  // dispatch(GetDataRent());
  // }, [dispatch]);
  // console.log("Sale", SaleHouse);
  // console.log("Rent", RentHouse);
  console.log("renrender");

  // catch search term
  const inputRefSale = useRef<HTMLInputElement>(null);
  const inputRefRent = useRef<HTMLInputElement>(null);
  const [inputValueError, setinputValueError] = useState(false);
  const [inputValueErrorRent, setinputValueErrorRent] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    if (inputRefSale.current?.value && inputRefSale.current.value.length > 0) {
      setinputValueError(false);
      const inputValue = inputRefSale.current.value;
      dispatch(HandleSearchResult("Sale"));
      router.push(`/search?purpose=${inputValue}`);
    } else {
      setinputValueError(true);
    }
  };
  const handleButtonClickRent = () => {
    if (inputRefRent.current?.value && inputRefRent.current.value.length > 0) {
      setinputValueErrorRent(false);
      const inputValue = inputRefRent.current.value;
      dispatch(HandleSearchResult("Rent"));
      router.push(`/search?purpose=${inputValue}`);
    } else {
      setinputValueErrorRent(true);
    }
  };
  const SearchBar = ({ title }: { title: string }) => (
    <div className="search-bar">
      <div className="sale-head fw-medium">Home available for {title}</div>
      <Form className="form">
        <FormControl
          ref={title == "Sale" ? inputRefSale : inputRefRent}
          type="text"
          className="formInput"
          style={{ height: "55px" }}
          placeholder="Are you looking for a house within the range of?"
        />
        <div
          onClick={title == "Sale" ? handleButtonClick : handleButtonClickRent}
          style={{ textDecoration: "none" }}
          className="searchBtn"
        >
          Search
        </div>
      </Form>
      {inputValueError || inputValueErrorRent ? (
        <Alert
          className="position-absolute right-0 top-16 w-96"
          variant="danger"
        >
          Please enter the price
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <div className="Order">
      <div className="top-head">
        <div className="overlay h-100 w-100 left-0 top-0 position-absolute d-flex justify-center align-items-center flex-col">
          <div className="title">Explore Your New Home For Sale or Rent</div>
          <p className="fs-5 mt-1">
            Choose your home and calculate your installments through the real
            estate finance calculator
          </p>
        </div>
      </div>
      <Container>
        <SearchBar title="Sale" />
        {SaleHouse.length > 0 && RentHouse.length > 0 ? (
          <>
            <Row className="mt-4">
              {SaleHouse.map((property) => (
                <>
                  <Banner property={property} key={Math.random() * 10} />
                </>
              ))}
            </Row>
            <SearchBar title="Rent" />
            <Row>
              {RentHouse.map((property) => (
                <>
                  <Banner property={property} key={Math.random() * 10} />
                </>
              ))}
            </Row>
          </>
        ) : (
          <MyLoader />
        )}
      </Container>
    </div>
  );
};

export default Order;
