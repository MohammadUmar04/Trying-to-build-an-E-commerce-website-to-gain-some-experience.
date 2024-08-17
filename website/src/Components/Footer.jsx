// Footer.jsx
import 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="home-footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a leading e-commerce platform offering a wide range of products.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: support@example.com</li>
              <li>Phone: +1-234-567-890</li>
              <li>Address: 123 Main Street, Anytown, USA</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3"><a href="#">Facebook</a></li>
              <li className="me-3"><a href="#">Twitter</a></li>
              <li className="me-3"><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center py-3">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
