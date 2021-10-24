import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

    render() {
        return (
            <div className="search-bar">
                <form action="">
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
                </form>
            </div>
        )
    }
}

export default Search;