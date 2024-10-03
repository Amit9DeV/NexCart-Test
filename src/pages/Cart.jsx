import React, { useState, useEffect } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import DeliveryAddr from './DeliveryAddr';
import { items } from '../data/data'; // Path to your data file

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState(''); // State for managing remove message
  const [isVisible, setIsVisible] = useState(false); // State for handling animation

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedBagItems = JSON.parse(localStorage.getItem('bagItem')) || [];
    loadCartItems(storedBagItems);
  }, []);

  // Load cart item objects from the stored IDs
  const loadCartItems = (storedBagItems) => {
    const loadedItems = storedBagItems.map((id) => items.find((item) => item.id === id));
    setCartItems(loadedItems);
    calculateTotalPrice(loadedItems);
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedBagItems = cartItems.filter((item) => item.id !== itemId).map((item) => item.id);
    localStorage.setItem('bagItem', JSON.stringify(updatedBagItems));
    loadCartItems(updatedBagItems);

    // Show the "Item removed" message with animation
    setMessage('Item removed from cart!');
    setIsVisible(true); // Make message visible

    // Hide the message after 3 seconds
    setTimeout(() => {
      setIsVisible(false); // Trigger fade out
    }, 2000);
  };

  // Calculate total price
  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + (item?.price || 0), 0);
    setTotalPrice(total);
  };

  return (
    <>
        <section id="cart" class="section-p1" >
      {/* Display the message with animation */}
      {isVisible && <div className={`message ${isVisible ? 'fadeIn' : 'fadeOut'}`}>{message}</div>}

      <table className="cart-display">
        <thead>
          <tr>
            <th>Remove</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            item && (
              <tr key={uuidv4()}>
                <td>
                  <FaTimesCircle
                    onClick={() => removeFromCart(item.id)}
                    style={{ cursor: 'pointer', color: 'red' }}
                  />
                </td>
                <td>
                  <img src={item.Image} alt={item.p_name} style={{ width: '100px' }} />
                </td>
                <td>{item.p_name}</td>
                <td>₹{item.price}</td>
                <td>
                  <input type="number" defaultValue={1} min="1" readOnly />
                </td>
                <td>₹{item.price}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
      </section>
      {/* Total Price Display */}

      <section id="cart-add" class="section-p1" >
        <div id="coupon" >
            <h3>Apply coupon</h3>
       
        <div>
            <input type="text" name="" id=""
            placeholder="Enter your coupon here"/>
            <button class="normal" >Apply</button>
        </div>
    </div>
        <div class="total" >
            <h3>cart Total</h3>


      <div className="TotalPrice">
        <table>
          <tbody>
            <tr>
              <td>Cart Total</td>
              <td>₹{totalPrice}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>₹{totalPrice}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <NavLink to="/DeliveryAddr" class="normal" >process to checkout</NavLink>
        </div>
    </section>

      </>
  );
};

// CSS styling for the message
const messageStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  position: 'fixed',
  top: '100px',
  right: '20px',
  zIndex: 1000,
  borderRadius: '5px',
  transition: 'opacity 0.5s ease-in-out',
};

// CSS for the animations
const css = `
  .message {
    background-color: red;
    color: white;
    padding: 10px;
    position: fixed;
    top: 100px;
    right: 50px;
    z-index: 1000;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .fadeIn {
    opacity: 1;
    animation: fadeInAnimation 0.5s forwards;
  }

  .fadeOut {
    opacity: 0;
    animation: fadeOutAnimation 0.5s forwards;
  }

  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOutAnimation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

// Inject the CSS into the document head
const styleElement = document.createElement("style");
styleElement.innerHTML = css;
document.head.appendChild(styleElement);

export default Cart;
