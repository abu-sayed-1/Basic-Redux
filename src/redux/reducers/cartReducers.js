import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [   {name: 'lenovo Laptop', id: 1},
    {name: 'asus Laptop', id: 2},
    {name: 'hp Laptop', id: 3},
    {name: 'make Laptop', id: 4},
    {name: 'Tosipa Laptop', id: 5}]
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.id],
                products: state.products
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return { cart: remainingCart }
        default:
            return state;
    };
};

export default cartReducers;


// import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

// const initialState = {
//     cart: [],
//     products: [   {name: 'lenovo Laptop', id: 1},
//     {name: 'asus Laptop', id: 2},
//     {name: 'hp Laptop', id: 3},
//     {name: 'make Laptop', id: 4},
//     {name: 'Tosipa Laptop', id: 5}]
// };

// const cartReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return {
//                 products: [...state.products, action.id]
//             };
//         case REMOVE_FROM_CART:
//             const id = action.id;
//             const remainingCart = state.products.filter(item => item !== id);
//             return { products: remainingCart }
//         default:
//             return state;
//     };
// };

// export default cartReducers;