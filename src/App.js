import React, { useState } from "react";
import SearchBar from "./searchBar";
import ProductList from "./productList";

function App() {
  const products = [
    {
      id: 1,
      name: "Blue T-Shirt",
      category: "Clothing",
      price: 150,
      inStock: true,
    },
    {
      id: 2,
      name: "Black Jeans",
      category: "Clothing",
      price: 300,
      inStock: false,
    },
    {
      id: 3,
      name: "Red Sneakers",
      category: "Shoes",
      price: 500,
      inStock: true,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 250,
      inStock: true,
    },
    {
      id: 5,
      name: "Office Chair",
      category: "Furniture",
      price: 1200,
      inStock: false,
    },
    { id: 6, name: "Bed", category: "Furniture", price: 3000, inStock: false },
    {
      id: 7,
      name: "Fridge",
      category: "Appliances",
      price: 12000,
      inStock: true,
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const stockMatch = !inStockOnly || product.inStock;
    return nameMatch && categoryMatch && stockMatch;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "cursive" }}>
      <h1 style={{textDecoration: "underline"}}>Product catalog</h1>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
