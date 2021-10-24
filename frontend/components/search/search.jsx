import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect, withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            search: false,
        }
        // this.handleSubmit = this.handleSubmit(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    update(property) {
        console.log(this.state.query)
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.setState({ "search": true });
        console.log(`${this.state.query} working?}`)

        // query is set and need to use query to filter through fetched products
    }

    handleKeypress = e => {
        // console.log(e.key);
        if (e.key === "Enter") {
            // console.log("pressing enter")
            this.handleSubmit(e);
        }
    };

    render() {
        // debugger
        return (
            <div className="search-bar">
                <label className="search-label" htmlFor="search-input">
                </label>
                <input
                    id="search-input"
                    type="search"
                    placeholder="Search for anything"
                    onChange={this.update("query")}
                    onKeyPress={this.handleKeypress}
                />
                <button 
                    className="search-icon-button" 
                    onClick={(e) => this.handleSubmit(e)}
                >
                    <SearchIcon />
                </button>
                {this.state.search ? 
                 <Redirect to={{
                    pathname: '/search',
                    state: { stateName: this.state.query },
                    search: "?" + this.state.query,
                    fetchProducts: this.props.fetchProducts,
                }} /> : null}
            </div>
        )
    }
}

export default withRouter(Search);