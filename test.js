var myPastDate = new Date(1559, 10, 3, 10, 58, 42);
var myFutureDate = new Date(2525, 0, 31, 10, 58, 42);

console.log(myPastDate);
console.log(myFutureDate);


var birthday = new Date(1985, 0, 15, 11, 15, 25)
var birthday2 = new Date(1985, 0, 15, 11, 15, 25)

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthdays are equal");

} else{

console.log("birthday are not equal");

}

