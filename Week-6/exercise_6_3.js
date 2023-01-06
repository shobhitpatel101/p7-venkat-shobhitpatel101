function sortArray(arr){
    let zero = 0;
    let two = arr.length;

    for(el of arr){
        if(el == 0){
            zero++;
        }
        if(el == 2){
            two--;
        }
    }

    for(let i=0;i<zero;i++){
        arr[i] = 0;
    }
    for(let i=zero;i<two;i++){
        arr[i] = 1;
    }
    for(let i=two;i<arr.length;i++){
        arr[i] = 2;
    }

    return arr;
}

let arr = [0, 1, 2, 1, 0, 1]
console.log(sortArray(arr))

arr = [1, 2, 1, 2, 2]
console.log(sortArray(arr))

arr = [1, 0, 0, 1, 1]
console.log(sortArray(arr))