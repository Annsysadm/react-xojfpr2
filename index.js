import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore( 
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
  /* создали стор, applyMiddleware позволяет использовать асинхронные действия, 
  оборачиваем в composeWithDevTools чтобы потом смотреть как меняются данные в разные промежутки времени */

)
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
// serviceWorker.unregister();
