import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(''); // State to manage the message
    const [showMessage, setShowMessage] = useState(false); // State to control message visibility
    const navigate = useNavigate();

    const SubmitForm = async (e) => {
        e.preventDefault();
      
        const formData = { email, password };
        console.log('Form Data:', formData);
      
        try {
          const response = await fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          console.log('Response Status:', response.status);
          const data = await response.json();
          console.log('Response Data:', data);
      
          if (response.ok) {
            if (data.message === "Login successful") {
              // Show success message
              alert("Login successful")
              setMessage('Login successful! Redirecting...');
              setShowMessage(true);

              // Redirect after a delay
              setTimeout(() => {
                navigate('/');
              }, 100); // Redirect after 2 seconds
            } else {
              alert("Error")
              // Handle unexpected message
              setMessage(data.message || "Login failed!");
              setShowMessage(true);
            }
          } else {
            alert("Error")
            // Handle errors based on response status
            setMessage(data.message || "Login failed!");
            setShowMessage(true);
          }
        } catch (error) {
          alert("Error")
          console.error('Error occurred:', error);
          setMessage(`An unexpected error occurred: ${error.message || error}`);
          setShowMessage(true);
        }
      };

    return (
        <div className="container-login">
            <div className="form-container">
                <div className="form-header">
                    <h2 className="form-title">Sign in to your account</h2>
                </div>

                {/* Conditionally display the message */}
                {showMessage && <div className="message">{message}</div>}

                <div className="form-body">
                    <form className="form" action="#" method="POST" onSubmit={SubmitForm}>
                        <div>
                            <label htmlFor="email" className="input-label">Email</label>
                            <div className="input-container">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="input-field"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex-between">
                                <label htmlFor="password" className="input-label">Password</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="input-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="submit-button">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Inline styles for the message box */}
            <style>{`
                .message {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    margin-top: 10px;
                    text-align: center;
                    border-radius: 5px;
                    animation: fadeIn 0.5s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default LoginForm;
