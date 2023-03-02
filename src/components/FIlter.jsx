
import './FIlter.css'
import React, { useId, useState } from 'react'
import { useFilters } from '../hooks/useFilters'

export const FIlter = () => {

    const { filters, setFilters } = useFilters()

    // const [range, setRange] = useState(0)
    const minPriceFilterID = useId()
    const categoryFilterID = useId()

    const handleRange = (e) => {
        // setRange(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div className='price'>
                <label htmlFor={minPriceFilterID}>A partir de: </label>
                <input
                    type="range"
                    id={minPriceFilterID}
                    min='25'
                    max='1500'
                    onChange={handleRange}
                    value={filters.minPrice}
                />
                <p>{filters.minPrice} €</p>
            </div>
            <div>
                <label htmlFor={categoryFilterID}>Categorias</label>
                <select name="" id={categoryFilterID} onChange={handleChangeCategory} >
                    <option value="all">All</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}
