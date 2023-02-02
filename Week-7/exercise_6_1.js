function maxSubarraySum(arr){
    let maxSum = 0;
    let currentSum = 0;

    for(el of arr){
        currentSum += el;
        
        if(currentSum < 0){
            currentSum = 0;
        }    

        if(currentSum > maxSum){
            maxSum = currentSum;
        }
    }

    return maxSum;
}

let maxSubarraySumValue = maxSubarraySum([1, 2, 3, 4, -10])
console.log(maxSubarraySumValue)


maxSubarraySumValue = maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(maxSubarraySumValue)