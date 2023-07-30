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
window.onscroll = function () {
  if (window.scrollY >= 150) {
    navigatin.classList.add("fixed");
  } else {
    navigatin.classList.remove("fixed");
  }
};

// Start English And Arabic Switch

let selection = document.querySelector("header.header .container > select");
let landingTitle = document.querySelector(
  ".landing .container .content .text h1"
);
let logo = document.querySelector("header.header .container .logo > span");
let schoolBooksHome = document.querySelector(
  "header.header .container > nav.nav > .global > div > span"
);
let foreignBooks = document.querySelector(
  "header.header .container > nav.nav > .out > div > span"
);
let platformDescription = document.querySelector(
  ".landing .container .description"
);
let notes = document.querySelector(
  "header.header .container > nav.nav > .access > div > span"
);
let tips = document.querySelector(
  "header.header .container > nav.nav > .advices > div > span"
);
let searchBoxPlaceHolder = document.querySelector(
  ".landing .container form input[type='search']"
);
let searchSubmit = document.querySelector(
  ".landing .container form input[type='submit']"
);
let form = document.querySelector(".landing .container form");
selection.onchange = function () {
  window.localStorage.setItem("lang", selection.value);
  if (window.localStorage.getItem("lang") === "en") {
    selection.value = window.localStorage.getItem("lang");
    document.body.style.direction = "ltr";
    document.title = "Outstanding Platform | Home Page";
    landingTitle.innerHTML = "Welcome To The Outstanding Platform";
    logo.innerHTML = "Outstanding Platform";
    schoolBooksHome.innerHTML = "School Books";
    schoolBooksHome.style.margin = "0 15px 0 0";
    platformDescription.innerHTML =
      "The Outstanding Platform is a sophisticated and practical platform that will help you in your studies, and you will find books and notes for all levels of study, whether you are in Al-Azhar or Global Education, and you will find links to many teachers in all subjects on YouTube without having to waste time searching for them";
    foreignBooks.innerHTML = "Extra Books";
    notes.innerHTML = "Notes";
    tips.innerHTML = "Tips And Information";
    searchBoxPlaceHolder.placeholder = "Search The Platform";
    searchSubmit.value = "Search";
    document.querySelector("header.header .container .logo img").style.margin =
      "0 5px 0 0";
    foreignBooks.style.margin = "0 15px 0 0";
    notes.style.margin = "0 15px 0 0";
    tips.style.margin = "0 15px 0 0";
    form.style.direction = "ltr";
    document.styleSheets[3].rules[0].style.removeProperty("left");
    document.styleSheets[3].rules[0].style.setProperty("right", "10px");
    searchBoxPlaceHolder.style.padding = "20px 95px 20px 20px";
  } else if (window.localStorage.getItem("lang") === "ar") {
    selection.value = window.localStorage.getItem("lang");
    document.body.style.direction = "rtl";
    document.title = "منصة المتفوقين | الصفحة الرئيسية";
    landingTitle.innerHTML = "مرحباً بكم في منصة المتفوقين";
    logo.innerHTML = "منصة المتفوقين";
    schoolBooksHome.innerHTML = "الكتب المدرسية";
    schoolBooksHome.style.margin = "0 0 0 15px";
    platformDescription.innerHTML =
      "منصة المتفوقين هي منصة متطورة وعملية وستساعدك في دراستك وسوف تجد فيها كتب ومذكرات لجميع المراحل الدراسية سواء كنت في الأزهر أو التربية والتعليم وسوف تجد روابط لمعلمين كثر في جميع المواد على اليوتيوب بدون أن تضطر لتضييع الوقت في البحث عنهم";
    foreignBooks.innerHTML = "الكتب الخارجية";
    notes.innerHTML = "الملازم والمذكرات";
    tips.innerHTML = "منوع";
    searchBoxPlaceHolder.placeholder = "البحث في المنصة";
    searchSubmit.value = "البحث";
    document.querySelector("header.header .container .logo img").style.margin =
      "0 0 0 5px";
    foreignBooks.style.margin = "0 0 0 15px";
    notes.style.margin = "0 0 0 15px";
    tips.style.margin = "0 0 0 15px";
    form.style.direction = "rtl";
    document.styleSheets[3].rules[0].style.removeProperty("right");
    document.styleSheets[3].rules[0].style.setProperty("left", "10px");
    searchBoxPlaceHolder.style.padding = "20px 20px 20px 95px";
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
    platformDescription.innerHTML =
      "The Outstanding Platform is a sophisticated and practical platform that will help you in your studies, and you will find books and notes for all levels of study, whether you are in Al-Azhar or Global Education, and you will find links to many teachers in all subjects on YouTube without having to waste time searching for them";
    foreignBooks.innerHTML = "Extra Books";
    schoolBooksHome.innerHTML = "School Books";
    notes.innerHTML = "Notes";
    tips.innerHTML = "Tips And Information";
    searchBoxPlaceHolder.placeholder = "Search The Platform";
    searchSubmit.value = "Search";
    document.querySelector("header.header .container .logo img").style.margin =
      "0 5px 0 0";
    schoolBooksHome.style.margin = "0 15px 0 0";
    foreignBooks.style.margin = "0 15px 0 0";
    notes.style.margin = "0 15px 0 0";
    tips.style.margin = "0 15px 0 0";
    form.style.direction = "ltr";
    document.styleSheets[3].rules[0].style.removeProperty("left");
    document.styleSheets[3].rules[0].style.setProperty("right", "10px");
    searchBoxPlaceHolder.style.padding = "20px 95px 20px 20px";
  } else if (window.localStorage.getItem("lang") === "ar") {
    document.body.style.direction = "rtl";
    document.title = "منصة المتفوقين | الصفحة الرئيسية";
    landingTitle.innerHTML = "مرحباً بكم في منصة المتفوقين";
    logo.innerHTML = "منصة المتفوقين";
    schoolBooksHome.innerHTML = "الكتب المدرسية";
    platformDescription.innerHTML =
      "منصة المتفوقين هي منصة متطورة وعملية وستساعدك في دراستك وسوف تجد فيها كتب ومذكرات لجميع المراحل الدراسية سواء كنت في الأزهر أو التربية والتعليم وسوف تجد روابط لمعلمين كثر في جميع المواد على اليوتيوب بدون أن تضطر لتضييع الوقت في البحث عنهم";
    foreignBooks.innerHTML = "الكتب الخارجية";
    notes.innerHTML = "الملازم والمذكرات";
    tips.innerHTML = "منوع";
    searchBoxPlaceHolder.placeholder = "البحث في المنصة";
    searchSubmit.value = "البحث";
    document.querySelector("header.header .container .logo img").style.margin =
      "0 0 0 5px";
  }
  schoolBooksHome.style.margin = "0 0 0 15px";
  foreignBooks.style.margin = "0 0 0 15px";
  notes.style.margin = "0 0 0 15px";
  tips.style.margin = "0 0 0 15px";
  form.style.direction = "rtl";
  document.styleSheets[3].rules[0].style.removeProperty("right");
  document.styleSheets[3].rules[0].style.setProperty("left", "10px");
  searchBoxPlaceHolder.style.padding = "20px 20px 20px 95px";
}
// End English And Arabic Switch
