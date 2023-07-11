// import
import { ripple } from "./utils/ripple.js"




"use strict";
const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


// добовляем эффект для ripple
const $rippleElems = document.querySelectorAll("[data-ripple]");

$rippleElems.forEach($rippleElem => ripple($rippleElem));