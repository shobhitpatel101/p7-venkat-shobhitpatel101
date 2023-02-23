class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function findPath(adjList, source, destination, visited){
    let stack = [adjList[source]]
    visited[source] = 1;

    while(stack.length != 0){
        let element = stack[stack.length-1];
        stack.pop();
        visited[element.data] = 1
        
        while(element != null){
        
            if(element.data == destination){
                return true;
            }
            if(visited[element.data] != 1){ 
                stack.push(adjList[element.data]);
                visited[element.data] = 1;
            }
                
            element = element.next;
        }
    }
    return visited[destination]==1?true:false;
}

const n = 4;
const input = [[0,1],[1,2],[2,0],[1,3]];
let adjList = [];
let visited = [];

for(let i=0;i<n;i++){
    adjList.push(new Node(i));
    visited.push(0);
}

for(let i=0;i<n;i++){
    temp = adjList[input[i][1]];
    while(temp.next != null){
        temp = temp.next;
    }
    temp.next = new Node(input[i][0]);

    temp = adjList[input[i][0]];
    while(temp.next != null){
        temp = temp.next;
    }
    temp.next = new Node(input[i][1]);
}

console.log(adjList, visited)

const source = 0;
const destination = 3;
console.log(findPath(adjList,source, destination, visited));