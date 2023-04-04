console.log("Hello World :)");

let buttonRemovePhoto = document.querySelector(".buttonRemovePhoto");
let photoAS = document.querySelector(".photoAS");

buttonRemovePhoto.addEventListener("click", () => {
    photoAS.remove();
});


let theme = document.querySelector(".theme");
let header = document.querySelector(".header");
let aside = document.querySelector(".aside");
let footer = document.querySelector(".footer");
let themeName = document.querySelector(".themeName");
let navLink = document.querySelector(".nav__link");
let headerMainHeader = document.querySelector(".header__mainHeader");
let contactLink = document.querySelector(".contact__link")


theme.addEventListener("click", () => {

    header.classList.toggle("header__lightTheme");
    aside.classList.toggle("lightTheme");
    footer.classList.toggle("lightTheme");
    theme.classList.toggle("lightTheme");
    headerMainHeader.classList.toggle("header__lightTheme");
    navLink.classList.toggle("lightTheme");
    contactLink.classList.toggle("lightTheme");

    themeName.innerText = header.classList.contains("lightTheme") ? "ciemny" : "jasny";
});



