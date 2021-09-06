import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div>
                <label>
                    <input
                        type="search"
                        placeholder="Search for anything"
                    // size="50"
                    />
                </label>
            </div>
        )
    }
}

export default Search;