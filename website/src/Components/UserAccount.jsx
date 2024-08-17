import  'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Home.css'; // Import the CSS file
import Navigation from './Navbar';
import Footer from './Footer';

const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: "123 Main St, Anytown, USA",
};

const orderHistory = [
  { id: 1, date: '2024-08-01', total: '$45.00', status: 'Delivered' },
  { id: 2, date: '2024-07-15', total: '$30.00', status: 'Pending' },
];

const UserAccount = () => {
  return (
    <>
      <Navigation /> {/* Make sure Navigation is imported correctly */}
      <div className="user-account container mt-5">
        <h1 className="mb-4">User Account</h1>
        
        <Card className="profile-card mb-4">
          <Card.Header className="profile-header">User Profile</Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>Name:</strong> {userProfile.name}
            </Card.Text>
            <Card.Text>
              <strong>Email:</strong> {userProfile.email}
            </Card.Text>
            <Card.Text>
              <strong>Address:</strong> {userProfile.address}
            </Card.Text>
            <Button variant="primary" className="edit-profile-btn">Edit Profile</Button>
          </Card.Body>
        </Card>
        
        <Card className="order-history-card">
          <Card.Header className="order-history-header">Order History</Card.Header>
          <ListGroup variant="flush">
            {orderHistory.map(order => (
              <ListGroupItem key={order.id} className="order-item">
                <div><strong>Order ID:</strong> {order.id}</div>
                <div><strong>Date:</strong> {order.date}</div>
                <div><strong>Total:</strong> {order.total}</div>
                <div><strong>Status:</strong> {order.status}</div>
                <Button variant="info" className="view-details-btn">View Details</Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default UserAccount;
