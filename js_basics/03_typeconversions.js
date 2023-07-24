let numberOfPeople="32dea"
let valueOfnumberOfPeople=Number(numberOfPeople)

console.log(typeof numberOfPeople)
console.log(typeof valueOfnumberOfPeople);
console.log(valueOfnumberOfPeople);//NaN
/*
Here the number values can be string or number if the value of the variable is number then its ok ,the problem arises when the value of variable numberOfpeople is type of String
*/

//  "23"=>23 string passed as number can be converted to number

//"23abc"=>NaN string passed as string results Not A Number
//"true"=>1 boolean value true 1 false 0 
//null =>0 empty null value 0


let isLoggedIn=""
let checkValueIsLoggedIn=Boolean(isLoggedIn)
console.log(checkValueIsLoggedIn)

// 1=>true
//0=>false
//""=> false empty string
//"someValueInString" =>true

//we can Convert Number to String
let someNumber=23
let someNumberInString=String(someNumber)
console.log(someNumberInString);
console.log(typeof someNumberInString);