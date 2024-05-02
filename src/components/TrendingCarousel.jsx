import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";

const TrendingCarousel = () => {
  return (
    <div>
      <h3 className="text-white ms-5 mt-4 mb-4">Trending Now</h3>
      <Carousel interval={null} indicators={false} className="ms-4">
        <Carousel.Item>
          <Row className="justify-content-center gap-2">
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media0.webp" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media1.jpg" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media2.webp" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media3.webp" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media4.jpg" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media5.webp" className="d-block" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center gap-2">
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media6.jpg" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media7.webp" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media8.webp" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media9.jpg" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media10.jpg" className="d-block" />
            </Col>
            <Col xs={12} sm={6} xxl={2} className="column p-0">
              <Image src="./assets/media/media11.jpg" className="d-block" />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TrendingCarousel;
