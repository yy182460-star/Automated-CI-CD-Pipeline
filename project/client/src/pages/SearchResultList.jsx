import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Col, Row, Container } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import NoTripFound from "./NoTripFound";
import Newsletter from './../shared/Newsletter';

const SearchResultList = () => {
  const location = useLocation();
  // console.log(location);
  const [data] = useState(location.state);
  // console.log(data);

  return (
    <>
      <CommonSection title={"Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <NoTripFound />
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
