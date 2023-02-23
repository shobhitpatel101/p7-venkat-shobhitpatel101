class Node{
    constructor(value){
        this.data = value;
        this.right = null;
        this.left = null;
    }
}

function Max(a,b){
    return a>b?a:b;
}

function findMaxheight(root){
    if(root == null){
        return 0;
    }

    return Max(findMaxheight(root.left), findMaxheight(root.right)) + 1;
}

let input = [3,9,20,null,null,15,7]

const root = new Node(3);
root.left = new Node(9);
root.right =  new Node(20); 
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(findMaxheight(root));
//------------------

input = [1,null,2]
const root1 = new Node(1);
root.right = new Node(2);
console.log(findMaxheight(root1));
