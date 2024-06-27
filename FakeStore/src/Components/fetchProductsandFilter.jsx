import React, { useEffect, useState } from 'react';

function CategoriesAndProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));

    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 shadow-md">
        <button
          onClick={() => filterByCategory('All')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterByCategory(category)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <img className="w-full" src={product.image} alt={product.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">
                Price: ${product.price}
              </p>
              <p className="text-gray-700 text-base">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesAndProducts;