import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";

const NewRealeasesCarousel = () => {
  return (
    <div>
      <h3 className="text-white ms-5 mt-5 mb-4">New Releases</h3>
      <Carousel interval={null} indicators={false} className="ms-4">
        <Carousel.Item>
          <Row className="justify-content-center gap-2">
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media23.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media24.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media25.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media26.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media27.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media28.jpg" className="d-block " />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center gap-2">
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media29.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media30.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media31.webp" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media32.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media10.jpg" className="d-block " />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media11.jpg" className="d-block " />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default NewRealeasesCarousel;
