import React from "react";
import PropTypes from "prop-types";

// Pokemon.propTypes = {
//   // name: PropTypes.string.isRequired,
//   // typing: PropTypes.array.isRequired,
// };

function Pokemon(props: any) {
  return (
    <div>
      This pokemon is {props.data.name}
      <ul>
        Types:
        {props.data.type.map((oneType: any) => (
          <li>{oneType.info.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
