var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return 0;
    nums.sort((a,b)=>a-b);
    let ans = nums[0] + nums[1] +  nums[2];

    for(let i=0; i< nums.length-2; i++){
        let first = i;
        let second = i+1;
        let third = nums.length-1;

        while(second<third){
            let sum = nums[first] + nums[second] + nums[third];
            if(sum == target) return sum;

            if(Math.abs(target - sum) < Math.abs(target - ans)){
                ans = sum;
            }
            if(sum > target){
                third --;
            }   
            else{
                second ++;
            }
        }
    }
    return ans;
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))
console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([0,0,0], 0))