import React from "react";
import "./ProductCard.scss";
import { Card } from "react-bootstrap";

function ProductCard(props) {
  const { title, info, image, rate, location } = props;
  return (
    <div className="product-card mt-2 mx-auto ">
      <Card
        className="product-card"
        style={{
          width: "16rem",
          display: "inline-block",

          height: "18rem",
        }}
      >
        <Card.Img
          className="product-image"
          variant="top"
          src={image}
          style={{ height: "8rem" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{info}</Card.Text>
          <Card.Text>
            {" "}
            <span className="d-flex justify-content-between">
              <i className="h3">{rate}</i>

              <i className="h5 mt-4">{location}</i>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductCard;
