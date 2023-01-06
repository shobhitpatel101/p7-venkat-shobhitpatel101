function checkDuplicate(arr){
    let setarr = new Set(arr);
    if(setarr.size == arr.length){
        return "No";
    }
    return "Yes";
}

const containsDuplicate = checkDuplicate([1,2,1,2,3]);
console.log("[1,2,1,2,3] => Contains Duplicate: " + containsDuplicate)


const containsDuplicate2 = checkDuplicate([1,2,3,4]);
console.log("[1,2,3,4] => Contains Duplicate: " + containsDuplicate2)