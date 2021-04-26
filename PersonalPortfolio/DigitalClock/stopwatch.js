var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function () {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = 'Start';
    } else {
        watch.start();
        toggleBtn.textContent = 'Stop';
    }
});

resetBtn.addEventListener('click', function () {
    watch.reset();
});


//constructor for stopwatch
function Stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;


    function update() {
        if (this.isOn) {
            time += delta();
        }

        var formattedTime = timeFormatter(time);
        elem.textContent = formattedTime;
    };

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    };

    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds
        }

        //console.log(minutes + ' : ' + seconds + ' . ' + milliseconds)
        return minutes + ': ' + seconds + '. ' + milliseconds

    };
    //can give stopwatch properties like so:
    this.isOn = false;

    this.start = function () {
        if (!this.isOn) {
            //use outer varialbe to declate the interval
            interval = setInterval(update.bind(this), 200);
            //this is the time that the stopwatch starts
            offset = Date.now()
            this.isOn = true;
        }
    };

    this.stop = function () {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function () {
        if (!this.isOn) {
            time = 0;
            update();
        }

    };


}