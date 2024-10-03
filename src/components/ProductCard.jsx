import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { items } from '../data/data'; // Adjust the path as needed

const ProductCard = () => {
  const [bagItems, setBagItems] = useState(JSON.parse(localStorage.getItem('bagItem')) || []);
  const [message, setMessage] = useState(''); // State to manage the message
  const [showMessage, setShowMessage] = useState(false); // State to control visibility

  // Add item to cart and update localStorage
  const addOnBag = (itemId) => {
    const updatedBagItems = [...bagItems, itemId];
    setBagItems(updatedBagItems);
    localStorage.setItem('bagItem', JSON.stringify(updatedBagItems));

    // Show the "Item added" message with animation
    setMessage('Item added to cart!');
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div>
      {/* Display the message with animation */}
      {showMessage && <div className="message fade-in">{message}</div>}

      <div className="pro-container">
        {items.map((item) => (
          <div className="pro" key={item.id}>
            <img src={item.Image} alt={item.p_name} />
            <div className="des">
              <span>{item.brand}</span>
              <h5>{item.p_name}</h5>
              <h4>₹ {item.price}</h4>
            </div>
            <button className="cart flex items-center justify-center text-3xl" onClick={() => addOnBag(item.id)}>
              +
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .message {
          background-color: #4CAF50;
          color: white;
          padding: 10px;
          position: fixed;
          top: 100px;
          right: 20px;
          z-index: 1000;
          border-radius: 5px;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
