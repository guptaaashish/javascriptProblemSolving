//Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const currentDate = new Date();
console.log(currentDate);
console.log(`mm-dd-yy: ${currentDate.getMonth()+1}-${currentDate.getDate()}-${currentDate.getFullYear()}`)
console.log(`mm/dd/yy: ${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`)
console.log(`dd-mm-yy: ${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`)
console.log(`dd/mm/yy: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`)