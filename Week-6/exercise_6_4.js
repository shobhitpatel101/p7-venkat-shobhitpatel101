function max(a,b){
    return a<b? b: a;
}
function maximumProfit(arr){
    let maxprofit = 0;

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            maxprofit = max(maxprofit, arr[j]-arr[i])
        }
    }

    return maxprofit;
}

let arr = [7,1,5,3,6,4]
console.log(maximumProfit(arr))