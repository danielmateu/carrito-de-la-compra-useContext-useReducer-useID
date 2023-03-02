import { createContext, useState } from 'react';

// 1 crear el contexto Es el que tenemos que consumir
export const FiltersContext = createContext();

// 2 crear el provider Este nos provee de acceso al contexto
export const FiltersProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        // search: '',
        category: 'all',
        minPrice: 0,
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
