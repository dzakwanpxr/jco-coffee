/* eslint-disable react/prop-types */
import ProductCard from "@shared/components/ProductCard/ProductCard";

export default function HomePageProducts(props) {
  const { products } = props;
  return (
    <section className="home-page-products">
      <h2 className="home-page-products__title">OUR FEATURED PRODUCTS</h2>
      <div className="home-page-products__grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
