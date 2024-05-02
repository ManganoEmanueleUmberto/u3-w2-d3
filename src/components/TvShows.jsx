import { Button, Dropdown } from "react-bootstrap";

const TvShows = () => {
  return (
    <div className="d-flex align-items-center px-5">
      <h1 className="text-white">TV Shows</h1>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle variant="dark" className="border border-1 border-dark-subtle ms-5" id="dropdown-basic">
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Horror</Dropdown.Item>
          <Dropdown.Item href="#">Thriller</Dropdown.Item>
          <Dropdown.Item href="#">Miniseries</Dropdown.Item>
          <Dropdown.Item href="#">Anime</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="outline-secondary" className="ms-auto rounded-0">
        <i className="bi bi-text-left"></i>
      </Button>
      <Button variant="outline-secondary" className="rounded-0">
        <i className="bi bi-grid-fill"></i>
      </Button>
    </div>
  );
};
export default TvShows;
