import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  console.log(favourites);
  return (
    <>
      <h1>Favourites company List</h1>
      <ListGroup>
        {favourites.map((company, index) => (
          <ListGroup.Item key={index}>{company}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default Favourites;
