import React from "react";
import PropTypes from "prop-types";

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  typing: PropTypes.array.isRequired,
};

function Pokemon(props: any) {
  return (
    <div>
      Name: {props.name}
      <ul>
        Types:
        {props.typing.map((type: any) => (
          <li>{type.info.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
