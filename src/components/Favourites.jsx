import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FROM_FAVOURITE } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={4}>
          <h1>Favourites companies list</h1>
          <ListGroup className="my-3">
            {favourites.map((company, index) => (
              <ListGroup.Item key={index}>
                <Button
                  className=" btn btn-danger me-3"
                  onClick={() =>
                    dispatch({
                      type: REMOVE_FROM_FAVOURITE,
                      payload: company
                    })
                  }
                >
                  X
                </Button>
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
