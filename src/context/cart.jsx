
import { createContext, useReducer } from "react";

// 1. Crear contexto
export const CartContext = createContext()

// const initialState = JSON.parse(localStorage.getItem('cart')) || []
const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
// const emptyState = []
const structuredClone = (obj) => JSON.parse(JSON.stringify(obj))

//update localstorage with state of cart
const updateLocalStorage = (state) => {

    localStorage.setItem('cart', JSON.stringify(state))

}

const reducer = (state, action) => {

    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case 'ADD_TO_CART':
            //Comprobar si el producto ya está en el carrito
            let { id } = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                //Una forma seria usando el structuredClone
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            // El producto no está en el carrito
            const newState = [...state, { ...actionPayload, quantity: 1 }]
            updateLocalStorage(newState)
            return newState

        case 'REMOVE_FROM_CART':
            const { id: idToRemove } = actionPayload
            updateLocalStorage(state)
            return state.filter(item => item.id !== idToRemove)

        case 'CLEAR_CART':
            updateLocalStorage([])
            return []

        default:
            return state
    }
}

// 2. Crear provider
export const CartProvider = ({ children }) => {
    // const [cart, setCart] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)

    const cart = state

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

