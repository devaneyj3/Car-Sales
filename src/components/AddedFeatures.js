import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log(props.features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map((item, index) => (
            <AddedFeature key={item.id} feature={item} removeFeature={()=> props.removeFeature(index)} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
