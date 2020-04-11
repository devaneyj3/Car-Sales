import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() =>props.addFeature(props.feature.name, props.feature.id, props.feature.price)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
