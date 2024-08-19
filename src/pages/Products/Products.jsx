import ProductGrid from "@components/Products/ProductGrid";
import { coffeeProducts } from "@shared/data/coffeeProducts";
import "./Products.css";

export default function Products() {
  return (
    <main className="products-page">
      <section className="products-page__content">
        <h1 className="products-page__title">Our Products</h1>
        <ProductGrid products={coffeeProducts} />
      </section>
    </main>
  );
}
