import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Detail = ({ match,movieList  }) => {
  console.log(match);
  console.log(movieList);
  const movie = movieList.find((el) => el.id.toString() === match.params.id);
  return (
    <div>
      <iframe
        title={movie.title}
        width="300"
        height="200"
        src={movie.trailer}
      ></iframe>
      <h1>{movie.description}</h1>
      <Link to="/">
        <Button variant="success">return to home</Button>
      </Link>
    </div>
  );
};

export default Detail;
