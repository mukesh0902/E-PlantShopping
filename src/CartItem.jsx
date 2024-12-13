import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
  

 

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + item.cost * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Total Cart Amount: <span className="text-success">${calculateTotalAmount()}</span>
      </h2>
      <div className="row">
        {cart.map((item) => (
          <div className="col-md-6 mb-4" key={item.name}>
            <div className="card shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.cost}</p>
                <div className="d-flex align-items-center mb-3">
                  <button
                    className="btn btn-outline-secondary me-2"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="fw-bold">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary ms-2"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <p className="card-text">
                  Total: <span className="fw-bold">${calculateTotalCost(item)}</span>
                </p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-primary me-3"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
        <button
          className="btn btn-success"
          onClick={() => alert("Checkout functionality is under development!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
