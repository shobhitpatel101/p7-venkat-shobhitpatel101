const getNumber = new Promise((resolve, reject)=>{
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(()=>{
        if( randomNumber % 5 == 0){
            reject(randomNumber);
        }else{
            resolve(randomNumber);
        }   
    }) 
})

getNumber.then((randomNum)=>{
    console.log("Then log (Resolved):" + randomNum)
}).catch((randomNum)=>{
    console.log("Catch log (Reject):" + randomNum)
}).finally(()=>{
    console.log("Finally called.")
})