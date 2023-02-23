function NextGreaterElement(nums){
    let NextGreaterElementArray =[]
    let stack = [-1]
    //nums = arr.reverse();
    
    for(let i=nums.length; i>=0; i--){
        while(stack[stack.length-1] <= nums[i] && stack[stack.length-1] != -1){
           stack.pop();
        }

        if(stack[stack.length-1] >= nums[i] || stack[stack.length-1] == -1){
            NextGreaterElementArray.push(stack[stack.length-1]);
        }
        stack.push(nums[i]);
    }
    console.log(NextGreaterElementArray.reverse())
  }
  
  NextGreaterElement([1,3,2,4])