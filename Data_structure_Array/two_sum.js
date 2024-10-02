function twoSum(arr, target) {
    const map = new Map()

    for (let i = 0 ; i < arr.length ; i++) {

        let remaining = target - arr[i]

        if(!map.has(remaining)){
            map.set(arr[i], i)
        }
        else  {
            return [map.get(remaining), i]
        }
    }
}



// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]