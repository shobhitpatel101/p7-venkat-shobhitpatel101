class promise{ 
    constructor(executor){
        this.state = "PENDING";
        this.value = null;
        this.handlers = [];
        this.catcher = [];

        this._resolve = this._resolve.bind(this);
        this._reject = this._reject.bind(this);

        executor(this._resolve, this._reject);
    }

    //Resolve function
    _resolve = (result) =>{
        console.log("Resolve Function called");

        if(this.state != "PENDING"){
            return;
        }

        this.state = "FULFILLED";
        this.value = result;
        this.handlers.forEach((h)=> h(result))
    }

    //Reject function
    _reject = (error) => {
        console.log("Reject Function called",error);

        if(this.state != "PENDING"){
            return;
        }

        this.state = "REJECTED";
        this.value = error;
        this.catcher.forEach((h)=> h(error))
    }

    //Then function
    then(onSuccess){
        console.log("Then Function called");

        if(this.state == "FULFILLED"){
            onSuccess(this.value);
        }else{
            this.handlers.push(onSuccess);
        }

        return this;
    }

    //Catch function
    catch(onFail){
        console.log("Catch Function called");

        if(this.state == "REJECTED"){
            onFail(this.value);
        }else{
            this.catcher.push(onFail);
        }

        return this;
    }
}

//executor function
const randomNumfunction = (res, rej) =>{
    //Generate Random Number
    const randomNum = Math.floor(Math.random() * 10);
    //const randomNum = 5;

        setTimeout(()=>{
            if(randomNum % 5 == 0){
                rej('Promise Rejected with Number = '+ randomNum);
            }
            else{
               res('Promise Resolved with Number = '+ randomNum);
            }
        },1000);
}

//Custom Promise object
let customePromise = new promise(randomNumfunction)

customePromise.then((val)=>{
    console.log(">> Then log: ", val)
}).catch((err)=>{
    console.log(">> Catch log: ", err)
})


