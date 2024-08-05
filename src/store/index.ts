import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/categoriesSlice'
import products from './Products/productSlice'
import Cart from './cart/cartSlice'

export const store = configureStore({
  reducer: {categories,products, Cart},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store