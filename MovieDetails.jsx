import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items';
import { store } from './index'

export class MovieDetails extends Component {
    componentDidMount() {
        store.dispatch(itemsFetchData('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c6eced5dc2b9edf40aeda80766678f82'));
    }

    render() {
        if (this.props.hasError) {
            return <p>Error has happened</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
          <div className="container movies">
                <h1>Movie Details</h1>
                <input class="in2" type="text" />
                <button class="compare" onClick={this.compareMovies}> Show</button>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasError: state.itemsHasError,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);