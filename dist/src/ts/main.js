"use strict";
var switch1 = document.querySelector('switch1');
var switch2 = document.querySelector('switch2');
var switch3 = document.querySelector('switch3');
var switch4 = document.querySelector('switch4');
var lightOn = function () {
    switch2 === null || switch2 === void 0 ? void 0 : switch2.classList.remove('on');
};
switch1 === null || switch1 === void 0 ? void 0 : switch1.addEventListener('click', lightOn);
//# sourceMappingURL=main.js.map