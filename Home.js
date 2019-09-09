import React from 'react';
import React, { Component } from 'react';
import axios from "axios";
import  MoviesList from './MoviesList';


export const Home=()=> {
  return (
    <div className="container">
      <h1>TOP Movies</h1>
              <MoviesList />
    </div>
  );
}

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      items:[],
      hasError:false,
      isLoading:false
    }
  };


  fetchData(url) {
    this.setState({ isLoading: true });
    axios.get(url).then((response) => {
          this.setState({ isLoading: false });
          this.setState({items:response.data.results})
          console.log(this.state.items[0]);
      })
      .catch((error)=>{
        console.log(error);
      });
  };

  componentDidMount() {
        this.fetchData('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3985a26801867ab5587f3065e74d2b2');
  }


  render() {
    if (this.state.hasError) return (
      <div>
        <h3>Sorry</h3>
        <p>Error while loading movies list</p>
      </div>);
    if (this.state.isLoading) return (
      <div>
        <p>This is awesome loading animation</p>
      </div>
    )

    return (
      <div className="movies">
                {this.state.items.map((item) => (
                    <div>
                    <p>{item.id}</p>
                    <img src={'https://image.tmdb.org/t/p/w185'+item.poster_path} />
                    <p  className='title'>{item.title}</p>
                    <p>Rating: {item.vote_average}</p>
                    </div>
                ))}
      </div>
    )
  }
};