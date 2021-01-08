import React, { useState } from 'react'

const SearchBar: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('')

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value)
    }

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(searchInput)
        setSearchInput('')
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <label htmlFor='search-bar'>
            Search:
            <input 
                type='text' 
                name='search-bar'
                id='search-bar'
                value={searchInput}
                onChange={handleSearchInputChange}
                />
            </label>
            <button>Search</button>
        </form>
    )
}

export default SearchBar