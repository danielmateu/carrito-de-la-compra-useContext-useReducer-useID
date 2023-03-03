import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css'
import { useCart } from "../hooks/useCart"


export const Cart = () => {

    
    const { cart, addToCart, clearCart } = useCart()
    const cartCheckBoxId = useId()

    function CartItem({thumbnail, title, price, quantity, addToCart}) {

        return (
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> - {price}€
                </div>
                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <div>
                        <button
                            onClick={() => addToCart()}
                        >+</button>
                        {/* <button
                            onClick={() => removeFromCart()}
                        >-</button> */}
                    </div>
                    <div>
                        {/* <button
                            onClick={() => removeFromCart()}
                        ><RemoveFromCartIcon /></button> */}
                        {/* <button
                            onClick={() => clearCart()}
                        ><ClearCartIcon /></button> */}
                    </div>
                </footer>
            </li>
        )
    }


    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBoxId} className="cart-checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            {...product}
                            addToCart={() => addToCart(product)}
                            // removeFromCart={() => removeFromCart(product)}
                        />
                    ))}

                </ul>
                <button
                    onClick={() => clearCart()}
                ><ClearCartIcon /></button>
            </aside>
        </>
    )
}
