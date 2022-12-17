function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}

const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// Count is 0

//Count is 0, will come as output when we execute log(), 
//because message variable will be assigned during object creation.