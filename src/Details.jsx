import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // this comes from the BrowseRouter component
  return <h2> {id} </h2>;
};

export default Details;
