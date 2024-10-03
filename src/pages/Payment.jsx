import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Payment.css'; // Ensure you have the correct path

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow numeric characters
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow numeric characters
    if (value.length <= 4) {
      const formattedValue = value.replace(/(\d{2})(?=\d)/g, '$1/');
      setExpiryDate(formattedValue);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow numeric characters
    setCvv(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const isNumeric = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show the "Order Success" message with animation
    setMessage('Order Success');
    setIsVisible(true);

    // Hide the message after 2 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  return (
    <div className="main-container-pay">
      {isVisible && <div className={`message ${isVisible ? 'fadeIn' : 'fadeOut'}`}>{message}</div>}

      <div className="container-pay">
        <div className="payment">
          <div className="payment__dots">
            {/* Add SVG dots here if needed */}
          </div>

          <div className="card-pay">
            <div className="card__visa">
              <svg className='visa' width="800px" height="800px" viewBox="0 -140 780 780" enableBackground="new 0 0 780 500" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" fill="#0E4595" />
                <path d="M293.2 348.73l33.361-195.76h53.36l-33.385 195.76h-53.336zm246.11-191.54c-10.57-3.966-27.137-8.222-47.822-8.222-52.725 0-89.865 26.55-90.18 64.603-0.299 28.13 26.514 43.822 46.752 53.186 20.771 9.595 27.752 15.714 27.654 24.283-0.131 13.121-16.586 19.116-31.922 19.116-21.357 0-32.703-2.967-50.227-10.276l-6.876-3.11-7.489 43.823c12.463 5.464 35.51 10.198 59.438 10.443 56.09 0 92.5-26.246 92.916-66.882 0.199-22.269-14.016-39.216-44.801-53.188-18.65-9.055-30.072-15.099-29.951-24.268 0-8.137 9.668-16.839 30.557-16.839 17.449-0.27 30.09 3.535 39.938 7.5l4.781 2.26 7.232-42.429m137.31-4.223h-41.232c-12.773 0-22.332 3.487-27.941 16.234l-79.244 179.4h56.031s9.16-24.123 11.232-29.418c6.125 0 60.555 0.084 68.338 0.084 1.596 6.853 6.49 29.334 6.49 29.334h49.514l-43.188-195.64zm-65.418 126.41c4.412-11.279 21.26-54.723 21.26-54.723-0.316 0.522 4.379-11.334 7.074-18.684l3.605 16.879s10.219 46.729 12.354 56.528h-44.293zm-363.3-126.41l-52.24 133.5-5.567-27.13c-9.725-31.273-40.025-65.155-73.898-82.118l47.766 171.2 56.456-0.064 84.004-195.39h-56.521" fill="#ffffff" />
                <path d="m146.92 152.96h-86.041l-0.681 4.073c66.938 16.204 111.23 55.363 129.62 102.41l-18.71-89.96c-3.23-12.395-12.597-16.094-24.186-16.527" fill="#F2AE14" />
              </svg>
            </div>
            <div className="card__number">
              {cardNumber || '0000 0000 0000 0000'}
            </div>
            <div className="card__name">
              <h3>Card Holder</h3>
              <p>{name || 'Mrs Kate Smith'}</p>
            </div>
            <div className="card__expiry">
              <h3>Valid Thru</h3>
              <p>{expiryDate || 'MM/YY'}</p>
            </div>
          </div>

          <form className="form-pay" onSubmit={handleSubmit}>
            <h2>Payment Details</h2>

            <div className="form__detail form__name">
              <label htmlFor="name">Cardholder Name</label>
              <input
                type="text"
                id="name"
                placeholder="Mrs Kate Smith"
                value={name}
                onChange={handleNameChange}
                maxLength="24"
              />
            </div>

            <div className="form__detail form__number">
              <label htmlFor="number">Card Number</label>
              <input
                type="text"
                id="number"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={handleCardNumberChange}
                onKeyPress={isNumeric}
                maxLength="19"
              />
            </div>

            <div className="form__detail form__expiry">
              <label htmlFor="date">Exp Date</label>
              <input
                type="text"
                id="date"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryChange}
                onKeyPress={isNumeric}
                maxLength="5"
              />
            </div>

            <div className="form__detail form__cvv">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                placeholder="000"
                value={cvv}
                onChange={handleCvvChange}
                onKeyPress={isNumeric}
                maxLength="4"
              />
            </ div>

            <NavLink className='form__btn' to='/Success' > <button  type="submit" className="form__btn">  Pay </button> </NavLink> 
          </form>
        </div>
      </div>
    </div>
  );
}


  // CSS for the animations
  const css = `
    .message {
    font-size: 2    rem;
      background-color: green;
      color: white;
      padding: 10px;
      position: fixed;
      top: 60vh;
      right: 50vh;
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