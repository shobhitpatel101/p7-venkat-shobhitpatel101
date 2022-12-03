let obj = {
    i: 0,
    a: 0,
    b: 1,
    c: 0,

    [Symbol.iterator](){
        return this;
    },

    next(){
        switch(this.i){
            case 0: this.c = 0; break;
            case 1: this.c = 1; break;
            default: {
                        this.c = this.a + this.b; 
                        this.a = this.b;
                        this.b = this.c;
                    };
        }
        //increment counter for steps
        this.i += 1;

        return{ 
            value: this.c, 
            done: this.i>7
        };
    }
}


//Loop for printing the fibonacci series
console.log("The fibonacci series")

for(const el of obj){
    console.log(el)
}