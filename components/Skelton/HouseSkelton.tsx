import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const MyLoader = () => {
  const ProductsLoopSkeleton = Array(6)
    .fill(0)
    .map((_, idx) => (
      <Col md={12} lg={4} className="Details-container" key={idx}>
        <ContentLoader
          speed={1}
          width={450}
          height={595}
          viewBox="0 0 440 595"
          backgroundColor="#e6e6e6"
          foregroundColor="#c2c2c2"
        >
          <rect x="-7" y="386" rx="2" ry="2" width="400" height="17" />
          <rect x="-6" y="326" rx="2" ry="2" width="400" height="26" />
          <rect x="-7" y="-1" rx="2" ry="2" width="400" height="312" />
          <rect x="-2" y="443" rx="2" ry="2" width="400" height="29" />
          <rect x="-2" y="497" rx="2" ry="2" width="55" height="27" />
          <rect x="-2" y="549" rx="0" ry="0" width="400" height="27" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{ProductsLoopSkeleton}</Row>;
};

export default MyLoader;
