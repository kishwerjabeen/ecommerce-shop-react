import React, { createContext, useState, useEffect } from 'react';

// creat context

export const ProductContext = createContext();

const ProductProvider = ({ childern }) => {

  //product state
  const [products, setProducts] = useState([]);

  // fetch products 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
    };
    fetchProducts();
  }, [])

  return
  <ProductContext.Provider>
    {childern}
  </ProductContext.Provider>
};

export default ProductProvider;
