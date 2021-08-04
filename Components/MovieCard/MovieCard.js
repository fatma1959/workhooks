import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, handleDelete }) => {
  return (
    <Card key={movie.id} style={{ width: "18rem" }}>
      <Card.Img
        style={{ height: "320px" }}
        variant="top"
        src={movie.posterUrl}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.rate}</Card.Text>
        <Link to={`/movieList/${movie.id}`}>
          <Button variant="primary">See Detail</Button>
        </Link>
        <Button
          onClick={() => {
            handleDelete(movie.id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
