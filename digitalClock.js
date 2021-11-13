function showClock() {
    setInterval(determineTime, 1000);



}

function determineTime(){
    var dt=new Date();
        //  let hrs=(dt.getHours()<10)?'0'+dt.getHours():dt.getHours();
        //  let min=(dt.getMinutes()<10)?'0'+dt.getMinutes():dt.getMinutes()
        //  let sec=(dt.getSeconds()<10)?'0'+dt.getSeconds():dt.getSeconds()
    let ampm = dt.toLocaleTimeString('en-US',{ hour12: false })
        //  document.getElementById('dc').innerHTML = hrs+':'+min+':'+sec;
    ampm = (Number(ampm.substring(0, 2)) > 12 ? 'PM' : 'AM');
    document.getElementById('dc').innerHTML = dt.toLocaleTimeString() + ampm;
}