import './styles.css'
import P from 'prop-types'
import React from "react";

export const SearchInput = ({ searchValue, handleChange }) => {
    return (<input
        className='text-input'
        onChange={handleChange}
        value={searchValue}
        type='search'
        placeholder='Type your search'
    />
    )
}

SearchInput.propTypes = { 
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired
}