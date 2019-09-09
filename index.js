import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { About } from './About';
import { Compare } from './Compare';
import './style.css';
import configureStore from './Store/config.js';
import MoviesList  from './MoviesList';

export const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anna',
    };
  };

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/">The TOP Movies</Link>
              </li>
              <li>
                <Link to="/compare/">Who's best?</Link>
              </li>
              <li>
                <Link to="/about/">Call me</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={MoviesList} />
          <Route path="/compare/" component={Compare} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
