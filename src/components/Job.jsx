import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={5}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button
          className="p-2 ms-2"
          onClick={() => {
            dispatch(addToFavouritesAction(data.company_name));
          }}
        >
          Add Fav
        </Button>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
