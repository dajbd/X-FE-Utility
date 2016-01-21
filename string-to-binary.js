! function(window, document) {

    // normal string to base64
    window.stob = function(string) {
        return window.btoa(unescape(encodeURIComponent(string)));
    }

    window.btos = function(string) {
        return decodeURIComponent(escape(window.atob(string)));
    }

}(window, document);
