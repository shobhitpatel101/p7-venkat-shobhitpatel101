class Stack{
    constructor(){
        this.stackArray = [];
        this.length = 0;
    }

    push(element){
        this.stackArray.push(element);
        this.length += 1;
    }

    pop(element){
        if(element == ')' && this.stackArray[this.length-1] == '('){
            this.stackArray.pop();
            this.length -= 1;
        }

        else if(element == '}' && this.stackArray[this.length-1] == '{'){
            this.stackArray.pop();
            this.length -= 1;
        }

        else if(element == ']' && this.stackArray[this.length-1] == '['){
            this.stackArray.pop();
            this.length -= 1;
        }

        else
            return true;
        
        return false;
    }
}

let stack = new Stack();
let flag = true;

const exp = '[()]{}{()()}'

for(el of exp){
    if('({['.includes(el)){
        stack.push(el);
    }else{
        if(stack.pop(el)){
            flag = false;
            break;
        }
    }
}

console.log(flag);

