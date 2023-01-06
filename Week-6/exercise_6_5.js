function findDifference(A,B){
    dict = new Map();
    for(let i=0;i<A.length;i++){
        if(dict.has(B - A[i]) || dict.has(A[i]- B)){
            return 1;
        }
        dict.set(A[i],1)
    }
    return 0;
}

let A = [5, 10, 3, 2, 50, 80] 
let B = 78
console.log(findDifference(A,B))

A = [-10, 20] 
B = 30
console.log(findDifference(A,B))
