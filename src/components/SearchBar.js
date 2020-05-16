import React from 'react'

const SearchBar = ({onInputChange, onFormSubmit}) => {
    return (
        <div>
            <form onSubmit={onFormSubmit}>
            <div className="ui search">
                <div className="ui icon input">
                     <input
                     style= {{ width: "500px"}}
                     onChange={onInputChange}
                     className="prompt"
                     type="text"
                     placeholder="Common passwords..."
                     />
                     <i className="search icon" />
                 </div>
                <div className="results" />
            </div>
            </form>
        </div>
    );
};
export default SearchBar;