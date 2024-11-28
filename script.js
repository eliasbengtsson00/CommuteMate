let startTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =  h + "" + m;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


const day = new Date();
const month = day.toLocaleString('us-US', { month: 'long' });
const year = new Date();
document.getElementById("date").innerHTML = day.getDate() + " " + month + " " + year.getFullYear();