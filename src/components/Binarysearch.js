import React, {useState, useEffect} from 'react';
const Binarysearch = () => {
    const [array, setArray] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState(-1);

    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const middle = Math.floor((left+right)/2);

            if (arr[middle] === target) {
                return middle;
            } else if (target < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return -1;
    };

const handleSearch = () => {
    const inputArray = array.split(' ').map(Number).sort((a, b) => a-b);
    const targetIndex = binarySearch(inputArray, parseInt(target));
    setResult(targetIndex);
};

return(
    <div>
        <h2>Binary Search</h2>
        <label>
            Enter a sorted array:
            <input
            type='text'
            value={array}
            onChange={(e) => setArray(e.target.value)}
            />
        </label>
        <br />
        <br />
        <label>
            Enter the target element:
            <input
            type='text'
            value={target}
            onChange={(e) => setTarget(e.target.value)}
             />
        </label>
        <br />
        <br />
        <button onClick={handleSearch}>Search</button>
        <h3>Result: {result !== -1 ? `Found at index ${result}` : 'Not found'}</h3>

        <div>

        </div>
    </div>
    );
};
export default Binarysearch;