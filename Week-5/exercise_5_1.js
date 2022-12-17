function getResponse(count){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("getResponse()! ", count)
            res("getResponse() called!")
        },1000);
    })
}

async function* generator(){
    let count = 1;

    while(true){
        const response = await getResponse(count++);
        yield response;
    }
}

function fetchData(){
    const task = generator();
    let count = 0;

    while(count < 5){
        task.next().then((value)=>{
            console.log('Iteration ', count ,'Response: ' , value)
        })
        count += 1;
    }
}


async function asyncfetchData(){
    let count = 0;

    while(count < 5){
        const response = await getResponse(1000);
        console.log(response);
        count += 1;
    }
}

console.log("Generator function")
fetchData();

console.log("Async function")
asyncfetchData();