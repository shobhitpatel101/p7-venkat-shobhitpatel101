//Use of bind
console.log(">> Use of bind")

const user =  {
    name: "shobhit",
    printName: function() {
        return "Name is " + this.name;
    }
}

const userName = user.printName
console.log(userName()) //Name is undefined
console.log(userName.bind(user)()) //Name is shobhit

//Use of call
console.log(">> Use of call")

const userdetails = {
    printName: function(age, group){
        return this.firstName + " and " + this.lastName + ", age= " + age + ", group= " + group
    }
}

const person1 = {
    firstName: "Shobhit",
    lastName: "Patel"
}

const person2 = {
    firstName: "Abc",
    lastName: "xyz"
}

const userdetailsName = userdetails.printName
console.log(userdetailsName.call(person1, 23, 1)) // Shobhit and Patel, age= 23, group= 1
console.log(userdetailsName.call(person2,0, 0)) // Abc and xyz, age= 0, group= 0


//Use of apply
console.log(">> Use of apply")
console.log(userdetailsName.apply(person1, [23,1]))
console.log(userdetailsName.apply(person2, [0,0]))
