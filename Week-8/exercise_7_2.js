class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.last = null;
        this.length = 0;
    }

    addNode(element){
        let newNode = new Node(element);
        
        if(this.head == null){
            this.head = newNode;
            this.last = this.head;
        }else{
            this.last.next = newNode;
            this.last = this.last.next;
        }
        this.length += 1;
    }

    rotateLinkedlist(k){
        this.last.next = this.head;
        let first = this.last;
        let second = this.head;

        while(k--){
            first = second;
            second = second.next;
        }

        first.next = null;
        this.head = second;
    }

    display(){
        console.log("Length:" + this.length);
        let newhead = this.head;

        for(let i=0;i<this.length;i++){
            console.log("->" + newhead.element);
            newhead = newhead.next;
        }
    }
}

let newLinkedList = new LinkedList;

for(let i=1;i<=10;i++){
    newLinkedList.addNode(i);
}

newLinkedList.display();
newLinkedList.rotateLinkedlist(3);
newLinkedList.display();