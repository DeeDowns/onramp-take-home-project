import React, { useState } from 'react'



const SearchBar: React.FC = () => {
    const [searchinput, setSearchInput] = useState<string>('')

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value)
    }

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(setSearchInput)
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
                onChange={onSearchInputChange}
                // ref={searchInputRef}
                />
            </label>
            <button>Search</button>
        </form>
    )
}

export default SearchBar