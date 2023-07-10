"use strict";

// смена темы сайта light or dark
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else{
    $HTML.dataset.theme = isDark ? "dark" : "light";
}


// выбираем тему сайта
const changeTheme = function (){
    // console.log('click');
    isDark = sessionStorage.getItem("theme");
    sessionStorage.setItem("theme", isDark === "light" ? "dark" : "light");
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}

window.addEventListener("load", () => {
    const $themeBtn = document.querySelector("[data-theme-toggler]");
    $themeBtn.addEventListener("click", changeTheme);
});