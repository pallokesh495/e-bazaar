const CartReducer = (state = [], action) => {
    console.log("inside Reducers", action)
    switch (action.type) {
        case 'ADD-ITEM':
            console.log("add item not wroking?")
            return [...state, action.payload];

        case 'REMOVE-ITEM':
            return state.filter((item) => item.id !== action.payload);
           
        case 'ADD-QUANTITY':
            return state.map((item) => {
                if (item.id === action.payload ) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

        case 'SUBTRACT-QUANTITY':
            return state.map((item) => {
                if (item.id === action.payload && item.quantity !== 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

        default:
            return state;
    }
};

export default CartReducer;
