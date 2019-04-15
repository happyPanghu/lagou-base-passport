(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    function createPassportScript(fun) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://passport.lagou.com/static/js/passport.js";
        script.setAttribute("id", "_lgpassport_");
        script.setAttribute("data-css-site", 1);
        script.setAttribute("data-css-popup", 1);
        document.body.appendChild(script);

        script.onreadystatechange = function() {
            if(this.readyState === 'loaded' || this.readyState === 'complete') {
                return fun();
            }
        };

        script.onload = function() {
            return fun();
        };
    }

    function initPassport(fun) {
        const _PASSPORT = document.getElementById('_lgpassport_');
        if(_PASSPORT !== null) {
            if (window.CONST_VARS && !window.CONST_VARS('user').id && window.PASSPORT) {
                window.PASSPORT.on('autologin:succ', function() {
                    fun();
                });
                window.PASSPORT.auto();
            }
        } else {
            createPassportScript(initPassport(fun));
        }
    }

    module.exports = {
        initPassport
    };

}));
