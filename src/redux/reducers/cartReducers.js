import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [{ name: 'lenovo Laptop', id: 1 },
    { name: 'asus Laptop', id: 2 },
    { name: 'hp Laptop', id: 3 },
    { name: 'make Laptop', id: 4 },
    { name: 'Tosipa Laptop', id: 5 }
    ]
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log(action);
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);

            return { ...state, cart: remainingCart }
        default:
            return state;
    };
};

export default cartReducers;
