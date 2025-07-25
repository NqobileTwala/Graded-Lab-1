import ProductItem from "./productItem";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No Products Found!</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
