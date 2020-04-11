export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_TOTAL = 'ADD_TOTAL';

export const addFeature = (name, id, price) => {
    return {
        type: ADD_FEATURE,
        payload: {
            name,
            id,
            price
        }
    }

}

export const removeFeature = (index) => {
    return {
        type: REMOVE_FEATURE,
        index
    }
}