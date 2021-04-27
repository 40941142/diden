var timesRun = 0;
var interval = setInterval(function() {
    timesRun++;
    if (timesRun == 2) {
        $(".loading").fadeOut();
        clearInterval(interval);
        document.body.style.overflow = 'auto';

    }
}, 1000);