import 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Navigation from './Navbar';
import Footer from './Footer';
import ProductCard from './CardHome';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />

      {/* Hero Section */}
      <header className="home-header">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hssuk.co.uk/wp-content/uploads/46335-Mens-Automatic-Skeleton-Watch-1-1.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome to Our Store</h3>
              <p>Discover the best products for you.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://chaser.pk/cdn/shop/products/main-image-1_9b073005-26b0-4afa-9a60-fa7fc4532454.jpg?v=1685443942"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Exclusive Offers</h3>
              <p>Dont miss our special promotions.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>

      {/* Featured Products Section */}
      <section className="home-featured-products">
        <Container>
          <h2 className="text-center my-4">Featured Products</h2>
          <ProductCard />
        </Container>
      </section>

      {/* Promotions Section */}
      <section className="home-promotions">
        <Container>
          <h2 className="text-center my-4">Current Promotions</h2>
          <Row>
            <Col md={6}>
              <div className="promotion-box">
                <img src="https://www.maxonpakistan.com/cdn/shop/files/MBH-02_4.jpg?v=1711440870" alt="Promotion 1" className="img-fluid" />
                <h3>Summer Sale</h3>
                <p>Get up to 50% off on summer collections.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="promotion-box">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363" alt="Promotion 2" className="img-fluid" />
                <h3>New Arrivals</h3>
                <p>Check out the latest products in our store.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
