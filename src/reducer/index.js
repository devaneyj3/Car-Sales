import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const carState = {
    additionalPrice: 0,
    car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
    elementExist: false
        },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
        ]
    }
    

    export const carReducer = (state = carState, action) => {
        switch(action.type) {
            case ADD_FEATURE:
                let index = state.car.features.findIndex(el => el.id === action.payload.id);
                if (index === -1) {
                    return {
                        ...state,
                        car: {...state.car,
                            features: [...state.car.features, action.payload],
                            elementExist: index
                        },
                    }
                } else {
                    return {
                        ...state,
                        car: { ...state.car,
                            elementExist: index
                        }
                    }
                }
            case REMOVE_FEATURE:
                return {
                    ...state,
                    car: {...state.car, 
                        features: [...state.car.features.filter((feature, index) => action.index !== index)]
                    }
                }  
            default:
                return state;
        }
    }
