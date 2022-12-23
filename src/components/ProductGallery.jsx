import { React, useState } from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={product.imageUrl} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category}
        </span>
      </div>
    </div>
  );
};

const ProductList = ({ products, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // Filter the products based on the selected category
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  // Get the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        className="bottom-0 z-10 flex justify-center"
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4 lg:inline-block">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-item inline-block px-1 rounded-md lg:inline-block"
          >
            <a
              onClick={() => paginate(number)}
              href="#"
              className={`page-link text-black hover:bg-blue-600 ${
                currentPage === number ? "bg-blue-500" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ProductGallery = () => {
  const [filter, setFilter] = useState("");
  const products = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "electronics",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "clothing",
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "furniture",
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "home decor",
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "electronics",
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "clothing",
    },
    {
      id: 7,
      name: "Product 7",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "furniture",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <ProductFilter setFilter={setFilter} />
      <ProductList products={products} filter={filter} />
    </div>
  );
};

const ProductFilter = ({ setFilter }) => {
  return (
    <div className="flex justify-center mb-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="block appearance-none w-1/4 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
        <option value="home decor">Home Decor</option>
      </select>
    </div>
  );
};

export default ProductGallery;
