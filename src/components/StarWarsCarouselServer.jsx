import { Component } from "react";
import { Carousel, Col, Image, Row, Spinner } from "react-bootstrap";

class StarWarsCarouselServer extends Component {
  state = {
    films: "",
    isLoading: true,
  };
  fetchFilmS = () => {
    fetch("http://www.omdbapi.com/?apikey=2daf06fb&s=Star Wars")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta al server");
        }
      })
      .then((films) => {
        this.setState({ films: films });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  componentDidMount() {
    this.fetchFilmS();
  }
  render() {
    return (
      <div>
        <h3 className="text-white ms-5 mt-5 mb-4 d-inline-block">Star Wars Saga</h3>
        {this.state.isLoading && <Spinner animation="border" variant="primary" />}
        <Carousel interval={null} indicators={false} className="ms-4">
          <Carousel.Item>
            <Row className="justify-content-center gap-2 ">
              {this.state.films &&
                this.state.films.Search.map((film, i) => {
                  console.log(film);
                  if (i < 6) {
                    return (
                      <Col xs={12} sm={6} xxl={2} className="column p-0">
                        <Image src={film.Poster} className="d-block " />
                      </Col>
                    );
                  } else {
                    return <></>;
                  }
                })}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-evenly gap-2 ">
              {this.state.films &&
                this.state.films.Search.map((film, i) => {
                  console.log(film);
                  if (i > 5) {
                    return (
                      <Col xs={12} sm={6} xxl={2} className="column p-0">
                        <Image src={film.Poster} className="d-block " />
                      </Col>
                    );
                  } else {
                    return <></>;
                  }
                })}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default StarWarsCarouselServer;
