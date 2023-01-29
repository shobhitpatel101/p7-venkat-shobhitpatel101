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

    display(){
        console.log("Length:" + this.length);
        let newhead = this.head;

        for(let i=0;i<this.length;i++){
            console.log("->" + newhead.element);
            newhead = newhead.next;
        }
    }
    
    reverse(){

        if(this.length < 2)
            return;

        this.first = this.head;
        this.second = this.head.next;
    
        if(this.length == 2){
            this.second.next = this.first;
            this.first.next = null;
            this.head = this.second;
            return;
        }

        
        this.first = this.head.next;
        this.second = this.first.next;
        this.third = this.second.next;
        this.head.next = null;
        this.first.next = this.head;

        for(let i=0; i<this.length-3; i++){
            this.second.next = this.first;
            
            this.first = this.second;
            this.second = this.third;
            this.third = this.third.next;
        }
        this.head = this.second;
        this.head.next = this.first;
    }
}

function reverseLinkedList(){

}

let newLinkedList = new LinkedList;

for(let i=1;i<=10;i++){
    newLinkedList.addNode(i);
}

newLinkedList.display();
newLinkedList.reverse();
newLinkedList.display();