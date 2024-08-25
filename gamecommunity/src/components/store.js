// store.js
import { configureStore } from '@reduxjs/toolkit';

// Define a placeholder reducer
const placeholderReducer = (state = {}, action) => {
  return state;
};

// Create the Redux store
const store = configureStore({
  reducer: {
    placeholder: placeholderReducer, // Use the placeholder reducer
  },
});

export default store;
