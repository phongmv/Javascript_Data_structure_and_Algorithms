function  firstRecurringCharacter(arr){
    const map  = new Map()
    for (let  i = 0; i < arr.length ; i++){
        if(map.has(arr[i])) {
            return map.get(arr[i])
        }
        map.set(arr[i], arr[i])
    }
    return undefined
}

console.log(firstRecurringCharacter([1,2,1,3,4,5,6,7])) // 1
console.log(firstRecurringCharacter([-1,2,1,2,4,9,6,7])) // 2
console.log(firstRecurringCharacter([1,2,3])) //undefined
