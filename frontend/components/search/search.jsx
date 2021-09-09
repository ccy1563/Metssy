import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

    render() {
        return (
            <div className="search-bar">
                <label className="search-label" htmlFor="search-input">
                </label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search for anything"
                    />
                <button className="search-icon-button">
                    <SearchIcon />
                </button>
            </div>
        )
    }
}

export default Search;