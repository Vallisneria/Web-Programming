var movie1 = {
    title: "Plan 9 from Outer Space",
    genre: "Cult Classic",
    rating: 2,
    showTimes: ["3:00pm", "7:00pm", "11:00pm"]
}

var movie2 = {
    title: "Forbidden Planet",
    genre: "Classic Sci-Fi",
    rating: 5,
    showTimes: ["5:00pm", "9:00pm"]
}

function getNextShowing(movie) {
    var now = new Date().getTime();

    for (var i = 0; i < movie.showTimes.length; i++) {
        var showtime = getTimeFromString(movie.showTimes[i]);
        if ((showtime - now) > 0) {
            return "Next showing of " + movie.title + " is " + movie.showTimes[i]
        }
    }
    return null;
}

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0)
    return theTime.getTime()
}

var nextShowing = getNextShowing(movie1);
alert(nextShowing);
nextShowing = getNextShowing(movie2);
alert(nextShowing);