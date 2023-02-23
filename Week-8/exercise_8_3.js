class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function LevelOrderTraversal(root){
    let res = []
    let level = [root]
    while(level.length != 0){
        let thislevel = []
        let valuelevel = []

        for(el of level){
            valuelevel.push(el.data);
            if(el != null && el.left != null){
                thislevel.push(el.left);
            }
            if(el != null && el.right != null){
                thislevel.push(el.right);
            }
        }
        
        res.push(valuelevel);
        level = thislevel;
    }
    return res;
}

const input =  [3,9,20,null,null,15,7]
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(LevelOrderTraversal(root))

//-------------------------------

const input1 =  [1]
const root1 = new Node(1);
console.log(LevelOrderTraversal(root1))