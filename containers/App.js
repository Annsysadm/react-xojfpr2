import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { personsFetchData } from '../actions/persons';

class App extends Component{
/*вызываем функцию, которая будет вызывать данные из базы данных*/

  componentDidMount() {
    this.props.fetchData('api/muggers'); //адрес сайта, указанный в файле api
  }

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

/* связываем компонент со стором. передаем данные в стор для дальнейшего исполльзования*/
const mapStateToProps = state => {
  return{
    persons: state.persons
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(personsFetchData(url ))
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (App);