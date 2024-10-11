let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //getting hour ,min,sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

   let hRotation = 30*hh + mm/2;//360/12=30 h hours=30h+m/2
   let mRotation = 6*mm;//360/60=6 m min=6m
   let sRotation = 6*ss;//360/60=6 s secs=6s

   hr.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;
   
}

setInterval(displayTime, 1000);