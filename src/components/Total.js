import React from 'react';
import { connect } from 'react-redux';
const Total = props => {


    const totalPrice = props.features.reduce((acc, current) => {
      return acc += current.price
    }, props.additionalPrice);


  return (
    
    <div className="content">
      <h4>Total Amount: ${props.price + totalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice,
    features: state.car.features
  }
}

export default connect(mapStateToProps, {  })(Total);