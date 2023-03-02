import './Products.css';
import { AddToCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export const Products = ({products}) => {

    const {addToCart} = useCart()

    return (
        <main className='products'>
            <ul>
                {products.slice(0,12).map((product) => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <strong>{product.price}</strong> €
                        </div>
                        <button className='addToCart' onClick={() => addToCart(product)}>
                            <AddToCartIcon />
                        </button>
                    </li>
                ))}
            </ul>
            {/* Button addToCart */}
        </main>

    )
}

