import { createSlice } from '@reduxjs/toolkit';

const binarySearchSlice = createSlice({
  name: 'binarySearch',
  initialState: {
    array: '',
    target: '',
    result: -1,
    visualArray: [],
  },
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload;
      state.visualArray = action.payload.split(',').map(Number).sort((a, b) => a - b);
    },
    setTarget: (state, action) => {
      state.target = action.payload;
      console.log(action.payload)
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setArray, setTarget, setResult } = binarySearchSlice.actions;

export default binarySearchSlice.reducer;

