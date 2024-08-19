/* eslint-disable react/prop-types */
import { formatPrice, calculateDiscountPrice } from "@shared/utils/utils";
import "./ProductCard.css";

export default function ProductCard(props) {
  const { name, image, price, discount, description } = props;
  const discountedPrice = calculateDiscountPrice(price, discount);

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={image} alt={name} className="product-card__image" />
        <div className="product-card__description-overlay">
          <p className="product-card__description">{description}</p>
        </div>
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        <div className="product-card__price-container">
          {discount > 0 ? (
            <>
              <span className="product-card__original-price">
                {formatPrice(price)}
              </span>
              <span className="product-card__discounted-price">
                {formatPrice(discountedPrice)}
              </span>
            </>
          ) : (
            <span className="product-card__price">{formatPrice(price)}</span>
          )}
        </div>
      </div>
      {discount > 0 && (
        <span className="product-card__discount-tag">{discount}% OFF</span>
      )}
    </div>
  );
}
