let allNavDivs = document.querySelectorAll("nav > div > div");
let globalBooks = document.querySelector(".global-books");
let navigatin = document.getElementById("header");
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
window.onscroll = function () {
  if (window.scrollY >= 150) {
    navigatin.classList.add("fixed");
  } else {
    navigatin.classList.remove("fixed");
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let toggleBtn = document.getElementById("btn");
let navBar = document.getElementById("nav");
toggleBtn.addEventListener("click", function () {
  navBar.classList.toggle("show");
});

// Start English And Arabic Switch
let selection = document.querySelector("header.header .container > select");
let landingTitle = document.querySelector(
  ".landing .container .content .text h1"
);
let logo = document.querySelector("header.header .container .logo > span");
let schoolBooksHome = document.querySelector(
  "header.header .container > nav.nav > .global > div > span"
);
let ForeignBooks = document.querySelector(
  "header.header .container > nav.nav > .out > div > span"
);

selection.onchange = function () {
  window.localStorage.setItem("lang", selection.value);
  if (window.localStorage.getItem("lang") === "en") {
    selection.value = window.localStorage.getItem("lang");
    document.body.style.direction = "ltr";
    document.title = "Outstanding Platform | Home Page";
    landingTitle.innerHTML = "Welcome To The Outstanding Platform";
    logo.innerHTML = "Outstanding Platform";
    schoolBooksHome.innerHTML = "School Books";
  } else if (window.localStorage.getItem("lang") === "ar") {
    selection.value = window.localStorage.getItem("lang");
    document.body.style.direction = "rtl";
    document.title = "منصة المتفوقين | الصفحة الرئيسية";
    landingTitle.innerHTML = "مرحباً بكم في منصة المتفوقين";
    logo.innerHTML = "منصة المتفوقين";
    schoolBooksHome.innerHTML = "الكتب المدرسية";
  }
};
//  ------- -- ------- - ------- ------ ----- ------- ------
if (window.localStorage.getItem("lang")) {
  selection.value = window.localStorage.getItem("lang");
  if (window.localStorage.getItem("lang") === "en") {
    document.body.style.direction = "ltr";
    document.title = "Outstanding Platform | Home Page";
    landingTitle.innerHTML = "Welcome To The Outstanding Platform";
    logo.innerHTML = "Outstanding Platform";
    schoolBooksHome.innerHTML = "School Books";
  } else if (window.localStorage.getItem("lang") === "ar") {
    document.body.style.direction = "rtl";
    document.title = "منصة المتفوقين | الصفحة الرئيسية";
    landingTitle.innerHTML = "مرحباً بكم في منصة المتفوقين";
    logo.innerHTML = "منصة المتفوقين";
    schoolBooksHome.innerHTML = "الكتب المدرسية";
  }
}
// End English And Arabic Switch
