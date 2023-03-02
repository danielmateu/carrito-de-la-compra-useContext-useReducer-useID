import './Products.css';
import { AddToCartIcon } from './Icons';
// Import data from products.json


export const Products = ({products}) => {
    return (
        <main className='products'>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                        <button className='addToCart'>
                            <AddToCartIcon />
                        </button>
                    </li>
                ))}
            </ul>
            {/* Button addToCart */}
        </main>

    )
}

