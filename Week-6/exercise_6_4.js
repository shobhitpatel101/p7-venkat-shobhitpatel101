function max(a,b){
    return a<b? b: a;
}

function min(a,b){
    return a < b? a: b;
}

function maximumProfit(arr){
    let maxprofit = 0; 
    let minprofit = 99999999999;

    //for(let i=0; i<arr.length; i++){
    //    for(let j=i+1; j<arr.length; j++){
    //        maxprofit = max(maxprofit, arr[j]-arr[i])
    //    }
    //}

    for(let i=0;i<arr.length;i++){
        minprofit = min(minprofit, arr[i])
        let profit = arr[i] - minprofit;
        maxprofit = max(maxprofit,profit);
    }

    return maxprofit;
}

let arr = [7,1,5,3,6,4]
console.log(maximumProfit(arr))