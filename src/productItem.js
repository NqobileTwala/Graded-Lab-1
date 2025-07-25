function ProductItem({ product }) {
  return (
    <li key={product.id}>
      {product.name} - {product.category} - R{product.price}{" "}
      {product.inStock ? "(In Stock)" : "(Out of Stock)"}
    </li>
  );
}

export default ProductItem;
