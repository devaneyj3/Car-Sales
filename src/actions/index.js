export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (name, id, price) => {
    return {
        type: ADD_FEATURE,
        payload: name,
        id,
        price
    }

}

export const removeFeature = () => {

}