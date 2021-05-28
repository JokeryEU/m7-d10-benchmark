import { ListGroup } from "react-bootstrap";
import { ISearch } from "../types/deezer";
import Track from "./City";
interface TrackListProps {
  city: ISearch;
}

const TackList = ({ city }: TrackListProps) => {
  return (
    <ListGroup>
      <Track city={city} />
    </ListGroup>
  );
};

export default TackList;
