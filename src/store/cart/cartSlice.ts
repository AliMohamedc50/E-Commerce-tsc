import { TProduct } from "@customTypes/Product";
import { createSlice } from "@reduxjs/toolkit/react";

export interface ICartSlice {
    items: {[key: number]:number};
    productFullinfo: TProduct[]
} 

const initialState : ICartSlice = {
    items: {},
    productFullinfo: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            let id = action.payload;
            if (state.items[id]) {
                state.items[id]++
            }else {
                state.items[id] = 1
            }
        }
    }
})




// export {getCartTotalQuantity}
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer