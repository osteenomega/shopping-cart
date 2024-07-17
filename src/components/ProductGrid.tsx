import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products } = useProducts();

  return (
    <div className="grid md:grid-cols-3 gap-y-8 max-w-6xl p-6 place-content-center justify-center mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
