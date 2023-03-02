import React from 'react'
import { Cart } from './Cart'
import { FIlter } from './FIlter'
import { CartIcon } from './Icons'

export const Header = () => {
    return (
        <header>
            <h1>Shopping Card</h1>
            <Cart/>
            <FIlter  />

        </header>
    )
}
