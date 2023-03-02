
import './FIlter.css'
import React from 'react'

export const FIlter = () => {
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id='price' min='25' max='4000' />
            </div>
            <div>
                <label htmlFor="price">Categorias</label>
                <select name="" id="category" >
                    <option value="all">All</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}
