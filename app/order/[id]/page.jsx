"use client";
import React, { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { GetHouseDetails } from "@/Redux/features/GbSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//{ params }: { params: { id: number } }
const Page = ({ params }) => {
  const { HouseDetails } = useAppSelector((state) => state.Global);

  const { description } = HouseDetails;
  const dispatch = useAppDispatch();
  const { id } = params;
  useEffect(() => {
    dispatch(GetHouseDetails(id));
  }, [id, dispatch]);

  return <div>{description}</div>;
};

export default memo(Page);
