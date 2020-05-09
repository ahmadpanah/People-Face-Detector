import React from 'react'

const SearchBar = ({onInputChange, onFormSubmit}) => {
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input

                onChange = {onInputChange}
                type="text" />
            </form>
        </div>
    )
}
export default SearchBar