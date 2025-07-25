function SearchBar({
  searchText,
  setSearchText,
  selectedCategory,
  setSelectedCategory,
  inStockOnly,
  setInStockOnly,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: "5px",
          marginBottom: "20px",
          display: "block",
          borderRadius: "5px",
          backgroundColor: "beige",
        }}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{
          marginBottom: "20px",
          display: "block",
          borderRadius: "5px",
          backgroundColor: "beige",
        }}
      >
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
        <option value="Appliances">Appliances</option>
      </select>

      <label style={{ marginBottom: "20px", display: "block" }}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        Show only in-stock items
      </label>
    </div>
  );
}
export default SearchBar;
