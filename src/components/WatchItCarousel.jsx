import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";

const WatchItCarousel = () => {
  return (
    <div className="">
      <h3 className="text-white ms-5 mt-5 mb-4">Watch It Again</h3>
      <Carousel interval={null} indicators={false} className="ms-4">
        <Carousel.Item>
          <Row className="justify-content-center gap-2">
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media12.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media13.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media29.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media14.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media15.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media16.webp" className="d-block " />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center gap-2">
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media17.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media18.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media19.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media20.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media21.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media22.webp" className="d-block " />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default WatchItCarousel;
