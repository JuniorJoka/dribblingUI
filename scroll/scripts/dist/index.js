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
var ad1 = new Anime("ad1", "moveRight", 2000);
ad1.anime();
var ad2 = new Anime("ad2", "moveDown", 2000);
ad2.anime();
var ad3 = new Anime("ad3", "moveDown", 2000);
ad3.anime();
var ad4 = new Anime("ad4", "moveLeft", 2000);
ad4.anime();
var ad5 = new Anime("ad5", "moveUp", 2000);
ad5.anime();
var ad6 = new Anime("ad6", "moveLeft", 2000);
ad6.anime();
var news1 = new Anime("first", "showShow", 2000);
news1.anime();
var news2 = new Anime("second", "showDown", 2000);
news2.anime();
var news3 = new Anime("third", "showUp", 2000);
news3.anime();
var news4 = new Anime("fourth", "elongate", 2000);
news4.anime();
