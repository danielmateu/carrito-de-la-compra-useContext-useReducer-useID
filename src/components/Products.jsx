import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export const Products = ({ products }) => {

    const { addToCart, cart, removeFromCart, clearCart } = useCart()

    const checkIfProductIsInCart = (product) => {
        return cart.some((item) => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 12).map(product => {
                    const isInCart = checkIfProductIsInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <strong>{product.price}</strong> €
                            </div>
                            <button style={{backgroundColor: isInCart ? 'red' : '#09f'}} className='addToCart' onClick={() => isInCart ? removeFromCart(product) : addToCart(product)}>
                                {
                                    isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                }
                            </button>
                        </li>
                    )
                })}
            </ul>
            {/* Button addToCart */}
        </main>

    )
}

