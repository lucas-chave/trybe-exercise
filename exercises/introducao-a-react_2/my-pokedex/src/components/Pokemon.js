import React from "react";
import PropTypes from "prop-types";
import "../css/pokemon.css";

function Pokemon(props) {
  return (
      <div className="container-pokemon">
        <h1 className="title-pokemon">{props.pokemon.name}</h1>
        <h3>{props.pokemon.type}</h3>
        <h3>{props.pokemon.averageWeight.value}{" "}{props.pokemon.averageWeight.measurementUnit}</h3>
        <img src={props.pokemon.image} alt={props.pokemon.name} />
      </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
};

export default Pokemon;
