import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getCartTotalQuantitySelector = createSelector(
    (state: RootState) => state.Cart.items,
    (items) => {
    const totalQuantity = Object.values(items).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return totalQuantity;
    }
);

export { getCartTotalQuantitySelector };