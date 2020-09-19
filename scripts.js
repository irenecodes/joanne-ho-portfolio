// navigate portfolio
let graphicDesignButton = document.getElementById("graphic-design-btn");
let uiUXDesignButton = document.getElementById("uiux-design-btn");
let graphicDesignSection = document.getElementById("graphic-design");
let uxUIDesignSection = document.getElementById("uiux-design");
let slideLine = document.getElementById("slide-line");
// navigate the nav
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

// function getYear() {
//   let date = new Date();
//   document.getElementById("year").innerHTML = date.getFullYear();
// }

function scrollToPortfolio() {
  $("html").animate({
    scrollTop: $("#portfolio").offset().top,
  });
}

function togglePortfolio() {
  graphicDesignButton.addEventListener("click", function () {
    scrollToPortfolio();
    graphicDesignButton.classList.add("active-portfolio");
    uiUXDesignButton.classList.remove("active-portfolio");
    graphicDesignSection.style.display = "grid";
    uxUIDesignSection.style.display = "none";
    $(slideLine).css({
      width: $(".active-portfolio").width() + 10 + "px",
      left: "0%",
    });
  });

  uiUXDesignButton.addEventListener("click", function () {
    scrollToPortfolio();
    graphicDesignButton.classList.remove("active-portfolio");
    uiUXDesignButton.classList.add("active-portfolio");
    graphicDesignSection.style.display = "none";
    uxUIDesignSection.style.display = "grid";
    $(slideLine).css({
      width: $(".active-portfolio").width() + 10 + "px",
      left: "100% ",
    });
  });
}

$("a").smoothScroll({
  speed: 1000,
});

$(document).ready(function () {
  $(slideLine).css({
    width: $(".active-portfolio").width() + 10 + "px",
    left: "0%",
  });
});

// getYear();
togglePortfolio();

changeLinkState();
window.addEventListener("scroll", changeLinkState);
