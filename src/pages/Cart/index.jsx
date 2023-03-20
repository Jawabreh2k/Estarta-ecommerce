import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cart/actions";
import styles from "./index.styles.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.items);

  const handleUpdateQuantity = (productId, quantity) => {
    console.log(quantity);
    if (quantity === 0) {
      dispatch(removeFromCart(productId));
    } else if (quantity > 0) {
      dispatch(updateQuantity(productId, quantity));
    }
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="cart-item-container">
                  <img
                    src={item.image_link}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <div>{item.name}</div>
                  </div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-quantity-btn"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <div className="cart-item-quantity-value">
                    {item.quantity}
                  </div>
                  <button
                    className="cart-item-quantity-btn"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">Total: ${getTotalPrice()}</div>
    </div>
  );
}
