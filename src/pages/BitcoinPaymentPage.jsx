import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const BitcoinPaymentPage = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isConfirming, setIsConfirming] = useState(false); // State for button loading
  const location = useLocation();
  const { price, currency, transactionID } = location.state || {};
  const walletAddress = 'bc1q2qsrha9wqgv0dek4v7rf8lmmxqsr3qrhnqhqn6'; // Your wallet address
  const qrCodeUrl = './src/assets/images/qr-code.png';

  useEffect(() => {
    const fetchBtcPrice = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        const btcUsdPrice = data.bpi.USD.rate_float;
        const priceInBtc = price / btcUsdPrice;
        setBtcPrice(priceInBtc);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (price) {
      fetchBtcPrice();
    }
  }, [price]);

  const handleConfirmClick = () => {
    setIsConfirming(true); // Start button loading state
    setTimeout(() => {
      Swal.fire({
        title: "Processing",
        text: "Payment Processing, Contact Support.",
        icon: "info"
      });
      loadChatSupport(); // Inject chat support script immediately after the alert
      setIsConfirming(false); // Reset button loading state
    }, 15000); // Simulate 15 seconds delay
  };

  const loadChatSupport = () => {
    var hccid = 58792352;
    var nt = document.createElement("script");
    nt.async = true;
    nt.src = "https://www.mylivechat.com/chatinline.aspx?hccid=" + hccid;
    var ct = document.getElementsByTagName("script")[0];
    ct.parentNode.insertBefore(nt, ct);
  };

  if (!price || !currency || !transactionID) {
    return <div>Error: Missing transaction details</div>;
  }

  return (
    <div className='btc-payment'>
      <div className="btc-payment-details">
        <h1>Bitcoin Payment</h1>
        {isLoading ? (
          <p>Calculating BTC price...</p>
        ) : btcPrice ? (
          <>
            <p>Scan the QR code or send {btcPrice.toFixed(8)} BTC to the wallet address below.</p>
            <img src={qrCodeUrl} alt="QR Code for Bitcoin wallet" />
            <p>Wallet address: {walletAddress}</p>
            <p>Price in BTC: {btcPrice.toFixed(8)} BTC</p>
            <p>Transaction ID: {transactionID}</p> 
            <div className="button">
              <button 
                className="btn-confirm" 
                onClick={handleConfirmClick}
                disabled={isConfirming} // Disable button during confirmation
              >
                {isConfirming ? 'Processing...' : 'Confirm'}
              </button>
            </div>  
          </>
        ) : (
          <p>Error: Unable to calculate BTC price. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default BitcoinPaymentPage;

