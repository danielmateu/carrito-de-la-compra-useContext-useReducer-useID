import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Products } from "./components/Products"
import { IS_DEVELOPMENT } from "./config";
import { CartProvider } from "./context/cart";
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from './mocks/products.json';

// const useFilters = () => {

//   const {filters, setFilters} = useContext(FiltersContext)
//   // console.log(filters)

//   const filterProducts = (products) => {
//     return products.filter((product) => {
//       return (
//         product.price >= filters.minPrice &&
//         (
//           filters.category === 'all' ||
//           product.category === filters.category
//         )
//       )
//     })
//   }

//   return {filters, filterProducts, setFilters} 
// }

function App() {

  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT  && <Footer />}
    </CartProvider>
  )
}

export default App
