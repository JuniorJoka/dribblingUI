"use strict";
var Anime = /** @class */ (function () {
    function Anime(selector, animation, duration) {
        this.selector = selector;
        this.animation = animation;
        this.duration = duration;
    }
    Anime.prototype.anime = function () {
        var _this = this;
        var element = document.querySelector("." + this.selector);
        if (element) {
            element.addEventListener("animationend", function () {
                if (element) {
                    element.classList.remove(_this.animation);
                    setTimeout(function () { return element.classList.add(_this.animation); }, _this.duration);
                }
            });
        }
    };
    return Anime;
}());
