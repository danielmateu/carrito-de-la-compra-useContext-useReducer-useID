import { useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons"
import './Cart.css'


export const Cart = () => {

    const cartCheckBoxId = useId()
    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBoxId} className="cart-checkbox" hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="Cosa" />
                    </li>
                    <div>
                        <strong>MacBook</strong> - 2400€
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <div>
                            <button>+</button>
                            {/* <button>-</button> */}
                        </div>
                        <div>
                            <button><RemoveFromCartIcon /></button>
                            {/* <button><ClearCartIcon /></button> */}
                        </div>
                    </footer>
                </ul>
            </aside>
        </>
    )
}
