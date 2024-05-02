import { Button, Col, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <div className="container-md d-flex justify-content-center mt-5">
        <div className="w-50">
          <div className="d-flex gap-5 ms-2">
            <i className="bi bi-facebook text-secondary"></i>
            <i className="bi bi-instagram text-secondary"></i>
            <i className="bi bi-twitter text-secondary"></i>
            <i className="bi bi-youtube text-secondary"></i>
          </div>
          <Row className="text-secondary mt-4">
            <Col xs={6} md={4} lg={3}>
              <p>Audio and Subtitles</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Audio Description</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Help Center</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Gift Cards</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Media Center</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Investor Relation</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Jobs</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Terms of use</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Privacy</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Legal Notice</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Cookie Preferences</p>
            </Col>

            <Col xs={6} md={4} lg={3}>
              <p>Corporate Information</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p>Contact Us</p>
            </Col>
          </Row>

          <Button variant="outline-secondary">Service Code</Button>
          <p className="text-secondary mt-4">&copy; 1997-2019 Netflix, Inc. &#10100; i-0d00fcda2fdf9c0de &#10101;</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
