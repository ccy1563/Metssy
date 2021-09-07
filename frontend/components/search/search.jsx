import React from 'react';

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
                    // size="50"
                    />
            </div>
        )
    }
}

export default Search;