import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component{
  render(){
    return (
      <div>
        <ul>
        <li></li>
        </ul>
      </div>
    );
  }
}

/* связываем компонент со стором*/
const mapStateToProps = state => {
  return{};
};
const mapDispatchToProps = dispatch => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps) (App);