import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/categoriesSlice'
import products from './Products/productSlice'
import Cart from './cart/cartSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items']
};

const rootReducer = combineReducers({
  categories,
  products,
  Cart: persistReducer(persistConfig, Cart)
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persist = persistStore(store)
export {store, persist}