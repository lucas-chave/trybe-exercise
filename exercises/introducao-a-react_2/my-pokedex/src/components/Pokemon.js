import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {

  return (
    <div>
      <h1>{props.pokemon.name}</h1>
      <h3>{props.pokemon.type}</h3>
      <h3>{props.pokemon.averageWeight.value} {props.pokemon.averageWeight.measurementUnit}</h3>
      <img src={props.pokemon.image} alt={props.pokemon.name}/>
    </div>
  )
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
}

export default Pokemon;
