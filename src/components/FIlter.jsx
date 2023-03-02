
import './FIlter.css'
import React, { useState } from 'react'

export const FIlter = ({onChange}) => {

    const [range, setRange] = useState(0)

    const handleRange = (e) => {
        setRange(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        onChange(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div className='price'>
                <label htmlFor="price">A partir de: </label>
                <input type="range" id='price' min='25' max='1500' onChange={handleRange} />
            {
                range > 0 && <p>{range} €</p>
            }
            </div>
            <div>
                <label htmlFor="price">Categorias</label>
                <select name="" id="category" onChange={handleChangeCategory} >
                    <option value="all">All</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}
