"use strict";
export const ripple = function ($rippleElem){
    console.log($rippleElem);
    $rippleElem.addEventListener("pointerdown", function(e){
        e.stopImmediatePropagation();
    });
}