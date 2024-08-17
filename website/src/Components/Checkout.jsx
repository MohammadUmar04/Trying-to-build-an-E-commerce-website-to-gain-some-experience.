import 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navbar';

const Checkout = () => {
  return (
    <Container className="mt-5">
      <Navigation />
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Checkout</Card.Title>
              <Form>
                <Form.Group controlId="formUserInfo">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formShippingAddress">
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your shipping address" />
                </Form.Group>

                <Form.Group controlId="formPaymentMethod">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control as="select">
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Bank Transfer</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <p><strong>Items:</strong> 3</p>
              <p><strong>Total:</strong> $100.00</p>
              <Button variant="secondary" onClick={() => alert('Proceed to Payment')}>
                Proceed to Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
