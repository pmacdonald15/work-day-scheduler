$(addeventbtn).click()


var todaysdate = $("currentDay");
var todaysdate = today;

var today = new Date();
var dd = String(today. getDate()). padStart(2, '0');
var mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
var yyyy = today. getFullYear();
​
today = mm + '/' + dd + '/' + yyyy;
document. write(today);
return today()

console.log(today)