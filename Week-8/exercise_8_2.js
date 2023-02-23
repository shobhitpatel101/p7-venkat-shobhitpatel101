class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function validateBST(root){
    if(root == null){
        return true;
    }

    if(root.left != null && root.data <= root.left.data){
        return false;
    }

    if(root.right != null && root.data > root.right.data){
        return false;
    }

    return validateBST(root.left) && validateBST(root.right);
}

const input = [2,1,3]

const root= new Node(2);
root.left = new Node(1);
root.right = new Node(3);

console.log(validateBST(root))

//-----------------
const input1 = [2,1,3,5,6,7,8]

const root1= new Node(2);
root1.left = new Node(1);
root1.right = new Node(3);
root1.left.left = new Node(5);
root1.left.right = new Node(6);
root1.right.left = new Node(7);
root1.right.right = new Node(8);

console.log(validateBST(root1))