function moveZeroes(arr) {
    let flag = 0
    for (let i = 0; i < arr.length ; i++){
        if(arr[i] != 0 ){
            arr[flag++] = arr[i]
        }
    }

    for(let i = flag ; i < arr.length ; i++) {
        arr[i] = 0
    }
}

let arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // Output: [1, 3, 12, 0, 0]

let arr2 = [0, 0, 1];
moveZeroes(arr2);
console.log(arr2); // Output: [1, 0, 0]