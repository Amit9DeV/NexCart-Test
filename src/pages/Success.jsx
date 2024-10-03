import React from 'react';

export default function Success() {
  return (
    <div className="successPage">
      <div className="card-success">
        <div className="checkmark-container">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
      </div>
    </div>
  );
}
