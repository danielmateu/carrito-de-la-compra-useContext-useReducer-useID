import React from 'react'
import { FIlter } from './FIlter'
import { CartIcon } from './Icons'

export const Header = ({setFilters}) => {
    return (
        <>
            <h1>Shopping Card <CartIcon /></h1>
            <FIlter onChange={setFilters} />

        </>
    )
}
