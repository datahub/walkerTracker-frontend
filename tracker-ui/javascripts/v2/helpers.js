if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}

function getCookie(key) {
    if (!key) {
        return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function isInteger(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function formatCurrency(n, decimalPlaces) {
    return "$" + numberWithCommas(n.toFixed(decimalPlaces));
}

var monthNames = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timestampToAPStyleDate(timestamp) {
    var dateObj = new Date(timestamp);

    var correctedHours = dateObj.getHours();
    var correctedMinutes = dateObj.getMinutes();
    var postOrAnte = "a.m.";

    if (correctedHours >= 12) {
        correctedHours = correctedHours - 12;
        postOrAnte = "p.m.";
    }

    if (correctedHours === 0) {
        correctedHours = 12;
    }
    if (correctedMinutes < 10) {
        correctedMinutes = "0" + correctedMinutes;
    }

    var formattedWeekday = weekdays[dateObj.getDay()];
    var formattedDate = monthNames[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
    var formattedTime = correctedHours + ":" + correctedMinutes + " " + postOrAnte;

    return [formattedWeekday, formattedDate, formattedTime];
}