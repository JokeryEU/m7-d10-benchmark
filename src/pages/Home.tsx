import { Container, Jumbotron, Spinner } from "react-bootstrap";
import Search from "../components/Search";
import TrackList from "../components/CityList";
import { ISearch } from "../types/deezer";
import { useState } from "react";

const Home = () => {
  const [city, setcity] = useState<ISearch>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchApi: Function = async (query: string) => {
    try {
      setLoading(true);
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}?q=${query}&units=metric&appid=${process.env.REACT_APP_API_ID}`
      );
      const data = await resp.json();
      console.log();

      console.log(data);
      setcity(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Weather search by city</h1>
          <p></p>
          <Search fetchApi={fetchApi} />
        </Container>
      </Jumbotron>
      <Container>
        {(loading && <Spinner animation="border" variant="primary" />) ||
          (city !== undefined && <TrackList city={city!} />)}
      </Container>
    </>
  );
};

export default Home;
