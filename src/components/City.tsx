import { ISearch } from "../types/deezer";
import { Image, ListGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface TrackProps {
  city: ISearch;
}

const Track = ({ city }: TrackProps) => {
  const history = useHistory();

  const roundedTemp: number = Math.floor(city!.main.temp);

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <Image
        roundedCircle
        alt="weatherIcon"
        // style={{ height: "50px", width: "50px" }}
        src={`http://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
      />
      <span className="mx-2">{city?.name} </span> <span>|</span>
      <span className="mx-2">{city?.sys.country}</span> <span>|</span>
      <span className="mx-2 fw-bold">{roundedTemp} C</span>
      <div className="ms-auto">
        <Button
          onClick={() => history.push(`/details/${city.id}`)}
          variant="primary"
          className="mx-2 badge "
          style={{ background: "#228800" }}
        >
          Details
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default Track;
