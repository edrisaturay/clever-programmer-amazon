// Always listening for a dispatch

export const initialState = {
    basket: [], 
}




// State =>
// Action => What we wanna do
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
        //get the previous state and add it to the current state and return 
            return {
                ...state, 
                basket: [...state.basket, action.item], 
            }
        default: 
            return state;
    }
}

export default reducer;

