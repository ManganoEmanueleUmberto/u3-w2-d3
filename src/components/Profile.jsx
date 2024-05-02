import { Button, Col, Dropdown, Form, Image, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="container-md d-flex justify-content-center pb-5">
      <div className="mt-5">
        <h2 className="display-3 text-white fw-normal mt-4">Edit profile</h2>
        <hr className="text-secondary" />
        <Row className="pe-5">
          <Col xs={4}>
            <Image src="../assets/avatar.png" fluid />;
          </Col>
          <Col xs={8}>
            <Form>
              <Form.Group className="rounded-0 border-0 " controlId="form0">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
            </Form>

            <h4 className="text-white mt-3">Language:</h4>
            <Dropdown data-bs-theme="dark" className="mt-1">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Italian</Dropdown.Item>
                <Dropdown.Item href="#">German</Dropdown.Item>
                <Dropdown.Item href="#">French</Dropdown.Item>
                <Dropdown.Item href="#">Japanese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="text-secondary" />
            <h4 className="text-white">Maturity settings:</h4>
            <Button variant="secondary" className="border-1  bg-secondary text-white fw-bold  rounded-0 mt-3">
              ALL MATURITY SETTINGS
            </Button>
            <p className="text-white mt-3">Show title of all maturity ratings for this profile</p>
            <Button variant="outline-secondary" className="rounded-0 mt-3 px-4">
              EDIT
            </Button>

            <hr className="text-secondary" />
            <h4 className="text-white mb-4">Autoplay Controls:</h4>
            <Form.Group className="mb-3">
              <Form.Check
                name="Autoplay"
                className="text-white fw-semibold"
                label="Autoplay next episode in a series on all devices"
                id="validationForm0"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                name="Autoplay"
                className="text-white fw-semibold"
                label="Autoplay next episode in a series on all devices"
                id="validationForm1"
              />
            </Form.Group>
          </Col>
        </Row>

        <hr className="text-secondary" />
        <div className="d-flex justify-content-center gap-3 mb-4">
          <Button variant="outline-secondary" className="bg-white rounded-0 px-4 fw-semibold fs-5">
            SAVE
          </Button>
          <Button variant="outline-secondary" className="rounded-0 px-4 fw-semibold fs-5">
            CANCEL
          </Button>
          <Button variant="outline-secondary" className="rounded-0 px-4 fw-semibold fs-5">
            DELETE PROFILE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
