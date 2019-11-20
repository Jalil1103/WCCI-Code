const FizzBuzz = require("./FizzBuzz");

describe("FizzBuzz class", () =>{
    test("Is there a fizzbuzz", () =>{
        //Aragne
        const underTest= new FizzBuzz;
        //Act
        const actual = underTest.fizzBuzzAnswer(1);
        //Assert
        expect(actual).toBe(1);
    })
    test("will it return buzz if divide by 3",() =>{
        const underTest = new FizzBuzz;
        const actual = underTest.buzz(3);
        expect(actual).toBe("Fizz");
    })
    test("will it return Fizz if divide by 5",() =>{
        const underTest = new FizzBuzz;
        const actual = underTest.buzz(5);
        expect(actual).toBe("Buzz");
    })
    test("will it return Fizzbuzz if divide by 5 or 3",() =>{
        const underTest = new FizzBuzz;
        const actual = underTest.buzz(15);
        expect(actual).toBe("FizzBuzz");
    })
   

})