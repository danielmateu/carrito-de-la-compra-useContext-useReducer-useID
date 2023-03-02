
import './FIlter.css'
import React, { useId, useState } from 'react'

export const FIlter = ({onChange}) => {

    const [range, setRange] = useState(0)
    const minPriceFilterID = useId()
    const categoryFilterID = useId()

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
                <label htmlFor={minPriceFilterID}>A partir de: </label>
                <input type="range" id={minPriceFilterID} min='25' max='1500' onChange={handleRange} />
            {
                range > 0 && <p>{range} €</p>
            }
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
