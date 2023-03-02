import { useState } from "react";
import { Header } from "./components/Header";

import { Products } from "./components/Products"
import { products as initialProducts} from './mocks/products.json';


function App() {

  const [products, setProducts] = useState(initialProducts)
  //Estado para los Filtros
  const [filters, setFilters] = useState({
    search: '',
    // price: 'all',
    category: 'all',
    minPrice: 0,
  })

  // Metodo para filtrar productos por categoria
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

  const filteredProducts = filterProducts(products)
  
  return (
    <>
      
      <Header/>
      <Products products={filteredProducts}
        
      />
    </>
  )
}

export default App
