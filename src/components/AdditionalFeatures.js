import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from '../actions';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  
  return (
    <div className="content">
      { props.elementExist !== -1 && props.features.length !== 0 ? <span className='warning'>This feature has already been added.</span>: null }
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    elementExist: state.car.elementExist,
    features: state.car.features
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
