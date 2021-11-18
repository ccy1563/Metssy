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
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ "search": true });
    }

    handleKeypress(e) {
        if (e.key === "Enter") this.handleSubmit(e);
    };

    // Makes it so that component only re-renders on "Enter" keypress or button click.
    componentDidUpdate() {
        if (this.state.search) this.setState({search: false})
    }

    render() {
        return (
            <div className="search-bar">
                <label className="search-label" htmlFor="search-input">
                </label>
                <input
                    id="search-input"
                    type="search"
                    placeholder="Search for anything"
                    onChange={this.update("query")}
                    onKeyPress={(e) => this.handleKeypress(e)}
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