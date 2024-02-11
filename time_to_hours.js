//change the name of the file in <script src="time_to_hours.js"></script> in index.html
// practice Q3: Write a program that will convert the given time into hours and minutes.
// For example : If I input 1345 then it should return 13 hrs & 45 mins.

let time = prompt("Enter Time in seconds");
let hour = Math.floor(time/3600);
let min = Math.round((time % 3600)/60);
console.log(hour + "hrs & "+min+"mins")
