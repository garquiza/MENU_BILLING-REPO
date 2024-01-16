import React, { useState } from "react";

const MyOrder = ({ selectedItems, removeFromOrder, updateQuantity }) => {
  const [cashInput, setCashInput] = useState("");
  const [discountType, setDiscountType] = useState("none");
  const [proceedToPayment, setProceedToPayment] = useState(false);

  const calculateTotalAmount = () => {
    const totalAmount = selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Apply discount based on discount type
    const discountRate = getDiscountRate();
    const discountedAmount = totalAmount * (1 - discountRate);

    return discountedAmount;
  };

  const getDiscountRate = () => {
    switch (discountType) {
      case "seniorCitizen":
        return 0.2; // 20% discount for senior citizen
      case "student":
        return 0.15; // 15% discount for student
      default:
        return 0; // No discount for regular customer
    }
  };

  const calculateChange = () => {
    const totalAmount = calculateTotalAmount();
    const cash = parseFloat(cashInput) || 0;
    return cash - totalAmount;
  };

  const handlePayment = () => {
    const change = calculateChange();
    if (cashInput === "" || change < 0) {
      alert("Please enter a valid amount of cash.");
    } else {
      alert(
        `Payment successful. Thank you for ordering! \nChange: ₱${change.toFixed(
          2
        )}`
      );
      setProceedToPayment(true);
    }
  };

  const formatDate = () => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString(undefined, options);
  };

  const toggleProceedToPayment = () => {
    setProceedToPayment(!proceedToPayment);
  };

  return (
    <div>
      {selectedItems.length > 0 && (
        <div>
          <div className="my-order-header">
            <h1>MY ORDER</h1>
          </div>

          {/* LIST OF ORDERS */}
          <div className="order-list">
            {selectedItems.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-item-details">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-image"
                  />
                  <div className="item-info">
                    <p>{item.name}</p>
                    <p>₱{item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="quantity-controls-my-order">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button onClick={() => removeFromOrder(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {proceedToPayment ? ( // Render payment details and payment section
            <>
              {/* PAYMENT DETAILS (RECEIPT) */}
              <div className="payment-details">
                <h2>Payment Details</h2>
                <p>Date Today: {formatDate()}</p>
                <table>
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>QTY</th>
                      <th>PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>₱{item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Total Amount: ₱{calculateTotalAmount().toFixed(2)}</p>
                <div className="discount-options">
                  <label>
                    <input
                      type="radio"
                      name="discount"
                      value="none"
                      checked={discountType === "none"}
                      onChange={() => setDiscountType("none")}
                    />
                    Regular
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="discount"
                      value="seniorCitizen"
                      checked={discountType === "seniorCitizen"}
                      onChange={() => setDiscountType("seniorCitizen")}
                    />
                    Senior Citizen
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="discount"
                      value="student"
                      checked={discountType === "student"}
                      onChange={() => setDiscountType("student")}
                    />
                    Student
                  </label>
                </div>
              </div>

              {/* PAYMENT SECTION */}
              <div className="payment-section">
                <h2>Payment Section</h2>
                <label>
                  Input Cash: ₱
                  <input
                    type="number"
                    value={cashInput}
                    onChange={(e) => setCashInput(e.target.value)}
                  />
                </label>
                <button onClick={handlePayment}>Complete Payment</button>
                {cashInput !== "" && ( // Render change only if cash is entered
                  <p>Change: ₱{calculateChange().toFixed(2)}</p>
                )}
              </div>
            </>
          ) : (
            <button onClick={toggleProceedToPayment}>Proceed to Payment</button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrder;