// why does it time out after a few minutes?

function getClock() {
    const fullDate = new Date()

    //isolate the hours from fullDate
    var hours = fullDate.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    //isolate minutes from fullDate
    var minutes = fullDate.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    //isolate seconds from fullDate
    var seconds = fullDate.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    //push this on to the clock
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;

    //what is that recursive? oh ya baby
    setInterval(main, 1000)

}


//the main function
function main() {
    getClock();

}


main();