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