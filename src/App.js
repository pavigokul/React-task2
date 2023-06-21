import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Special Item', price: 10.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Sale Item', price: 9.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Popular Item', price: 8.99, image: 'https://via.placeholder.com/150' },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button disabled={cart.some((item) => item.id === product.id)} onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;
