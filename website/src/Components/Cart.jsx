import { useState } from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navbar'; 

const initialCartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: 20.00,
    quantity: 1,
    image: 'https://m.media-amazon.com/images/I/41kvOAo9rQL._SR290,290_.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 35.00,
    quantity: 2,
    image: 'https://electrobes.com/wp-content/uploads/2023/10/PhotoRoom-20231021-180538-300x300.jpg?v=1697894577',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 20.00,
    quantity: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao8vqnrrMMmHlhnxdY5QyDDXmJlDtHrzT2w&s',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 20.00,
    quantity: 1,
    image: 'https://m.media-amazon.com/images/I/71WBv5820KS._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 20.00,
    quantity: 1,
    image: 'https://www.shutterstock.com/image-vector/earphones-wireless-electronic-gadget-set-260nw-2073266813.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 20.00,
    quantity: 1,
    image: 'https://m.media-amazon.com/images/I/51j1XALHVOL.jpg',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; 
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container className="mt-5">
      <Navigation /> {/* Render your navigation bar */}
      <h1 className="mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Row>
            {cartItems.map(item => (
              <Col md={4} key={item.id} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <strong>Price:</strong> ${item.price.toFixed(2)}
                    </Card.Text>
                    <div className="d-flex align-items-center mb-2">
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                        className="mx-2"
                        style={{ width: '60px' }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mt-4">
            <h2>Total Price: ${getTotalPrice()}</h2>
            <Button variant="success" className="mt-3" >Proceed to Checkout</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
