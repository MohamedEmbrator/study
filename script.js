let allNavDivs = document.querySelectorAll("nav > div > div");
let globalBooks = document.querySelector(".global-books");
let navigatin = document.getElementById("header");
const scrollButton = document.querySelector("button.scroll");
const scrollProgress = document.querySelector(".scroll-height");

allNavDivs.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allNavDivs.forEach(function (ele) {
      ele.classList.remove("active");
    });

    // Add Active Class To This Element
    this.classList.add("active");
    let activeDiv = document.querySelector(
      "header .container nav > div > .active"
    );
    activeDiv.addEventListener("click", function () {
      activeDiv.classList.toggle("active");
    });
  };
});


let toggleBtn = document.getElementById("btn");
let navBar = document.getElementById("nav");
toggleBtn.addEventListener("click", function () {
  navBar.classList.toggle("show");
});
const totalHeight = document.body.scrollHeight - window.innerHeight;
const scrollProgressDiv = document.querySelector(".scroll-height > div");
window.onscroll = function () {
  if (window.scrollY >= 150) {
    navigatin.classList.add("fixed");
  } else {
    navigatin.classList.remove("fixed");
  }
  if (window.scrollY >= 600) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  if (window.scrollY <= 0) {
    scrollProgress.style.display = "none";
  } else {
    scrollProgress.style.display = "block";
  }
  scrollProgressDiv.style.width = `${progressHeight}%`;
};
scrollProgress.style.top = `${
  document.querySelector("header.header").offsetHeight
}px`;
window.onresize = function () {
  scrollProgress.style.top = `${
    document.querySelector("header.header").offsetHeight
  }px`;
};
scrollButton.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
});
