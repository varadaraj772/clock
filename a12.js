setInterval(()=>{
a =new Date();
let times= ('0'+a.getHours()).slice(-2)+"\n" + ('0'+a.getMinutes()).slice(-2);
document.getElementById('time').innerHTML= times;

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
const h = new Date();
let name =h.getDate()+" - "+month[h.getMonth()];
document.getElementById('month').innerHTML= name;

const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let day = weekday[d.getDay()];
document.getElementById('date').innerHTML= day; 
},1000);

