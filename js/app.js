// var typed5 = new Typed('#language', {
//     strings: [
//         'ウェブ開発者',
//         'ウェブデザイナー',
//          'ハン ワィ トゥン'],
//     typeSpeed: 60,
//     backSpeed: 60,
//     cursorChar: '_',
//     shuffle: true,
//     smartBackspace: false,
//     loop: true
// //   });

let typedInstance = null;
let eccInstance = null;
let learnInstance = null;
let navWaypointsBound = false;
const LIGHT_MODE_KEY = "lightMode";

function initTyped() {
  if (typedInstance) {
    typedInstance.destroy();
  }
  if (eccInstance) {
    eccInstance.destroy();
  }
  if (learnInstance) {
    learnInstance.destroy();
  }

  if (document.querySelector(".type")) {
    typedInstance = new Typed(".type", {
      strings: [
        "Web Developer",
        "Web Designer",
        "Han Wai Htun",
        "Photographer",
        "Front-end Developer",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });
  }

  if (document.querySelector(".ecc")) {
    eccInstance = new Typed(".ecc", {
      strings: ["Java SE", "React Js", "PHP", "Laravel 10"],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      smartBackspace: true,
    });
  }

  if (document.querySelector(".learn")) {
    learnInstance = new Typed(".learn", {
      strings: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Photo",
        "Adobe Xd",
        "Adobe AI",
      ],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });
  }
}

function initWow() {
  if (typeof WOW === "undefined") {
    return;
  }

  const wowInstance = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wowInstance.init();
}

function initVenobox() {
  if (!$.fn.venobox) {
    return;
  }

  $(".venobox").venobox({
    framewidth: "400px",
    frameheight: "auto",
    border: "3px",
    bgcolor: "#ffffffff",
    titleattr: "data-title",
    numeratio: true,
    infinigall: true,
    share: ["facebook", "twitter", "download"],
  });
}

$(".list").click(function () {
  let value = $(this).attr("data-filter");

  if (value == "all") {
    $(".itemBox").show("1000");
  } else {
    $(".itemBox")
      .not("." + value)
      .hide("1000");
    $(".itemBox")
      .filter("." + value)
      .show("1000");
  }
});
//add active class in selected item

$(".list").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(window).scroll(function () {
  let screenHeight = $(this).height();
  let currentPosition = $(this).scrollTop();

  if (currentPosition >= screenHeight - 200) {
    $(".top").addClass("top-show");
  } else {
    $(".top").removeClass("top-show");
  }
});

//nav-bar scroll function

$(window).scroll(function () {
  let screenHeight = $(this).height();
  // console.log(screenHeight)

  let currentPosition = $(this).scrollTop();
  // console.log(currentPosition);

  if (currentPosition >= screenHeight - 200) {
    $(".nav-bar").addClass("scroll-nav");
  } else {
    $(".nav-bar").removeClass("scroll-nav");
    setActive("home");
  }
});

//nav-bar active
function setActive(current) {
  $(".nav-link").removeClass("current-section");
  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
  if (navWaypointsBound || typeof $.fn.waypoint === "undefined") {
    return;
  }

  navWaypointsBound = true;
  let currentSection = $("section[id]");

  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        let currentsectionId = $(this.element).attr("id");

        setActive(currentsectionId);
      }
    },
    {
      offset: "50px",
    },
  );

  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        let currentsectionId = $(this.element).attr("id");
        // console.log(currentsectionId);

        setActive(currentsectionId);
      }
    },
    {
      offset: "0px",
    },
  );
}

function applyLightModeFromStorage() {
  const isLightMode = localStorage.getItem(LIGHT_MODE_KEY) === "true";
  $("body").toggleClass("light_mode", isLightMode);

  const lightModeToggle = document.getElementById("checkbox");
  if (lightModeToggle) {
    lightModeToggle.checked = isLightMode;
  }
}

function bindLightModeToggle() {
  const lightModeToggle = document.getElementById("checkbox");
  if (!lightModeToggle) {
    return;
  }

  lightModeToggle.onchange = function () {
    const isEnabled = this.checked;
    $("body").toggleClass("light_mode", isEnabled);
    localStorage.setItem(LIGHT_MODE_KEY, isEnabled ? "true" : "false");
  };
}

function bindColorSwitcher() {
  const switcherBtn = document.querySelector(".color-switcher-btn");
  if (switcherBtn) {
    switcherBtn.onclick = function () {
      document.querySelector(".color-switcher").classList.toggle("active");
    };
  }

  const themeButtons = document.querySelectorAll(".theme-buttons");
  themeButtons.forEach((color) => {
    color.onclick = function () {
      const dataColor = color.getAttribute("data-color");
      document
        .querySelector(":root")
        .style.setProperty("--main-color", dataColor);
    };
  });
}

//change phone size nav-bar button

const navCollapse = document.getElementById("navbarSupportedContent");
const navToggler = document.querySelector(".navbar-toggler");
const navTogglerClose = document.querySelector(".navbar-toggler2");

function setNavExpanded(isExpanded) {
  if (!navCollapse) {
    return;
  }

  navCollapse.classList.toggle("show", isExpanded);

  if (navToggler) {
    navToggler.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  }

  if (navTogglerClose) {
    navTogglerClose.setAttribute(
      "aria-expanded",
      isExpanded ? "true" : "false",
    );
  }
}

$(document).off("click.navbarToggle", ".navbar-toggler");
$(document).on("click.navbarToggle", ".navbar-toggler", function () {
  let x = $(".navbar-toggler2").html(
    ` <i class="fas fa-times fa-2x menu-icon-2"></i>`,
  );
  $(this).addClass("d-none");
  x.removeClass("d-none");
  setNavExpanded(true);
});

$(document).off("click.navbarToggleClose", ".navbar-toggler2");
$(document).on("click.navbarToggleClose", ".navbar-toggler2", function () {
  let y = $(".navbar-toggler").html(
    `<i class="fa fa-bars fa-2x menu-icon-1"></i>`,
  );
  $(this).addClass("d-none");
  y.removeClass("d-none");
  setNavExpanded(false);
});

//loader

$(window).on("load", function () {
  $(".loader-container").fadeOut(function () {
    $(this).remove();
  });
});

function getCurrentLanguage() {
  const pageContent = document.getElementById("page-content");
  return pageContent?.getAttribute("data-lang") || "en";
}

async function swapLanguage(targetLanguage) {
  const currentLanguage = getCurrentLanguage();
  if (targetLanguage === currentLanguage) {
    return;
  }

  const targetUrl = targetLanguage === "jp" ? "jp.html" : "index.html";
  const response = await fetch(targetUrl, { cache: "no-store" });
  if (!response.ok) {
    return;
  }

  const htmlText = await response.text();
  const parser = new DOMParser();
  const nextDoc = parser.parseFromString(htmlText, "text/html");
  const nextContent = nextDoc.getElementById("page-content");
  const pageContent = document.getElementById("page-content");

  if (!nextContent || !pageContent) {
    return;
  }

  pageContent.innerHTML = nextContent.innerHTML;
  pageContent.setAttribute("data-lang", targetLanguage);
  document.title = nextDoc.title || document.title;
  history.replaceState(null, "", targetUrl);

  if (typeof $.waypoints === "function") {
    $.waypoints("destroy");
  }
  navWaypointsBound = false;

  setNavExpanded(false);
  initPageScripts();
}

function bindLanguageToggle() {
  const languageToggle = document.getElementById("languageToggle");
  if (!languageToggle) {
    return;
  }

  languageToggle.checked = getCurrentLanguage() === "jp";
  languageToggle.onchange = function () {
    const selectedLanguage = this.checked ? "jp" : "en";
    localStorage.setItem("selectedLanguage", selectedLanguage);
    swapLanguage(selectedLanguage);
  };
}

function initPageScripts() {
  applyLightModeFromStorage();
  initTyped();
  initWow();
  initVenobox();
  bindLightModeToggle();
  bindColorSwitcher();
  bindLanguageToggle();
  navScroll();
}

document.addEventListener("DOMContentLoaded", function () {
  const storedLanguage = localStorage.getItem("selectedLanguage");
  if (storedLanguage && storedLanguage !== getCurrentLanguage()) {
    swapLanguage(storedLanguage);
  } else {
    initPageScripts();
  }
});

// if(lightMode === null ){
//         localStorage.setItem("lightMode",false)
//     }

// lightModeToggle.addEventListener("click",function(){
//   let  lightMode = localStorage.getItem("lightMode");

//     if(lightMode !== true){
//         $("body").addClass("light_mode");
//         localStorage.setItem("lightMode", true);
//         console.log("true")
//     }

//     else
//     {
//         $("body").removeClass("light_mode");
//         localStorage.setItem("lightMode", false);
//         console.log("false")
//     }

// })

//light mode & dark mode loacl Storage

// let lightMode = localStorage.getItem("lightMode");
// const lightModeToggle= document.getElementById("checkbox")

// const enableLightMode = function(){
//     //1. add the class light_mode
//     $("body").addClass("light_mode");
//     // 2. upadte the local storage
//     localStorage.setItem("lightMode", true);

// }

// const disableLightMode = function(){
//     //1. add the class light_mode
//     $("body").removeClass("light_mode");
//     // 2. upadte the local storage
//     localStorage.setItem("lightMode", false);

// }

// if(lightMode === true){
//     enableLightMode();
// }

// lightModeToggle.addEventListener("click",function(){
//     lightMode = localStorage.getItem("lightMode");

//     if(lightMode !== true){
//         enableLightMode();
//     }

//     else{
//         disableLightMode();
//     }
// })

// let check = document.getElementById("checkbox");
// let body = document.getElementsByClassName("body");

// if(localStorage.getItem("lightMode")=== null ){
//     localStorage.setItem("lightMode","false")
// }

// let lightMode = localStorage.getItem("lightMode")
// if(lightMode === true){
//     $("body").addClass("light_mode")

// }

//  function changeStatus(){
//     if(localStorage.getItem('lightMode')==="true"){
//         localStorage.setItem("lightMode","false")

//         $("body").removeClass("light_mode")

//      }
//      else{
//          localStorage.setItem("lightMode","true");

//         $("body").addClass("light_mode")

//      }
//    }
