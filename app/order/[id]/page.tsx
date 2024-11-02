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
import { IoBedOutline } from "react-icons/io5";
import { FaBath, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { MdNotListedLocation, MdVerified } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Footer from "@/components/common/Footer";

const HouseDetailsComponent = ({ params }) => {
  // const { HouseDetails, loading, error } = useAppSelector(
  //   (state) => state.Global
  // );

  // const dispatch = useAppDispatch();
  // const { id } = params;
  // useEffect(() => {
  //   dispatch(GetHouseDetails(id));
  // }, [id, dispatch]);

  // if (loading === "pending") {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!HouseDetails || HouseDetails.message) {
  //   return <div>No House Details Available</div>;
  // }

  // const {
  //   price,
  //   rentFrequency,
  //   rooms,
  //   title,
  //   baths,
  //   area,
  //   agency,
  //   isVerified,
  //   description,
  //   type,
  //   purpose,
  //   furnishingStatus,
  //   amenities,
  //   photos,
  // } = HouseDetails;

  console.log("rerender [id]");

  const Details = [
    {
      id: 4652713,
      objectID: 4652713,
      ownerID: 1845745,
      userExternalID: "1845745",
      sourceID: 1,
      state: "active",
      geography: { lat: 25.17993275049, lng: 55.304911415143 },
      purpose: "for-rent",
      price: 11999.0,
      product: "premium",
      productLabel: "default",
      rentFrequency: "monthly",
      referenceNumber: "2401",
      permitNumber: null,
      projectNumber: null,
      title: "Last day offer | Best Location | Family - Oriented",
      title_l1:
        "\u0634\u0642\u0629 \u0641\u064a \u0628\u0631\u062c \u0634\u0648\u0628\u0627 \u0643\u0631\u064a\u0643 \u0641\u064a\u0633\u062a\u0627\u0633 A\u060c\u0634\u0648\u0628\u0627 \u0643\u0631\u064a\u0643 \u0641\u064a\u0633\u062a\u0627\u0633\u060c\u0634\u0648\u0628\u0627 \u0647\u0627\u0631\u062a\u0644\u0627\u0646\u062f 1 \u063a\u0631\u0641\u0629 11999 \u062f\u0631\u0647\u0645 - 7659641",
      title_l2:
        "\u4f4d\u4e8e\u82cf\u5df4\u54c8\u7279\u5170\u793e\u533a\uff0c\u82cf\u5df4\u6cb3\u7554\u666f\u89c2\u5927\u697c\uff0c\u82cf\u5df4\u6cb3\u7554\u666f\u89c2\u5927\u697cA\u5ea7 1 \u5367\u5ba4\u7684\u516c\u5bd3 11999 AED - 7659641",
      title_l3:
        "\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0432 \u0421\u043e\u0431\u0445\u0430 \u0425\u0430\u0440\u0442\u043b\u0430\u043d\u0434\uff0c\u0421\u043e\u0431\u0445\u0430 \u041a\u0440\u0438\u043a \u0412\u0438\u0441\u0442\u0430\u0441\uff0c\u0421\u043e\u0431\u0445\u0430 \u041a\u0440\u0438\u043a \u0412\u0438\u0441\u0442\u0430\u0441 \u0422\u0430\u0443\u044d\u0440 \u0410, 1 \u0441\u043f\u0430\u043b\u044c\u043d\u044f, 11999 AED - 7659641",
      description:
        "Creek Vistas Reserv\u00e9 is a multi-building complex under development in Sobha Hartland, Mohammed Bin Rashid City, Dubai. The development comprises two individual buildings: Creek Vistas Reserv\u00e9 Tower A and Creek Vistas Reserv\u00e9 Tower B. \nAmenities \nAmenities will include a barbecue area, a children's pool, covered parking, a gymnasium, indoor play area, a kids' play area, landscaped greens, a swimming pool and yoga and meditation areas. \nIntroducing Like Home, the premier rental company in Dubai that brings you the comfort and familiarity of home in every stay. With our commitment to exceptional service and attention to detail, we ensure that your experience with us is nothing short of extraordinary. \n\n<strong>Rates excludes 5% TAX. . </strong>\n<strong>Rates excludes Service charge & Admin fees 10%. </strong>\n<strong>A one-time cleaning fee applies upon checkout. </strong>\n<strong>A refundable security deposit is required. </strong>\n<strong>DTCM fee: 10AED per bedroom per night for the first 30 consecutive nights. </strong>\n<strong>Rates are subjected to change due to season and occupancy\u00a0</strong>\n<strong>Daily and weekly rental options are available. </strong>\n\nLike Home understands that when you're away from your own abode, you desire a space that feels welcoming and comfortable. Our carefully curated portfolio of properties offers a wide range of options, from cozy apartments to spacious villas, all thoughtfully designed to make you feel right at home. \n\nOur dedicated team of professionals is passionate about providing a personalized touch to your stay. From the moment you choose Like Home, we strive to understand your unique requirements and preferences, ensuring that we match you with the perfect rental property that suits your needs. \n\nEach property in our collection undergoes rigorous quality checks to guarantee the highest standards of cleanliness, amenities, and overall experience. We go the extra mile to ensure that your rental is equipped with all the essentials, making your stay hassle-free and convenient. \n\nAt Like Home, we believe in creating lasting memories and enriching experiences. Our team is available to provide local recommendations, insider tips, and personalized assistance throughout your stay, helping you explore the wonders of Dubai and make the most of your time in this incredible city. \n\nWhether you're visiting Dubai for business, leisure, or a special occasion, choose Like Home as your trusted rental company. Discover the perfect blend of comfort, convenience, and a warm, homely atmosphere. We invite you to experience Dubai with all the comforts of home, courtesy of Like Home.",
      externalID: "7659641",
      slug: "last-day-offer-best-location-family-oriented-7659641",
      slug_l1: "last-day-offer-best-location-family-oriented-7659641",
      slug_l2: "last-day-offer-best-location-family-oriented-7659641",
      slug_l3: "last-day-offer-best-location-family-oriented-7659641",
      location: [
        {
          id: 1,
          level: 0,
          externalID: "5001",
          name: "UAE",
          name_l1: "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a",
          name_l2: "\u963f\u8054\u914b",
          name_l3: "\u041e\u0410\u042d",
          slug: "/uae",
          slug_l1: "/uae",
          slug_l2: "/uae",
          slug_l3: "/uae",
        },
        {
          id: 2,
          level: 1,
          externalID: "5002",
          name: "Dubai",
          name_l1: "\u062f\u0628\u064a",
          name_l2: "\u8fea\u62dc",
          name_l3: "\u0414\u0443\u0431\u0430\u0439",
          slug: "/dubai",
          slug_l1: "/dubai",
          slug_l2: "/dubai",
          slug_l3: "/dubai",
        },
        {
          id: 835,
          level: 2,
          externalID: "8949",
          name: "Sobha Hartland",
          name_l1:
            "\u0634\u0648\u0628\u0627 \u0647\u0627\u0631\u062a\u0644\u0627\u0646\u062f",
          name_l2: "\u82cf\u5df4\u54c8\u7279\u5170\u793e\u533a",
          name_l3:
            "\u0421\u043e\u0431\u0445\u0430 \u0425\u0430\u0440\u0442\u043b\u0430\u043d\u0434",
          slug: "/dubai/sobha-hartland",
          slug_l1: "/dubai/sobha-hartland",
          slug_l2: "/dubai/sobha-hartland",
          slug_l3: "/dubai/sobha-hartland",
          type: "neighbourhood",
        },
        {
          id: 5240,
          level: 3,
          externalID: "11980",
          name: "Sobha Creek Vistas",
          name_l1:
            "\u0634\u0648\u0628\u0627 \u0643\u0631\u064a\u0643 \u0641\u064a\u0633\u062a\u0627\u0633",
          name_l2: "\u82cf\u5df4\u6cb3\u7554\u666f\u89c2\u5927\u697c",
          name_l3:
            "\u0421\u043e\u0431\u0445\u0430 \u041a\u0440\u0438\u043a \u0412\u0438\u0441\u0442\u0430\u0441",
          slug: "/dubai/sobha-hartland/sobha-creek-vistas",
          slug_l1: "/dubai/sobha-hartland/sobha-creek-vistas",
          slug_l2: "/dubai/sobha-hartland/sobha-creek-vistas",
          slug_l3: "/dubai/sobha-hartland/sobha-creek-vistas",
        },
        {
          id: 76734,
          level: 4,
          externalID: "16490",
          name: "Sobha Creek Vistas Tower A",
          name_l1:
            "\u0628\u0631\u062c \u0634\u0648\u0628\u0627 \u0643\u0631\u064a\u0643 \u0641\u064a\u0633\u062a\u0627\u0633 A",
          name_l2: "\u82cf\u5df4\u6cb3\u7554\u666f\u89c2\u5927\u697cA\u5ea7",
          name_l3:
            "\u0421\u043e\u0431\u0445\u0430 \u041a\u0440\u0438\u043a \u0412\u0438\u0441\u0442\u0430\u0441 \u0422\u0430\u0443\u044d\u0440 \u0410",
          slug: "/dubai/sobha-hartland/sobha-creek-vistas/sobha-creek-vistas-tower-a",
          slug_l1:
            "/dubai/sobha-hartland/sobha-creek-vistas/sobha-creek-vistas-tower-a",
          slug_l2:
            "/dubai/sobha-hartland/sobha-creek-vistas/sobha-creek-vistas-tower-a",
          slug_l3:
            "/dubai/sobha-hartland/sobha-creek-vistas/sobha-creek-vistas-tower-a",
          type: "condo-building",
        },
      ],

      createdAt: 1688637076.0,
      approvedAt: 1688637076.0,
      updatedAt: 1729356768.0,
      touchedAt: 1730442383.436989,
      reactivatedAt: 1723637332.607767,
      rooms: 1,
      baths: 2,
      area: 53.419248,
      score: 75,
      score_l1: 75,
      score_l2: 75,
      score_l3: 75,
      coverPhoto: {
        id: 705146220,
        externalID: "151997568",
        title: null,
        orderIndex: 0,
        nimaScore: 8.971864104419481,
        url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
        main: true,
      },
      photoCount: 19,
      videoCount: 0,
      panoramaCount: 0,
      photos: [
        {
          id: 705146220,
          externalID: "151997568",
          title: null,
          orderIndex: 0,
          nimaScore: 8.971864104419481,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146220/e3de911452664a0281f08ab96468dde6",
        },
        {
          id: 705146223,
          externalID: "151997571",
          title: null,
          orderIndex: 1,
          nimaScore: 9.119022552316437,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146223/3665a6849097451e984e50088fb66f2e",
        },
        {
          id: 705146228,
          externalID: "151997572",
          title: null,
          orderIndex: 2,
          nimaScore: 8.838302851534536,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146228/01b0a64fca984b7784fe2a71d08a3e8b",
        },
        {
          id: 705146230,
          externalID: "151997574",
          title: null,
          orderIndex: 3,
          nimaScore: 8.725884183670132,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146230/eb9d774847dc4228b30e35ae8a31ae18",
        },
        {
          id: 705146235,
          externalID: "151997576",
          title: null,
          orderIndex: 4,
          nimaScore: 8.87287242484308,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146235/7ae4d459fbff40f38751180f74a5550f",
        },
        {
          id: 705146241,
          externalID: "151997577",
          title: null,
          orderIndex: 5,
          nimaScore: 8.395136701480624,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146241/1b6c4e7403bd4471804d272950577da3",
        },
        {
          id: 705146248,
          externalID: "151997578",
          title: null,
          orderIndex: 6,
          nimaScore: 9.527380600858457,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146248/f7b7a06fb5bd4d9785f1731198b53dcb",
        },
        {
          id: 705146254,
          externalID: "151997579",
          title: null,
          orderIndex: 7,
          nimaScore: 9.310704530397231,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146254/14ff496aa29f46ab8572719229022169",
        },
        {
          id: 705146259,
          externalID: "151997580",
          title: null,
          orderIndex: 8,
          nimaScore: 8.557111944098779,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146259/bea9bd6a35ec4dbdbba816a73d2a5001",
        },
        {
          id: 705146266,
          externalID: "151997581",
          title: null,
          orderIndex: 9,
          nimaScore: 8.068596716840148,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146266/95a00defc83147a39b77935a838e829e",
        },
        {
          id: 705146272,
          externalID: "151997582",
          title: null,
          orderIndex: 10,
          nimaScore: 8.783287479106548,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146272/87095e9a66734fac9e80750889036f9f",
        },
        {
          id: 705146276,
          externalID: "151997583",
          title: null,
          orderIndex: 11,
          nimaScore: 7.685426829560583,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146276/4298e2aa36e243d8901520582d552768",
        },
        {
          id: 705146282,
          externalID: "151997584",
          title: null,
          orderIndex: 12,
          nimaScore: 6.087266230980958,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/705146282/2894500c936e405b98cb06beac394325",
        },
        {
          id: 732153597,
          externalID: "179827784",
          title: "WhatsApp Image 2024-07-24 at 13.16. 40. jpeg",
          orderIndex: 13,
          nimaScore: 5.997181524592014,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/732153597/fa29230a88594adc97f903a5578014cf",
        },
        {
          id: 732153598,
          externalID: "179827785",
          title: "WhatsApp Image 2024-07-24 at 13.16. 44 (1). jpeg",
          orderIndex: 14,
          nimaScore: 8.34310034822056,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/732153598/6a7dca4cd19c4785a558d24b520187ee",
        },
        {
          id: 732153599,
          externalID: "179827786",
          title: "WhatsApp Image 2024-07-24 at 13.16. 46. jpeg",
          orderIndex: 15,
          nimaScore: 5.998319165423671,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/732153599/20cc1ad2dd304938bb7dd6c7e0449ef5",
        },
        {
          id: 732153600,
          externalID: "179827787",
          title: "WhatsApp Image 2024-07-24 at 13.16. 39. jpeg",
          orderIndex: 16,
          nimaScore: 6.00423412223972,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/732153600/e4d75cce22974c968e7cd03f8280ef21",
        },
        {
          id: 732153601,
          externalID: "179827788",
          title: "WhatsApp Image 2024-07-24 at 13.16. 43. jpeg",
          orderIndex: 17,
          nimaScore: 8.440069572949142,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/732153601/5f84808302c04f20bddfd01eb874d83c",
        },
        {
          id: 732153602,
          externalID: "179827789",
          title: "WhatsApp Image 2024-07-24 at 13.16. 45. jpeg",
          orderIndex: 18,
          nimaScore: 6.011465386337619,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/732153602/952fe1df19194769abc5e565f7242bbf",
        },
      ],

      amenities: [
        {
          externalGroupID: 9,
          groupRank: 1,
          text: "Features",
          text_l1: "\u0645\u0632\u0627\u064a\u0627",
          text_l2: "\u65e5\u6258\u4e2d\u5fc3",
          text_l3:
            "\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",
          amenities: [
            {
              text: "Furnished",
              text_l1: "\u0645\u0641\u0631\u0648\u0634\u0629",
              text_l2: "\u914d\u5907\u5bb6\u5177",
              text_l3:
                "\u041c\u0435\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439",
              value: "True",
              rank: 1,
              slug: "furnished",
              format: "checkbox",
              externalID: 20,
            },
            {
              text: "Electricity Backup",
              text_l1:
                "\u0646\u0638\u0627\u0645 \u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u062d\u062a\u064a\u0627\u0637\u064a \u0644\u0644\u0637\u0648\u0627\u0631\u0626",
              text_l2: "\u5907\u7528\u7535\u529b",
              text_l3:
                "\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
              value: "True",
              rank: 2,
              slug: "electricity-backup",
              format: "checkbox",
              externalID: 10,
            },
            {
              text: "Parking Spaces",
              text_l1:
                "\u0645\u0648\u0627\u0642\u0641 \u0633\u064a\u0627\u0631\u0627\u062a",
              text_l2: "\u6cca\u8f66\u4f4d",
              text_l3:
                "\u041f\u0430\u0440\u043a\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430",
              value: "1",
              rank: 3,
              slug: "parking-spaces",
              format: "number",
              externalID: 68,
            },
            {
              text: "Centrally Air-Conditioned",
              text_l1:
                "\u0646\u0638\u0627\u0645 \u062a\u0628\u0631\u064a\u062f \u0645\u0631\u0643\u0632\u064a",
              text_l2: "\u4e2d\u592e\u7a7a\u8c03",
              text_l3:
                "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
              value: "True",
              rank: 4,
              slug: "centrally-air-conditioned",
              format: "checkbox",
              externalID: 7,
            },
            {
              text: "Double Glazed Windows",
              text_l1:
                "\u0646\u0648\u0627\u0641\u0630 \u0632\u062c\u0627\u062c\u064a\u0629 \u0645\u0632\u062f\u0648\u062c\u0629",
              text_l2: "\u53cc\u5c42\u73bb\u7483\u7a97",
              text_l3:
                "\u041e\u043a\u043d\u0430 \u0441 \u0434\u0432\u043e\u0439\u043d\u044b\u043c \u043e\u0441\u0442\u0435\u043a\u043b\u0435\u043d\u0438\u0435\u043c",
              value: "True",
              rank: 6,
              slug: "double-glazed-windows",
              format: "checkbox",
              externalID: 6,
            },
          ],
        },
        {
          externalGroupID: 5,
          groupRank: 2,
          text: "Building",
          text_l1: "\u0627\u0644\u0628\u0646\u0627\u0621",
          text_l2: "\u5165\u6237\u5927\u5802",
          text_l3: "\u0417\u0434\u0430\u043d\u0438\u0435",
          amenities: [
            {
              text: "Balcony or Terrace",
              text_l1:
                "\u0634\u0631\u0641\u0629 \u0623\u0648 \u062a\u0631\u0627\u0633",
              text_l2: "\u9633\u53f0",
              text_l3:
                "\u0411\u0430\u043b\u043a\u043e\u043d \u0438\u043b\u0438 \u0442\u0435\u0440\u0440\u0430\u0441\u0430",
              value: "True",
              rank: 1,
              slug: "balcony-or-terrace",
              format: "checkbox",
              externalID: 3,
            },
            {
              text: "Lobby in Building",
              text_l1:
                "\u0631\u062f\u0647\u0629 \u0625\u0633\u062a\u0642\u0628\u0627\u0644",
              text_l2: "\u5165\u6237\u5927\u5802",
              text_l3:
                "\u041b\u043e\u0431\u0431\u0438 \u0432 \u0437\u0434\u0430\u043d\u0438\u0438",
              value: "True",
              rank: 2,
              slug: "lobby-in-building",
              format: "checkbox",
              externalID: 5,
            },
            {
              text: "Elevators in Building",
              text_l1: "\u0645\u0635\u0627\u0639\u062f",
              text_l2: "\u7535\u68af",
              text_l3:
                "\u041b\u0438\u0444\u0442\u044b \u0432 \u0437\u0434\u0430\u043d\u0438\u0438",
              value: "6",
              rank: 3,
              slug: "elevators-in-building",
              format: "number",
              externalID: 16,
            },
            {
              text: "Service Elevators",
              text_l1:
                "\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0635\u0627\u0639\u062f",
              text_l2: "\u670d\u52a1\u7535\u68af",
              text_l3:
                "\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0435 \u043b\u0438\u0444\u0442\u044b",
              value: "True",
              rank: 4,
              slug: "service-elevators",
              format: "checkbox",
              externalID: 17,
            },
            {
              text: "Completion Year",
              text_l1:
                "\u0633\u0646\u0629 \u0625\u062a\u0645\u0627\u0645 \u0645\u0634\u0631\u0648\u0639",
              text_l2: "\u5efa\u6210\u5e74\u4efd",
              text_l3:
                "\u0413\u043e\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f",
              value: "2022",
              rank: 5,
              slug: "completion-year",
              format: "number",
              externalID: 1,
            },
            {
              text: "Reception/Waiting Room",
              text_l1:
                "\u063a\u0631\u0641\u0629 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 /\u0627\u0646\u062a\u0638\u0627\u0631",
              text_l2: "\u6851\u62ff",
              text_l3:
                "\u041f\u0440\u0438\u0435\u043c/\u0417\u0430\u043b \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f",
              value: "True",
              rank: 8,
              slug: "receptionwaiting-room",
              format: "checkbox",
              externalID: 41,
            },
          ],
        },
      ],
      phoneNumber: {
        mobile: "+971547922720",
        phone: "+97145572402",
        whatsapp: "971545695868",
        proxyMobile: "+971528791246",
        phoneNumbers: ["+97145572402"],
        mobileNumbers: ["+971547922720"],
      },
      contactName: "Chafik Alknani",
      agency: {
        id: 29536933,
        objectID: 29536933,
        name: "Like Home Vacation Homes",
        name_l1:
          "\u062f\u0627\u0631 \u0627\u0644\u0632\u064a\u0646 \u0644\u062a\u0623\u062c\u064a\u0631 \u0628\u064a\u0648\u062a \u0627\u0644\u0639\u0637\u0644\u062a",
        name_l2: "Like Home Vacation Homes",
        name_l3: "Like Home Vacation Homes",
        externalID: "8933",
        product: "premium",
        productScore: 2,
        licenses: [
          { number: "825766", authority: "DED" },
          { number: "825766", authority: "DED" },
        ],
        logo: {
          id: 75770747,
          url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/75770747/3bc86bb51d114bdeafe816268fff2c26",
        },
        slug: "like-home-vacation-homes-8933",
        slug_l1: "like-home-vacation-homes-8933",
        slug_l2: "like-home-vacation-homes-8933",
        slug_l3: "like-home-vacation-homes-8933",
        tr: 1,
        tier: 1,
        roles: [],
        active: true,
        createdAt: "2019-05-26T03:18:37+00:00",
        commercialNumber: null,
        shortNumber: null,
        type: "agency",
        performanceCohort: "not_determined",
      },
      active: true,
      hasExactGeography: true,
      verification: {
        status: "verified",
        type: null,
        eligible: true,
        comment: null,
        updatedAt: 1729356785.481256,
        verifiedAt: 1729356768.0,
        visitedAt: null,
        trucheckedAt: 1729356768.0,
      },
      isVerified: true,
      occupancyStatus: "vacant",
      furnishingStatus: "furnished",
      extraFields: { dldPropertySK: "7659641" },
      type: "property",
      completionStatus: "completed",
      cityLevelScore: 3,
      indyScore: 575,
      indyScore_l1: 575,
      indyScore_l2: 471,
      indyScore_l3: 471,
      hasMatchingFloorPlans: false,
      hidePrice: false,
      locationPurposeTier: 0,
      plotArea: null,
    },
  ];

  return (
    <div className="HouseDetails">
      {Details.map((property) => {
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
        } = property;
        const date = new Date(createdAt * 1000);
        return (
          <div key={property.id}>
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
                      <a
                        href="mailto:AbdallhSabry194@gmail.com"
                        className="icon"
                      >
                        <IoIosMail style={{ marginRight: "4px" }} /> Email
                      </a>
                      <a
                        href={`https://wa.me/${phoneNumber.mobile}`}
                        className="icon"
                      >
                        <FaWhatsapp style={{ marginRight: "4px" }} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="price">
                    {isVerified && <MdVerified className="verified" />} {price}{" "}
                    <span>
                      EGP {`${rentFrequency ? "/ " + rentFrequency : ""}`}
                    </span>
                  </div>
                  <div className="house-area mt-3 d-flex justify-between align-items-center">
                    <span>
                      <IoBedOutline
                        style={{ marginRight: "3px", color: "#0db8b8" }}
                      />
                      {rooms} Rooms
                    </span>
                    <span>
                      <FaBath
                        style={{ marginRight: "3px", color: "#0db8b8" }}
                      />
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
                    <MdNotListedLocation style={{ display: "inline" }} />{" "}
                    Locations :{" "}
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
                          <div>Completion : </div>{" "}
                          <span>{completionStatus}</span>
                        </>
                      )}
                    </Col>
                    <Col lg={6} className="property">
                      {furnishingStatus && (
                        <>
                          <div>Finishing : </div>{" "}
                          <span>{furnishingStatus}</span>
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
      })}
    </div>
  );
};

export default memo(HouseDetailsComponent);
