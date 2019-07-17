import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      return <p>Account Loading...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStatesToProps = (state)=>{
console.log(state)
  return {
  characters:state.charsReducer.characters
  }
  
}


export default connect(
  mapStatesToProps,
  {
    getCharacters
  }
)(CharacterListView);
