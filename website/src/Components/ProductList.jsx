import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [inStock, setInStock] = useState(true);
  const [category, setCategory] = useState('');
  const [discount, setDiscount] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      image,
      price,
      description,
      rating,
      inStock,
      category,
      discount,
    };

    // Save the product to local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    // Clear form fields
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setRating(0);
    setInStock(true);
    setCategory('');
    setDiscount('');

    navigate('/products');
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-4">Add Product</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input type="number" className="form-control" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="5" step="0.1" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="discount" className="form-label">Discount</label>
          <input type="text" className="form-control" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="inStock" className="form-label me-2">In Stock</label>
          <input type="checkbox" id="inStock" checked={inStock} onChange={() => setInStock(!inStock)} />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navigation /> {/* This will render your navigation bar */}
      <AddProduct />  {/* This will render the AddProduct form */}
    </div>
  );
};

export default Home;
