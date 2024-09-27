import React, { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import CartContext from "../../hooks/CartContext";

const CheckoutPage = () => {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData, items);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Add more fields for phone number, pin code, address, etc. */}

        {/* Payment Method */}
        <div className="mb-4">
          <label
            htmlFor="payment-method"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Method
          </label>
          <select
            id="payment-method"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none" // Add appearance-none to remove default styling
            required
          >
            <option value="card">Credit Card</option>
            <option value="upi">UPI</option>
            {/* Add more payment methods */}
          </select>
        </div>

        {/* Payment Type (if applicable) */}
        {/* Add conditional fields based on payment method */}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </Form>
    </div>
  );
};

export default CheckoutPage;
