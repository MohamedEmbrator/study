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
let primarySchoolBooksToggle = document.querySelector(
  "header.header .container nav > div > div > ul li a:first-child"
);
let prepSchoolBooksToggle = document.querySelector(
  "header.header .container nav > div > div > ul li:nth-child(2) a"
);
let secSchoolBooksToggle = document.querySelector(
  "header.header .container nav > div > div > ul li:nth-child(3) a"
);
let primaryExtraBooksToggle = document.querySelector(
  "header.header .container nav > .out > div > ul li:first-child a"
);
let prepExtraBooksToggle = document.querySelector(
  "header.header .container nav > .out > div > ul li:nth-child(2) a"
);
let secOneExtraBooksToggle = document.querySelector(
  "header.header .container nav > .out > div > ul li:nth-child(3) a"
);
let secTwoExtraBooksToggle = document.querySelector(
  "header.header .container nav > .out > div > ul li:nth-child(4) a"
);
let secThreeExtraBooksToggle = document.querySelector(
  "header.header .container nav > .out > div > ul li:nth-child(5) a"
);
let secThreeNotes = document.querySelector(
  "header.header .container nav > .access > div > ul li:first-child a"
);
let schoolTips = document.querySelector(
  "header.header .container nav > .advices > div > ul li:first-child a"
);
let schoolarshipTips = document.querySelector(
  "header.header .container nav > .advices > div > ul li:nth-child(2) a"
);
let secThreePhysics = document.querySelector(".articles .box .content h3");
let secThreePhysicsDescription = document.querySelector(
  ".articles .box .content p"
);
let secThreeChemstry = document.querySelector(
  ".articles .box:nth-child(2) .content h3"
);
let secThreeChemstryDescription = document.querySelector(
  ".articles .box:nth-child(2) .content p"
);
let secThreeBio = document.querySelector(
  ".articles .box:nth-child(3) .content h3"
);
let secThreeBioDescription = document.querySelector(
  ".articles .box:nth-child(3) .content p"
);
let secThreeMath = document.querySelector(
  ".articles .box:nth-child(4) .content h3"
);
let secThreeMathDescription = document.querySelector(
  ".articles .box:nth-child(4) .content p"
);
let secThreeEnglish = document.querySelector(
  ".articles .box:nth-child(5) .content h3"
);
let secThreeEnglishDescription = document.querySelector(
  ".articles .box:nth-child(5) .content p"
);
let secThreeGerman = document.querySelector(
  ".articles .box:nth-child(6) .content h3"
);
let secThreeGermanDescription = document.querySelector(
  ".articles .box:nth-child(6) .content p"
);
let secThreeItalian = document.querySelector(
  ".articles .box:nth-child(7) .content h3"
);
let secThreeItalianDescription = document.querySelector(
  ".articles .box:nth-child(7) .content p"
);
let secThreeSpanish = document.querySelector(
  ".articles .box:nth-child(8) .content h3"
);
let secThreeSpanishDescription = document.querySelector(
  ".articles .box:nth-child(8) .content p"
);
let secThreeFrench = document.querySelector(
  ".articles .box:nth-child(9) .content h3"
);
let secThreeFrenchDescription = document.querySelector(
  ".articles .box:nth-child(9) .content p"
);
let secThreeArabic = document.querySelector(
  ".articles .box:nth-child(10) .content h3"
);
let secThreeArabicDescription = document.querySelector(
  ".articles .box:nth-child(10) .content p"
);
let secThreeHistory = document.querySelector(
  ".articles .box:nth-child(11) .content h3"
);
let secThreeHistoryDescription = document.querySelector(
  ".articles .box:nth-child(11) .content p"
);
let secThreeGeoghraphy = document.querySelector(
  ".articles .box:nth-child(12) .content h3"
);
let secThreeGeoghraphyDescription = document.querySelector(
  ".articles .box:nth-child(12) .content p"
);
let secThreeGeology = document.querySelector(
  ".articles .box:nth-child(13) .content h3"
);
let secThreeGeologyDescription = document.querySelector(
  ".articles .box:nth-child(13) .content p"
);
let secTwoDirection = document.querySelectorAll(".secondary-two .box .info");
let arrows = document.querySelectorAll(".box .info i");
let boxReadMore = document.querySelectorAll(".box .info a");
let form = document.querySelector(".landing .container form");
let secThreeMainTitle = document.querySelector(".articles > .main-title");
selection.onchange = function () {
  window.localStorage.setItem("lang", selection.value);
  if (window.localStorage.getItem("lang") === "en") {
    selection.value = window.localStorage.getItem("lang");
    document.body.style.direction = "ltr";
    document.title = "Cactu's EduLife Platform | Home Page";
    landingTitle.innerHTML = "Welcome To The Cactu's EduLife Platform";
    logo.innerHTML = "Cactu's EduLife Platform";
    schoolBooksHome.innerHTML = "School Books";
    schoolBooksHome.style.margin = "0 15px 0 0";
    platformDescription.innerHTML =
      "The Cactu's EduLife Platform is a sophisticated and practical platform that will help you in your studies, and you will find books and notes for all levels of study, whether you are in Al-Azhar or Global Education, and you will find links to many teachers in all subjects on YouTube without having to waste time searching for them";
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
    secThreeMainTitle.innerHTML = "Online Lessons | Secondary Three";
    primarySchoolBooksToggle.innerHTML = "Primary Level";
    prepSchoolBooksToggle.innerHTML = "Preparatory Level";
    secSchoolBooksToggle.innerHTML = "Secondary Level";
    primaryExtraBooksToggle.innerHTML = "Primary Level";
    prepExtraBooksToggle.innerHTML = "Preparatory Level";
    secOneExtraBooksToggle.innerHTML = "Secondary One";
    secTwoExtraBooksToggle.innerHTML = "Secondary Two";
    secThreeExtraBooksToggle.innerHTML = "Secondary Three";
    secThreeNotes.innerHTML = "Secondary Three";
    schoolTips.innerHTML = "Study Tips And Motivation";
    schoolarshipTips.innerHTML = "Information About Scholarships";
    document.styleSheets[3].rules[1].style.removeProperty("left");
    document.styleSheets[3].rules[1].style.setProperty("right", "0");
    document.styleSheets[3].rules[2].style.removeProperty("right");
    document.styleSheets[3].rules[2].style.setProperty("left", "0");
    document.styleSheets[3].rules[3].style.removeProperty("right");
    document.styleSheets[3].rules[3].style.setProperty("left", "0");
    document.styleSheets[3].rules[4].style.removeProperty("right");
    document.styleSheets[3].rules[4].style.setProperty("left", "0");
    schoolarshipTips.href = "https://platform-scholarships-en.blogspot.com/";
    secThreePhysics.innerHTML = "Physics";
    secThreeChemstry.innerHTML = "Chemistry";
    secThreeBio.innerHTML = "Biology";
    secThreeMath.innerHTML = "Math";
    secThreeEnglish.innerHTML = "English";
    secThreeGerman.innerHTML = "German";
    secThreeItalian.innerHTML = "Italian";
    secThreeSpanish.innerHTML = "Spanish";
    secThreeFrench.innerHTML = "French";
    secThreeArabic.innerHTML = "Arabic";
    secThreeHistory.innerHTML = "History";
    secThreeGeoghraphy.innerHTML = "Geography";
    secThreeGeology.innerHTML = "Geology";
    secThreePhysicsDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Physics Teachers On YouTube";
    for (let i = 0; i <= arrows.length; i++) {
      arrows[i].classList.remove("fa-arrow-left");
      arrows[i].classList.add("fa-arrow-right");
      boxReadMore[i].innerHTML = "Read More";
    }
  } else if (window.localStorage.getItem("lang") === "ar") {
    selection.value = window.localStorage.getItem("lang");
    document.body.style.direction = "rtl";
    document.title = "منصة Cactu's EduLife | الصفحة الرئيسية";
    landingTitle.innerHTML = "مرحباً بكم في منصة Cactu's EduLife";
    logo.innerHTML = "منصة Cactu's EduLife";
    schoolBooksHome.innerHTML = "الكتب المدرسية";
    schoolBooksHome.style.margin = "0 0 0 15px";
    platformDescription.innerHTML =
      "منصة Cactu's EduLife هي منصة متطورة وعملية وستساعدك في دراستك وسوف تجد فيها كتب ومذكرات لجميع المراحل الدراسية سواء كنت في الأزهر أو التربية والتعليم وسوف تجد روابط لمعلمين كثر في جميع المواد على اليوتيوب بدون أن تضطر لتضييع الوقت في البحث عنهم";
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
    secThreeMainTitle.innerHTML = "الدروس الأونلاين | الثالث الثانوي";
    primarySchoolBooksToggle.innerHTML = "المرحلة الإبتدائية";
    prepSchoolBooksToggle.innerHTML = "المرحلة الإعدادية";
    secSchoolBooksToggle.innerHTML = "المرحلة الثانوية";
    primaryExtraBooksToggle.innerHTML = "المرحلة الإبتدائية";
    prepExtraBooksToggle.innerHTML = "المرحلة الإعدادية";
    secOneExtraBooksToggle.innerHTML = "الصف الأول الثانوي";
    secTwoExtraBooksToggle.innerHTML = "الصف الثاني الثانوي";
    secThreeExtraBooksToggle.innerHTML = "الصف الثالث الثانوي";
    secThreeNotes.innerHTML = "الصف الثالث الثانوي";
    schoolTips.innerHTML = "نصائح وتحفيز للدراسة";
    schoolarshipTips.innerHTML = "معلومات عن المنح الدراسية";
    document.styleSheets[3].rules[1].style.removeProperty("right");
    document.styleSheets[3].rules[1].style.setProperty("left", "0");
    document.styleSheets[3].rules[2].style.removeProperty("left");
    document.styleSheets[3].rules[2].style.setProperty("right", "0");
    document.styleSheets[3].rules[3].style.removeProperty("left");
    document.styleSheets[3].rules[3].style.setProperty("right", "0");
    document.styleSheets[3].rules[4].style.removeProperty("left");
    document.styleSheets[3].rules[4].style.setProperty("right", "0");
    schoolarshipTips.href = "https://scholarships-ar.blogspot.com/";
    secThreePhysics.innerHTML = "الفيزياء";
    secThreeChemstry.innerHTML = "الكيمياء";
    secThreeBio.innerHTML = "الأحياء";
    secThreeMath.innerHTML = "الرياضيات";
    secThreeEnglish.innerHTML = "اللغة الإنجليزية";
    secThreeGerman.innerHTML = "اللغة الألمانية";
    secThreeItalian.innerHTML = "اللغة الإيطالية";
    secThreeSpanish.innerHTML = "اللغة الاسبانية";
    secThreeFrench.innerHTML = "اللغة الفرنسية";
    secThreeArabic.innerHTML = "اللغة العربية";
    secThreeHistory.innerHTML = "التاريخ";
    secThreeGeoghraphy.innerHTML = "الجغرافيا";
    secThreeGeology.innerHTML = "الجيولوجيا";
    secThreePhysicsDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الفيزياء للصف الثالث الثانوي على اليوتيوب";
    for (let i = 0; i <= arrows.length; i++) {
      arrows[i].classList.remove("fa-arrow-right");
      arrows[i].classList.add("fa-arrow-left");
      boxReadMore[i].innerHTML = "قراءة المزيد";
    }
  }
};
//  ------- -- ------- - ------- ------ ----- ------- ------
if (window.localStorage.getItem("lang")) {
  selection.value = window.localStorage.getItem("lang");
  if (window.localStorage.getItem("lang") === "en") {
    document.body.style.direction = "ltr";
    document.title = "Cactu's EduLife Platform | Home Page";
    landingTitle.innerHTML = "Welcome To The Cactu's EduLife Platform";
    logo.innerHTML = "Outstanding Platform";
    platformDescription.innerHTML =
      "The Cactu's EduLife Platform is a sophisticated and practical platform that will help you in your studies, and you will find books and notes for all levels of study, whether you are in Al-Azhar or Global Education, and you will find links to many teachers in all subjects on YouTube without having to waste time searching for them";
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
    secThreeMainTitle.innerHTML = "Online Lessons | Secondary Three";
    primarySchoolBooksToggle.innerHTML = "Primary Level";
    prepSchoolBooksToggle.innerHTML = "Preparatory Level";
    secSchoolBooksToggle.innerHTML = "Secondary Level";
    primaryExtraBooksToggle.innerHTML = "Primary Level";
    prepExtraBooksToggle.innerHTML = "Preparatory Level";
    secOneExtraBooksToggle.innerHTML = "Secondary One";
    secTwoExtraBooksToggle.innerHTML = "Secondary Two";
    secThreeExtraBooksToggle.innerHTML = "Secondary Three";
    secThreeNotes.innerHTML = "Secondary Three";
    schoolTips.innerHTML = "Study Tips And Motivation";
    schoolarshipTips.innerHTML = "Information About Scholarships";
    document.styleSheets[3].rules[1].style.removeProperty("left");
    document.styleSheets[3].rules[1].style.setProperty("right", "0");
    document.styleSheets[3].rules[2].style.removeProperty("right");
    document.styleSheets[3].rules[2].style.setProperty("left", "0");
    document.styleSheets[3].rules[3].style.removeProperty("right");
    document.styleSheets[3].rules[3].style.setProperty("left", "0");
    document.styleSheets[3].rules[4].style.removeProperty("right");
    document.styleSheets[3].rules[4].style.setProperty("left", "0");
    schoolarshipTips.href = "https://platform-scholarships-en.blogspot.com/";
    secThreePhysics.innerHTML = "Physics";
    secThreeChemstry.innerHTML = "Chemistry";
    secThreeBio.innerHTML = "Biology";
    secThreeMath.innerHTML = "Math";
    secThreeEnglish.innerHTML = "English";
    secThreeGerman.innerHTML = "German";
    secThreeItalian.innerHTML = "Italian";
    secThreeSpanish.innerHTML = "Spanish";
    secThreeFrench.innerHTML = "French";
    secThreeArabic.innerHTML = "Arabic";
    secThreeHistory.innerHTML = "History";
    secThreeGeoghraphy.innerHTML = "Geography";
    secThreeGeology.innerHTML = "Geology";
    secThreePhysicsDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Physics Teachers On YouTube";
    for (let i = 0; i <= arrows.length; i++) {
      arrows[i].classList.remove("fa-arrow-left");
      arrows[i].classList.add("fa-arrow-right");
      boxReadMore[i].innerHTML = "Read More";
    }
    secThreePhysics.innerHTML = "Physics";
  } else if (window.localStorage.getItem("lang") === "ar") {
    document.body.style.direction = "rtl";
    document.title = "منصة Cactu's EduLife | الصفحة الرئيسية";
    landingTitle.innerHTML = "مرحباً بكم في منصة Cactu's EduLife";
    logo.innerHTML = "منصة Cactu's EduLife";
    schoolBooksHome.innerHTML = "الكتب المدرسية";
    platformDescription.innerHTML =
      "منصة Cactu's EduLife هي منصة متطورة وعملية وستساعدك في دراستك وسوف تجد فيها كتب ومذكرات لجميع المراحل الدراسية سواء كنت في الأزهر أو التربية والتعليم وسوف تجد روابط لمعلمين كثر في جميع المواد على اليوتيوب بدون أن تضطر لتضييع الوقت في البحث عنهم";
    foreignBooks.innerHTML = "الكتب الخارجية";
    notes.innerHTML = "الملازم والمذكرات";
    tips.innerHTML = "منوع";
    searchBoxPlaceHolder.placeholder = "البحث في المنصة";
    searchSubmit.value = "البحث";
    document.querySelector("header.header .container .logo img").style.margin =
      "0 0 0 5px";
    schoolBooksHome.style.margin = "0 0 0 15px";
    foreignBooks.style.margin = "0 0 0 15px";
    notes.style.margin = "0 0 0 15px";
    tips.style.margin = "0 0 0 15px";
    form.style.direction = "rtl";
    document.styleSheets[3].rules[0].style.removeProperty("right");
    document.styleSheets[3].rules[0].style.setProperty("left", "10px");
    searchBoxPlaceHolder.style.padding = "20px 20px 20px 95px";
    secThreeMainTitle.innerHTML = "الدروس الأونلاين | الثالث الثانوي";
    primarySchoolBooksToggle.innerHTML = "المرحلة الإبتدائية";
    prepSchoolBooksToggle.innerHTML = "المرحلة الإعدادية";
    secSchoolBooksToggle.innerHTML = "المرحلة الثانوية";
    primaryExtraBooksToggle.innerHTML = "المرحلة الإبتدائية";
    prepExtraBooksToggle.innerHTML = "المرحلة الإعدادية";
    secOneExtraBooksToggle.innerHTML = "الصف الأول الثانوي";
    secTwoExtraBooksToggle.innerHTML = "الصف الثاني الثانوي";
    secThreeExtraBooksToggle.innerHTML = "الصف الثالث الثانوي";
    secThreeNotes.innerHTML = "الصف الثالث الثانوي";
    schoolTips.innerHTML = "نصائح وتحفيز للدراسة";
    schoolarshipTips.innerHTML = "معلومات عن المنح الدراسية";
    document.styleSheets[3].rules[1].style.removeProperty("right");
    document.styleSheets[3].rules[1].style.setProperty("left", "0");
    document.styleSheets[3].rules[2].style.removeProperty("left");
    document.styleSheets[3].rules[2].style.setProperty("right", "0");
    document.styleSheets[3].rules[3].style.removeProperty("left");
    document.styleSheets[3].rules[3].style.setProperty("right", "0");
    document.styleSheets[3].rules[4].style.removeProperty("left");
    document.styleSheets[3].rules[4].style.setProperty("right", "0");
    schoolarshipTips.href = "https://scholarships-ar.blogspot.com/";
    secThreePhysics.innerHTML = "الفيزياء";
    secThreeChemstry.innerHTML = "الكيمياء";
    secThreeBio.innerHTML = "الأحياء";
    secThreeMath.innerHTML = "الرياضيات";
    secThreeEnglish.innerHTML = "اللغة الإنجليزية";
    secThreeGerman.innerHTML = "اللغة الألمانية";
    secThreeItalian.innerHTML = "اللغة الإيطالية";
    secThreeSpanish.innerHTML = "اللغة الاسبانية";
    secThreeFrench.innerHTML = "اللغة الفرنسية";
    secThreeArabic.innerHTML = "اللغة العربية";
    secThreeHistory.innerHTML = "التاريخ";
    secThreeGeoghraphy.innerHTML = "الجغرافيا";
    secThreeGeology.innerHTML = "الجيولوجيا";
    secThreePhysicsDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الفيزياء للصف الثالث الثانوي على اليوتيوب";
    for (let i = 0; i <= arrows.length; i++) {
      arrows[i].classList.remove("fa-arrow-right");
      arrows[i].classList.add("fa-arrow-left");
      boxReadMore[i].innerHTML = "قراءة المزيد";
    }
  }
}
// End English And Arabic Switch
