function maxProduct(arr) {
    if(arr.length < 2) return -1
    let max_1 =  Math.max(arr[0], arr[1])
    let max_2 = Math.min(arr[0], arr[1])

    for (let i = 2 ; i < arr.length ; i++){
        if(arr[i] > max_1) {
            max_2 = max_1
            max_1 = arr[i]
        }
        else if(arr[i] > max_2){
            max_2 = arr[i]
        }
    }

    return  max_1 * max_2

}


// Test Cases
console.log(maxProduct([1, 2, 3])); // 6
console.log(maxProduct([5, 10, 2, 1, 9])); // 90
console.log(maxProduct([-10, -20, -30, -1])); // 10