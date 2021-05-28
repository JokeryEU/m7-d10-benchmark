import { Col, Container, Row, Card } from "react-bootstrap";
import { ISearch } from "../types/deezer";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

type MusicParams = {
  id: string;
};
const Details = () => {
  const { id } = useParams<MusicParams>();
  const [weather, setWeather] = useState<ISearch>();

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}?id=${id}&units=metric&appid=57dab0918596ebc04c155267641b9402`
        );
        const data = await res.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <h3
            className="fw-bold mt-4"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            Home
          </h3>
          <Card className="mt-5 mx-auto" style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
              alt="cityWeatherIcon"
            />
            <Card.Body>
              <Card.Title className="fw-bold">{weather?.name}</Card.Title>
              <span className="ms-1">Lat: {weather?.coord.lat}</span>
              <span className="ms-1">Lon: {weather?.coord.lon}</span>
              <Card.Title className="fw-bold">
                {weather?.weather[0].description}
              </Card.Title>
              <Card.Text>
                <span className="ms-3 fw-bold">
                  Temperature: {weather?.main.temp} C
                </span>
                <br />
                <span className="ms-3 fw-bold">
                  Wind speed: {weather?.wind.speed} km/h
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
