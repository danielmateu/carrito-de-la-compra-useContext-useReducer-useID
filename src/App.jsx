import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Products } from "./components/Products"
import { IS_DEVELOPMENT } from "./config";
import { products as initialProducts } from './mocks/products.json';

const useFilters = () => {

  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return {filters, filterProducts, setFilters} 
}

function App() {

  const [products, setProducts] = useState(initialProducts)
  const {filters, filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header setFilters={setFilters}/>
      <Products products={filteredProducts}/>
      <Footer filters = {filters}/>
    </>
  )
}

export default App
