import { useState } from "react";
import { NavLink } from "react-router-dom";
import './RegistrationForm.css'; // Import the CSS file

const Registration = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState(''); // State to manage the message
    const [showMessage, setShowMessage] = useState(false); // State to control visibility

    const clickMSG = () => {
        // Show the "Item added" message with animation
        setMessage('Registration successful!');
        setShowMessage(true);

        // Hide the message after 3 seconds
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding state based on input name
        if (name === "firstName") {
            setFirstname(value);
        } else if (name === "lastName") {
            setLastname(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        }
    };

    const handleInputSubmit = (event) => {
        event.preventDefault();
    
        const formData = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        };
    
        // Send the data to the backend
        fetch('http://localhost:3000/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.msg === "User registered successfully") {
                clickMSG(); // Show success message
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <>
        <div className="container-register">
        {showMessage && <div className="message fade-in">{message}</div>}
            <div className="form-wrapper">
                <form className="form" onSubmit={handleInputSubmit}>
                    <h1 className="form-title">Registration Form</h1>

                    <div className="form-group">
                        <label>First name</label>
                        <input required
                            id="firstname"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstname}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Last name</label>
                        <input 
                        required
                            id="lastname"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastname}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                        required
                            id="email"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        required
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                     <input 
                     required
                        id="phone" 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-footer">
                      <button onClick={clickMSG} className="btn" type="submit"> 
                            Sign Up
                        </button>
                        
                        <NavLink className="forgot-link" to="#">
                            Forgot Password?
                        </NavLink>
                    </div>
                </form>
            </div>
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
        </>
    );
};

export default Registration;
