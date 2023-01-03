import { React, useState } from "react";

const ProductCard = ({ product }) => {
  // id: 3,
  // name: "Product 3",
  // imageUrl: "https://via.placeholder.com/150",
  // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // category: "furniture",
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24">
      <div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
        <a className="block mx-auto max-w-max" href="#">
          <img
            className="h-40 object-cover"
            src="uinel-assets/images/ecommerce-product-list/macbook-pro-17.png"
            alt=""
          />
        </a>
      </div>
      <a href="#">
        <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
          {product.name}
        </p>
      </a>
      <p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
        <span className="text-base pr-2">$</span>
        <span>2090.59</span>
      </p>
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
    <div className="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-20 md:mb-40">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
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
    <section>
      <div className="pb-9 text-center border-b border-black border-opacity-5">
        <div className="relative">
          <h2
            className="mb-5 md:mb-0 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center"
            contentEditable="false"
          >
            New in
          </h2>
          <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">
            449 products found
          </span>
        </div>
      </div>
      <ProductFilter setFilter={filter} />
      <ProductList products={products} filter={filter} />
    </section>
  );
};

const ProductFilter = ({ setFilter }) => {
  return (
    <div className="flex justify-center mb-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
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
