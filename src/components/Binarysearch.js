import React, { useState } from 'react';
import { setArray, setTarget, setResult, setTime } from '../binarySearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import VisualArrayDisplay from './VisualArrayDisplay';

const BinarySearch = () => {
  const dispatch = useDispatch();
  const { array, target, result, visualArray, time } = useSelector((state) => state.binarySearch);

  const handleArrayChange = (e) => {
    const newArray = e.target.value;
    dispatch(setArray(newArray));
  };

  const handleSearch = () => {
    const targetIndex = binarySearch(visualArray, parseInt(target));
    dispatch(setResult(targetIndex));
  };

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    const start = performance.now();

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (arr[middle] === target) {
        const end = performance.now();
        const timeDiff = (end - start).toFixed(2);
        console.log(timeDiff);
        dispatch(setTime(timeDiff));
        return middle;
      } else if (target < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    const end = performance.now();
    return -1;
  };

  return (
    <div>
      <h2>Binary Search</h2>
      <label>
        Enter a sorted array:
        <input
          type='text'
          value={array}
          onChange={handleArrayChange}
        />
      </label>
      <br />
      <br />
      <label>
        Enter the target element:
        <input
          type='text'
          value={target}
          onChange={(e) => dispatch(setTarget(e.target.value))}
        />
      </label>
      <br />
      <br />
      <button onClick={handleSearch}>Search</button>
      <h3>Result: {result !== -1 ? `Found at index ${result}` : 'Not found'}</h3>
      <h3>Time: {time} milliseconds</h3>
      <VisualArrayDisplay visualArray={visualArray} result={result} />
    </div>
  );
};

export default BinarySearch;
