! function(window, document) {

    var detect = {
        version: '0.0.1'
    };

    detect.hasTouch = 'ontouchmove' in document;

    // 1px border
    detect.OnePxBorder = function HighDPR1pxSupport() {
        var flag = false,
            a = document.createElement('a')
        if (window.devicePixelRatio <= 1 || !('devicePixelRatio' in window)) {
            flag = true
        } else {
            a.style.cssText = 'border: 0.5px solid #000;'
            document.body.appendChild(a) // 不append到页面，获取尺寸是不正常的
                // alert(a.offsetWidth) // 普通pc 0 // ios8 1 // android4.4.2  0
            a.offsetWidth === 1 && (flag = true)
            document.body.removeChild(a)
        }
        return flag
    }();

    // placeholder

    // cmd / amd support

    window.detectX = detect

}(window, document);
