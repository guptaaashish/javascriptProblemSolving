//1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

const currentDate = new Date();
const daysName = ["Sunday","Monday","Wednesday","Thurday","Friday","Saturday"];
const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 + "PM" : currentDate.getHours() + "AM";
console.log(`Today is ${daysName[currentDate.getDay()]}. Current time is : ${hours} : ${currentDate. getMinutes()} : ${currentDate.getSeconds()}`)