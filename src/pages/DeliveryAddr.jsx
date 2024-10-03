import '../Delivery.css';
import { NavLink } from 'react-router-dom';

export default function DeliveryAddr() {
    return (
      <>
      <div id="main-container">
        <div className="container-form">
          <div className="text">Delivery Address</div>
          <form action="#">
            <div className="form-row">
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Full Name</label>
              </div>
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>City</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input type="email" required />
                <div className="underline"></div>
                <label>Email Address</label>
              </div>
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Phone No.</label>
              </div>
              
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <div className="underline"></div>
                <label>your Full Address</label>
              </div>
            </div>
            <div className="form-row submit-btn">
              <div className="input-data">
               <NavLink to="/Payment"> <input type='button' value='submit' /> </NavLink>
              </div>
            </div>
          </form>
        </div>
        </div>
      </>
    );
  }
