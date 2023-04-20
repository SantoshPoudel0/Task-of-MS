
/* 

    primary data type
        nubmer
        bookean
        string
        null
        undefined

    non primary datype  , collections , reference data type 
        - object
         - array 


*/

let country1 = "nepal"
let country2 = country1
country2 = "Indai"
console.log(country1, country2);  // the value of country1 remains the same

let num1 = 1;
let num2 = num1;
num2 = 3;
console.log(num1, num2); // the value of num1 remains the same


let person1 = {
    name: "John",
    age: 12,
    country: "USA"
}
/* 
    lets assume person2 is of country USA too
    so let reuse person1 varaible
*/
let person2 = person1  // doesnot copy the value of person 1, rather points to the location of person1 
person2.country = "Nepal"

/* 
    now all the values of person1 is copied to person 2
*/


console.log("person2", person2);

/* 
    TODO: 
    modify person2's country to Nepal
    and check what happens to person1's country if there seems to be a problem fix it. // HINT spread operator. 
*/

console.log("person2-country", person2.country);
console.log("person1-country", person1.country);




