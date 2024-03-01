/* JavaScript Date Objects
*Date objects are created with the new Date() constructor.
*
*There are 9 ways to create a new date object:
*
*new Date()
*new Date(date string)
*new Date(year,month)
*new Date(year,month,day)
*new Date(year,month,day,hours)
*new Date(year,month,day,hours,minutes)
*new Date(year,month,day,hours,minutes,seconds)
*new Date(year,month,day,hours,minutes,seconds,ms)
*new Date(milliseconds)
*
*Note
*JavaScript counts months from 0 to 11:
*
*January = 0.
*December = 11.
*Specifying a month higher than 11, will not result in an error but add the overflow to the next year
*
*ISO Dates (Date-Time)
*ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
*Date and time is separated with a capital T.
*UTC time is defined with a capital letter Z.
*If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
*Date.now() is a static method of the Date object.
*
*The getTimezoneOffset() Method
*The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
******************************************************************************************************/

var mydate = new Date('2024-04-11 16:15:00');
var mydate1 = new Date(2024, 19, 11, 16,15);
var mydate2 = new Date(-999999999998);
var mydate3 = new Date(6393600000);

console.log(mydate.toISOString()); // 2024-04-11T20:15:00.000Z
console.log(mydate.toUTCString()); // Thu, 11 Apr 2024 20:15:00 GMT
console.log(mydate.toDateString()); // Thu Apr 11 2024
console.log(mydate.toString()); // Thu Apr 11 2024 16:15:00 GMT-0400 (Eastern Daylight Time)
console.log(mydate1.toString()); // Mon Aug 11 2025 16:15:00 GMT-0400 (Eastern Daylight Time)
console.log(mydate2.toString()); // Fri May 06 1938 08:00:00 GMT-0400 (Eastern Daylight Time)
console.log(mydate3.toUTCString()); // Mon, 16 Mar 1970 00:00:00 GMT

var parseDate = Date.parse('2024-01-27 19:00:00');
console.log(parseDate.toString()); // 1706400000000


/* Method	Description
getFullYear()	Get year as a four digit number(yyyy)
getMonth()	Get month as a number(0 - 11)
getDate()	Get day as a number(1 - 31)
getDay()	Get weekday as a number(0 - 6)
getHours()	Get hour(0 - 23)
getMinutes()	Get minute(0 - 59)
getSeconds()	Get second(0 - 59)
getMilliseconds()	Get millisecond(0 - 999)
getTime()	Get time(milliseconds since January 1, 1970)
*************************************************************/

console.log(mydate.getDay()); // 4 

/* UTC Date Get Methods
Method	Same As	Description
getUTCDate()	getDate()	Returns the UTC date
getUTCFullYear()	getFullYear()	Returns the UTC year
getUTCMonth()	getMonth()	Returns the UTC month
getUTCDay()	getDay()	Returns the UTC day
getUTCHours()	getHours()	Returns the UTC hour
getUTCMinutes()	getMinutes()	Returns the UTC minutes
getUTCSeconds()	getSeconds()	Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
******************************************************************************/

var nowDate = new Date();
var tmzoneDate = nowDate.getTimezoneOffset();
console.log(nowDate.toString()); 
console.log(tmzoneDate.toString()); 

/* Method	Description
setDate()	Set the day as a number(1 - 31)
setFullYear()	Set the year(optionally month and day)
setHours()	Set the hour(0 - 23)
setMilliseconds()	Set the milliseconds(0 - 999)
setMinutes()	Set the minutes(0 - 59)
setMonth()	Set the month(0 - 11)
setSeconds()	Set the seconds(0 - 59)
setTime()	Set the time(milliseconds since January 1, 1970) 
************************************************************************/

var setDate = new Date();
setDate.setFullYear(2020);
console.log(setDate.toDateString());
console.log(setDate.toDateString(setDate.getDate() + 3));

const d = new Date();
console.log(d.setDate(d.getDate() + 50).toString());

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
console.log(text);

