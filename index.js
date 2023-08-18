import React, { useState } from 'react';
import './index.css';

function AddressForm() {
  const [state, setState] = useState('state');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [discount, setDiscount] = useState('Discount');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code here to handle form submission
  };

  return (
    <div className="container">
      <h1>Add a new Address</h1>
      <br />
      
      <form onSubmit={handleSubmit}>
        <select value={state}  onChange={handleStateChange}>
          <option value="state">State</option>
          <option value="Andhra pradesh">Andhra Pradesh</option>
          <option value="thamilnadu">Tamil Nadu</option>
          <option value="karnataka">Telangana</option>
        </select>
        <br />
        
        <label>First Name</label>
        <br />
        <input type="text" placeholder="First Name" style={{ height: '40px' }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        
        <label>Last Name</label>
        <br />
        <input type="text" placeholder="Last Name" style={{ height: '40px' }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
      
        <label>Mobile Number</label>
        <br />
        <input type="number" placeholder="Mobile Number"  style={{ height: '40px' }} value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        <br />
        <br />
        <select value={discount} onChange={handleDiscountChange}>
          <option value="Discount">Use this for offers</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
        </select>
        <br />
       
        <label>Flat, House no, Building, Company</label>
        <br />
        <input type="text" value={addressLine} style={{ height: '40px' }} onChange={(e) => setAddressLine(e.target.value)} />
        <br />
       
        <label>City/District/Town</label>
        <br />
        <input type="text" value={city} style={{ height: '40px' }}  onChange={(e) => setCity(e.target.value)} />
        <br />
      
        <label>Area, Street</label>
        <br />
        <input type="text" value={area}  style={{ height: '40px' }} onChange={(e) => setArea(e.target.value)} />
        <br />
     
        <label>Landmark</label>
        <br />
        <input type="text" value={landmark}  style={{ height: '40px' }} onChange={(e) => setLandmark(e.target.value)} />
        <br />
    
        <label>Pin Code</label>
        <input type="text" value={pinCode}  style={{ height: '40px' }} onChange={(e) => setPinCode(e.target.value)} />
        <br />

         
                <div className="button-container">
        <input type="submit" name="save" value="Save" />
        <input type="submit" name="cancel" value="Cancel" />
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
