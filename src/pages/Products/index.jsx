import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/prodcuts/actions";
import { addToCart } from "../../redux/cart/actions"; // import the addToCart action
import styles from "./index.styles.css";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, loading } = useSelector((state) => state.productsReducer);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // dispatch the addToCart action when the button is clicked
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      {products?.map((product) => (
        <div key={product.id} className="card-container">
          <img src={product.image_link} alt={product.name} />
          <div className="product_details">
            <div className={styles.cardRating}>
              {new Array(product?.rating).fill("⭐").map((star, index) => (
                <span key={index} className={styles.star}>
                  {star}
                </span>
              ))}
            </div>

            <div>
              <h2>{product.name}</h2>
            </div>
            <div>
              <p>Price: ${product.price}</p>
            </div>
          </div>
          <button className="addBtn" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
