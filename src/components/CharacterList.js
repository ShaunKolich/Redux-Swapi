import React from "react";
import { connect } from 'react-redux'
import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;


// const mapStateToProps = (state) => {
//   return {
//     characters:state.characters
//   }
// }

// export default connect(mapStateToProps)(CharacterList)
