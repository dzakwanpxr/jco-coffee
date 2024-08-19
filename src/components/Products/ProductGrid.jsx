/* eslint-disable react/prop-types */
import ProductCard from "@shared/components/ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
