import React, { useState } from 'react';
import { useCart } from './CartContext';
import confetti from 'canvas-confetti';

const CartPage = ({ goHome }) => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const [showPayment, setShowPayment] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', upi: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const triggerCelebration = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    
    // Create rocket trail effect
    const createRocket = (x, delay) => {
      setTimeout(() => {
        // Rocket trail
        confetti({
          particleCount: 20,
          angle: 90,
          spread: 10,
          origin: { x, y: 1 },
          startVelocity: 50,
          gravity: 0.3,
          ticks: 100,
          colors: ['#ff6b35', '#ff8c42', '#ffa726'],
          shapes: ['circle'],
          scalar: 0.8
        });
        
        // Rocket explosion after delay
        setTimeout(() => {
          confetti({
            particleCount: 100,
            angle: 90,
            spread: 360,
            origin: { x, y: 0.3 },
            startVelocity: 30,
            gravity: 0.8,
            ticks: 200,
            colors: ['#ff0000', '#ff6b00', '#ffd700', '#ff69b4', '#00ff00', '#00bfff'],
            shapes: ['circle'],
            scalar: 1.2
          });
        }, 800);
      }, delay);
    };
    
    // Launch multiple rockets with different delays
    createRocket(0.2, 0);
    createRocket(0.5, 300);
    createRocket(0.8, 600);
    createRocket(0.1, 900);
    createRocket(0.9, 1200);
    
    // Add cracker effect (ground level burst)
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 90,
        spread: 180,
        origin: { x: 0.3, y: 1 },
        startVelocity: 20,
        gravity: 1.2,
        ticks: 150,
        colors: ['#ff6b35', '#ff8c42', '#ffa726', '#ffcc02'],
        shapes: ['circle'],
        scalar: 0.6
      });
    }, 400);
    
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 90,
        spread: 180,
        origin: { x: 0.7, y: 1 },
        startVelocity: 20,
        gravity: 1.2,
        ticks: 150,
        colors: ['#ff6b35', '#ff8c42', '#ffa726', '#ffcc02'],
        shapes: ['circle'],
        scalar: 0.6
      });
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    triggerCelebration();
  };

  return (
    <section className="cart-page-section">
      <div className="container">
        <button className="back-btn" onClick={goHome}>&larr; Back</button>
        <h2 className="section-title">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item, idx) => (
                <li key={idx} className="cart-item">
                  <span>{item.icon} {item.title}</span>
                  <span className="cart-item-price">${item.price}</span>
                  <button onClick={() => removeFromCart(item.title)} className="remove-btn">Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>Total:</span>
              <span className="cart-total-price">${total}</span>
            </div>
            {!showPayment && (
              <button className="btn-primary" onClick={() => setShowPayment(true)}>Proceed to Payment</button>
            )}
            {showPayment && (
              <div className="cart-payment-section">
                <h3>Pay via UPI</h3>
                <div className="qr-and-form">
                  <div className="upi-qr">
                    <img src="/phonepe-qr.png" alt="PhonePe QR Code" />
                    <p>Scan this QR code with your UPI app</p>
                  </div>
                  <div className="upi-form">
                    {submitted ? (
                      <div className="payment-success">
                        <h4>Thank you for your payment!</h4>
                        <p>We have received your details and will verify your payment soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="payment-form">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="upi">UPI Transaction ID</label>
                          <input type="text" id="upi" name="upi" value={form.upi} onChange={handleChange} required placeholder="Enter UPI Transaction ID" />
                        </div>
                        <button type="submit" className="btn-primary">Submit Payment</button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <style jsx>{`
        .cart-page-section {
          padding: 6rem 0;
          min-height: 80vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }
        .container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          color: #333;
        }
        .back-btn {
          margin-bottom: 3rem;
          margin-top: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%) !important;
          color: white !important;
          border: none !important;
          padding: 0.75rem 1.5rem !important;
          border-radius: 10px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3) !important;
          backdrop-filter: none !important;
        }
        .back-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4) !important;
          border-color: transparent !important;
        }
        .cart-list {
          list-style: none;
          margin: 2rem 0;
          padding: 0;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          background: rgba(0,0,0,0.05);
          padding: 1rem;
          border-radius: 10px;
        }
        .cart-item-price {
          color: #00a8cc;
          font-weight: 600;
          margin: 0 1rem;
        }
        .remove-btn {
          background: none;
          border: none;
          color: #e74c3c;
          cursor: pointer;
          font-weight: 600;
        }
        .cart-total {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #333;
        }
        .cart-total-price {
          color: #00a8cc;
          margin-left: 1rem;
        }
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 15px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          display: block;
          margin: 0 auto;
          margin-top: 2rem;
          margin-bottom: 1rem;
          min-width: 200px;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }
        .cart-payment-section {
          margin-top: 3rem;
          background: rgba(0,0,0,0.05);
          padding: 2rem;
          border-radius: 20px;
        }
        .qr-and-form {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .upi-qr {
          text-align: center;
        }
        .upi-qr img {
          width: 200px;
          height: 200px;
          border-radius: 16px;
          border: 2px solid #00a8cc;
          margin-bottom: 0.5rem;
        }
        .upi-form {
          flex: 1;
          min-width: 250px;
        }
        .payment-form {
          background: none;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #00a8cc;
          font-weight: 600;
        }
        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 10px;
          border: 1px solid rgba(0,168,204,0.3);
          background: rgba(255,255,255,0.9);
          color: #333;
          font-size: 1rem;
        }
        .form-group input:focus {
          outline: none;
          border-color: #e74c3c;
        }
        .payment-success {
          text-align: center;
          color: #00a8cc;
        }
      `}</style>
    </section>
  );
};

export default CartPage; 