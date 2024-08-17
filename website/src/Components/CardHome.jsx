import 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function ProductCard({ image, title, description, buttonText = "Buy Now", className = "" }) {
  return (
    <BootstrapCard className={`product-card ${className}`}>
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>
          {description}
        </BootstrapCard.Text>
        <Button variant="primary">{buttonText}</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default ProductCard;
