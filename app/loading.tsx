"use client";
import Lottie from "lottie-react";
import React from "react";
import loader from "../public/LottieFiles/loader.json";

const loading = () => (
  <Lottie
    style={{ maxWidth: "200px", margin: "auto" }}
    animationData={loader}
  />
);

export default loading;
