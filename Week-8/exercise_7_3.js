function checkLoop(x,N){
    if(x<1 || N<x){
        return false;
    }

    return true;
}



const array = [1,3,4]
console.log(checkLoop(2,3))

console.log(checkLoop(0,5))



