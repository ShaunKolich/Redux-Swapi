import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";
import {getCharacters} from '../src/actions/index'
import { connect } from 'react-redux'



class App extends Component {
  // componentDidMount() {
  //  this.props.getCharacters()
 
 
 
  render() {
    return <CharacterListView />;
  }

}



// const mapDispatchToProps = {
//   getCharacters,
// }

export default App