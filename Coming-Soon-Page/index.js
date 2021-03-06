
//Set the date we're counting down to //
let countDownDate = new Date("Dec 31, 2018 00:00:00").getTime();
// Update the count every 1 second // 

let countDownFunction = setInterval(function() {
 // Get Today's datetime //
 let now = new Date().getTime();
// Find the Distance between now and the launch date //
let distance = countDownDate - now;


// Time calculations for days hours minutes and seconds //
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
var seconds = Math.floor((distance) % (1000 * 60) / 1000);

// Output result in the element with id='demo' //

document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

// If the count is over, write some text //

if(distance <= 0) {
    clearInterval(countDownFunction);

    document.getElementById('demo').innerHTML = "EXPIRED";
}
}, 1000);
