import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  console.log(favourites);
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={4}>
          <h1>Favourites companies list</h1>
          <ListGroup className="my-3">
            {favourites.map((company, index) => (
              <ListGroup.Item key={index}>
                <Link to={`/${company}`}>{company}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Link to="/">Back to homepage</Link>
        </Col>
      </Row>
    </>
  );
};
export default Favourites;
