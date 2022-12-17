const mathOperations = require('../exercise_5_4/exercise_5_4.js')

test("Sum", ()=>{
    const sum = mathOperations.sum(2,2)
    expect(sum).toBe(4);
})

test("Sum", ()=>{
    const sum = mathOperations.sum(3,2)
    expect(sum).toBe(4);
})


test("Different", ()=>{
    const sum = mathOperations.diff(3,2)
    expect(sum).toBe(1);
})


test("Different", ()=>{
    const sum = mathOperations.diff(3,3)
    expect(sum).toBe(1);
})

test("Product", ()=>{
    const sum = mathOperations.product(2,3)
    expect(sum).toBe(6);
})

test("Product", ()=>{
    const sum = mathOperations.product(3,3)
    expect(sum).toBe(6);
})
