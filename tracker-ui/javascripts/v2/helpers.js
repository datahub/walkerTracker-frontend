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