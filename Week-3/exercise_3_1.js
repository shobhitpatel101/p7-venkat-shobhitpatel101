function memoize(fn){
    const cache = {}; //cache map to store the input

    return function(...args){
        const key = args
        
        if(cache[key] != undefined){
            console.log(">> without computation")
            return cache[key];
        }

        console.log(">> computing add()")
        cache[key] = key.reduce(add)
        return cache[key];
    };
}

function add(a,b){
    return a+b
}

//method called memoize such that:
const memoizeAdd = memoize(add);

console.log(memoizeAdd(100,100)); //returns 200
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100,200)); //returns 300
console.log(memoizeAdd(100,100)); //returns 200 without comput
console.log(memoizeAdd(100,200)); //returns 300 without comput
