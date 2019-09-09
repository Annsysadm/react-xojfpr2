import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items';
import { store } from './index'

export const Home=()=> {
  return (
    <div className="container">
      <h1>The world of Cinema</h1>
              <MoviesList />
    </div>
  );
}

export class MoviesList extends Component {
    componentDidMount() {
        store.dispatch(itemsFetchData('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3985a26801867ab5587f3065e74d2b2'));
    }

    render() {
        if (this.props.hasError) {
            return <p>Error has happened</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        console.log(this.props)
        return (
          <div className="container movies">
                <h1>Movies List</h1>
                {this.props.items.map((item) => (
                  <div>
                  <img src={'https://image.tmdb.org/t/p/w185'+item.poster_path} />
                  <p  className='title'>{item.title}</p>
                  <p>&#11089; {item.vote_average}</p>
                  <p  className='movie_id'>{item.genres}</p>
                  </div>
              ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);