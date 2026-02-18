import React from "react";
import "./ProductCard.css";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const fullStars = Math.floor(product.rating.rate || 0);
        const emptyStars = 5 - fullStars;

        return (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="rating">
              {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`}>
                  <Star size={10} fill="#ffc107" color="#ffc107" />
                </span>
              ))}
              {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`}>
                  <Star size={10} fill="#f0ce69a2" color="#f0ce69a2" />
                </span>
              ))}
              <span className="count">({product.rating.count})</span>
            </div>

            <h3 className="title">
              {product.title.length > 40
                ? product.title.substring(0, 40) + "..."
                : product.title}
            </h3>

            <div className="bottom-row">
              <p className="price">${product.price}</p>
              <button className="cart-btn">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
