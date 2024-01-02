import { configureStore } from '@reduxjs/toolkit';
import binarySearchReducer from './binarySearchSlice';

export default configureStore({
  reducer: {
    binarySearch: binarySearchReducer,
  },
});
