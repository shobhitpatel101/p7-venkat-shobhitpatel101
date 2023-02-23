class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        if (this.stack1.length === 0) {
          console.log("Queue is empty");
          return;
        }
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  }
  
  
const input = [1, 2, 1, 3, 2, 1, 4, 2];
let output = [];

const queue = new Queue();

for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) {
        queue.enqueue(input[i + 1]);
        i += 1;
    } else if (input[i] === 2) {
        output.push(queue.dequeue());
    }
}
console.log(output);