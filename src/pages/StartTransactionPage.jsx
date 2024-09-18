import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StartTransactionPage = () => {
  const [formFields, setFormFields] = useState({
    transactionTitle: '',
    role: '0',
    currency: '0',
    inspectionPeriod: '',
    itemName: '',
    price: '',
    itemCategory: '',
    itemDescription: '',
    paymentMethod: '0',
  });

  const [formComplete, setFormComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkFormComplete();
  }, [formFields]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const checkFormComplete = () => {
    const allFieldsFilled = Object.values(formFields).every(field => field !== '' && field !== '0');
    setFormComplete(allFieldsFilled);
  };

  const handleChatWithSupport = () => {
    console.log("Initiating chat with support...");
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      function add_chatinline(){
        var hccid=58792352;
        var nt=document.createElement("script");
        nt.async=true;
        nt.src="https://www.mylivechat.com/chatinline.aspx?hccid="+hccid;
        var ct=document.getElementsByTagName("script")[0];
        ct.parentNode.insertBefore(nt, ct);
      }
      add_chatinline();
    `;
    document.body.appendChild(script);
  };

  const handleAddItem = () => {
    console.log("Add Item button clicked");
    console.log("Payment method:", formFields.paymentMethod);
    
    if (formFields.paymentMethod === '1') {
      // Bitcoin payment
      console.log("Navigating to Bitcoin payment page...");
      const transactionID = [...Array(26)].map(() => (Math.random().toString(36)[2])).join('');

      const price = parseFloat(formFields.price);
      if (isNaN(price)) {
        alert("Please enter a valid price.");
         return;
}
navigate('/bitcoin-payment', {
  state: {
    price: price,
    currency: formFields.currency,
    transactionID: transactionID,
  },
});
    } else if (formFields.paymentMethod === '2') {
      Swal.fire({
        title: "Item added",
        text: "Chat with support to complete payment.",
        icon: "success"
      });
      // Other payment methods - initiate chat with support
      console.log("Initiating chat support...");
      handleChatWithSupport();
    } else {
      console.log("Invalid payment method selected");
      alert("Please select a valid payment method");
    }
  };

  return (
    <div className='form-container'>
      <form className="transaction-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Start transaction</h2>
        <input
          type="text"
          name="transactionTitle"
          id="transaction"
          placeholder='Transaction title'
          value={formFields.transactionTitle}
          onChange={handleFieldChange}
          required
        />

        <div className="form-groups">
          <div className="form-group">
            <label htmlFor="role">My role</label>
            <select
              name="role"
              id="role"
              value={formFields.role}
              onChange={handleFieldChange}
              required
            >
              <option value="0">Select role</option>
              <option value="1">Buyer</option>
              <option value="2">Seller</option>
              <option value="3">Broker</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select
              name="currency"
              id="currency"
              value={formFields.currency}
              onChange={handleFieldChange}
              required
            >
              <option value="0">Select currency</option>
              <option value="1">USD</option>
              <option value="2">GBP</option>
              <option value="3">EUR</option>
              <option value="4">AUD</option>
              <option value="5">CAD</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="inspectionPeriod">Inspection period (days)</label>
            <input
              type="number"
              name="inspectionPeriod"
              value={formFields.inspectionPeriod}
              onChange={handleFieldChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="itemName">Transaction details</label>
          <div className="inputs">
            <input
              type="text"
              name="itemName"
              placeholder="Item name"
              value={formFields.itemName}
              onChange={handleFieldChange}
              required
            />
            <input
             type="number"
              name="price"
              placeholder="Price"
              value={formFields.price}
              onChange={handleFieldChange}
              required
            step="0.01"
/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="itemCategory">Item category</label>
          <input
            type="text"
            name="itemCategory"
            value={formFields.itemCategory}
            onChange={handleFieldChange}
            required
          />
        </div>

        <input
          type="text"
          name="itemDescription"
          placeholder="Item description"
          value={formFields.itemDescription}
          onChange={handleFieldChange}
          required
        />

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            name="paymentMethod"
            id="payment-method"
            value={formFields.paymentMethod}
            onChange={handleFieldChange}
            required
          >
            <option value="0">Select payment method</option>
            <option value="1">Bitcoin</option>
            <option value="2">Others</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleAddItem}
          disabled={!formComplete}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default StartTransactionPage;

 



