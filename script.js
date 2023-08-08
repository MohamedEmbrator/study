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
let secThreeCourseDescription = document.querySelector(
  ".articles .box:nth-child(14) .content p"
);
let secTowPhysics = document.querySelector(".secondary-two .box .content h3");
let secTwoPhysicsDescription = document.querySelector(
  ".secondary-two .box .content p"
);
let secTowChemistry = document.querySelector(
  ".secondary-two .box:nth-child(2) .content h3"
);
let secTowChemistryDescription = document.querySelector(
  ".secondary-two .box:nth-child(2) .content p"
);
let secTowBio = document.querySelector(
  ".secondary-two .box:nth-child(3) .content h3"
);
let secTowBioDescription = document.querySelector(
  ".secondary-two .box:nth-child(3) .content p"
);
let secTowMath = document.querySelector(
  ".secondary-two .box:nth-child(4) .content h3"
);
let secTowMathDescription = document.querySelector(
  ".secondary-two .box:nth-child(4) .content p"
);
let secTowEnglish = document.querySelector(
  ".secondary-two .box:nth-child(5) .content h3"
);
let secTowEnglishDescription = document.querySelector(
  ".secondary-two .box:nth-child(5) .content p"
);
let secTowGerman = document.querySelector(
  ".secondary-two .box:nth-child(6) .content h3"
);
let secTowGermanDescription = document.querySelector(
  ".secondary-two .box:nth-child(6) .content p"
);
let secTowItalian = document.querySelector(
  ".secondary-two .box:nth-child(7) .content h3"
);
let secTowItalianDescription = document.querySelector(
  ".secondary-two .box:nth-child(7) .content p"
);
let secTowFrench = document.querySelector(
  ".secondary-two .box:nth-child(8) .content h3"
);
let secTowFrenchDescription = document.querySelector(
  ".secondary-two .box:nth-child(8) .content p"
);
let secTowArabic = document.querySelector(
  ".secondary-two .box:nth-child(9) .content h3"
);
let secTowArabicDescription = document.querySelector(
  ".secondary-two .box:nth-child(9) .content p"
);
let secTowHistory = document.querySelector(
  ".secondary-two .box:nth-child(10) .content h3"
);
let secTowHistoryDescription = document.querySelector(
  ".secondary-two .box:nth-child(10) .content p"
);
let secTowGeography = document.querySelector(
  ".secondary-two .box:nth-child(11) .content h3"
);
let secTowGeographyDescription = document.querySelector(
  ".secondary-two .box:nth-child(11) .content p"
);
let secTowCourseDescription = document.querySelector(
  ".secondary-two .box:nth-child(12) .content p"
);
let secOnePhysics = document.querySelector(".secondary-one .box .content h3");
let secOnePhysicsDescription = document.querySelector(
  ".secondary-one .box .content p"
);
let secOneChemistry = document.querySelector(
  ".secondary-one .box:nth-child(2) .content h3"
);
let secOneChemistryDescription = document.querySelector(
  ".secondary-one .box:nth-child(2) .content p"
);
let secOneBio = document.querySelector(
  ".secondary-one .box:nth-child(3) .content h3"
);
let secOneBioDescription = document.querySelector(
  ".secondary-one .box:nth-child(3) .content p"
);
let secOneMath = document.querySelector(
  ".secondary-one .box:nth-child(4) .content h3"
);
let secOneMathDescription = document.querySelector(
  ".secondary-one .box:nth-child(4) .content p"
);
let secOneEnglish = document.querySelector(
  ".secondary-one .box:nth-child(5) .content h3"
);
let secOneEnglishDescription = document.querySelector(
  ".secondary-one .box:nth-child(5) .content p"
);
let secOneGerman = document.querySelector(
  ".secondary-one .box:nth-child(6) .content h3"
);
let secOneGermanDescription = document.querySelector(
  ".secondary-one .box:nth-child(6) .content p"
);
let secOneItalian = document.querySelector(
  ".secondary-one .box:nth-child(7) .content h3"
);
let secOneItalianDescription = document.querySelector(
  ".secondary-one .box:nth-child(7) .content p"
);
let secOneFrench = document.querySelector(
  ".secondary-one .box:nth-child(8) .content h3"
);
let secOneFrenchDescription = document.querySelector(
  ".secondary-one .box:nth-child(8) .content p"
);
let secOneArabic = document.querySelector(
  ".secondary-one .box:nth-child(9) .content h3"
);
let secOneArabicDescription = document.querySelector(
  ".secondary-one .box:nth-child(9) .content p"
);
let secOneHistory = document.querySelector(
  ".secondary-one .box:nth-child(10) .content h3"
);
let secOneHistoryDescription = document.querySelector(
  ".secondary-one .box:nth-child(10) .content p"
);
let secOneGeography = document.querySelector(
  ".secondary-one .box:nth-child(11) .content h3"
);
let secOneGeographyDescription = document.querySelector(
  ".secondary-one .box:nth-child(11) .content p"
);
let secOneCourseDescription = document.querySelector(
  ".secondary-one .box:nth-child(12) .content p"
);
let arrows = document.querySelectorAll(".box .info i");
let boxReadMore = document.querySelectorAll(".box .info a");
let form = document.querySelector(".landing .container form");
let secThreeMainTitle = document.querySelector(".articles > .main-title");
let secTwoMainTitle = document.querySelector(".secondary-two .main-title");
let secOneMainTitle = document.querySelector(".secondary-one .main-title");
let contactMainTitle = document.querySelector(".contact .main-title");
let instaTitle = document.querySelector(".contact .container .box .info > h4");
let facebookTitle = document.querySelector(
  ".contact .container .box:nth-child(2) .info > h4"
);
let linkedInTitle = document.querySelector(
  ".contact .container .box:nth-child(3) .info > h4"
);
let emailTitle = document.querySelector(
  ".contact .container .box:nth-child(4) .info > h4"
);
let youtubeTitle = document.querySelector(
  ".contact .container .box:nth-child(5) .info > h4"
);
let suggestTitle = document.querySelector(
  ".contact .container .box:nth-child(6) .info > h4"
);
let clickBtnOne = document.querySelector(
  ".contact .container .box:first-child .info > a"
);
let clickBtnTwo = document.querySelector(
  ".contact .container .box:nth-child(2) .info > a"
);
let clickBtnThree = document.querySelector(
  ".contact .container .box:nth-child(3) .info > a"
);
let clickBtnFour = document.querySelector(
  ".contact .container .box:nth-child(4) .info > a"
);
let clickBtnFive = document.querySelector(
  ".contact .container .box:nth-child(5) .info > a"
);
let clickBtnSix = document.querySelector(
  ".contact .container .box:nth-child(6) .info > a"
);
let footerDescription = document.querySelector("footer > p:first-child");
let copyRights = document.querySelector("footer .container .footer-title");
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
    secThreeChemstryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Chemistry Teachers On YouTube";
    secThreeBioDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Biology Teachers On YouTube";
    secThreeMathDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Math Teachers On YouTube";
    secThreeEnglishDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three English Language Teachers On YouTube";
    secThreeGermanDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three German Language Teachers On YouTube";
    secThreeItalianDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Italian Language Teachers On YouTube";
    secThreeSpanishDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Spanish Language Teachers On YouTube";
    secThreeFrenchDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three French Language Teachers On YouTube";
    secThreeArabicDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Arabic Language Teachers On YouTube";
    secThreeHistoryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three History Teachers On YouTube";
    secThreeGeoghraphyDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Geography Teachers On YouTube";
    secThreeGeologyDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Geology Teachers On YouTube";
    secThreeCourseDescription.innerHTML =
      "A Large Group of links includes some English language courses to strengthen most skills";
    secTwoMainTitle.innerHTML = "Online Lessons | Secondary Two";
    secTwoMainTitle.style.textTransform = "capitalize";
    secOneMainTitle.innerHTML = "Online Lessons | Secondary One";
    secOneMainTitle.style.textTransform = "capitalize";
    secTowPhysics.innerHTML = "Physics";
    secTowChemistry.innerHTML = "Chemistry";
    secTowBio.innerHTML = "Biology";
    secTowMath.innerHTML = "Math";
    secTowEnglish.innerHTML = "English";
    secTowGerman.innerHTML = "German";
    secTowItalian.innerHTML = "Italian";
    secTowFrench.innerHTML = "French";
    secTowArabic.innerHTML = "Arabic";
    secTowHistory.innerHTML = "History";
    secTowGeography.innerHTML = "Geography";
    secTowCourseDescription.innerHTML =
      "A Large Group of links includes some English language courses to strengthen most skills";
    secTwoPhysicsDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Physics Teachers On YouTube";
    secTowChemistryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Chemistry Teachers On YouTube";
    secTowBioDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Biology Teachers On YouTube";
    secTowMathDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Math Teachers On YouTube";
    secTowEnglishDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two English Language Teachers On YouTube";
    secTowGermanDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two German Language Teachers On YouTube";
    secTowItalianDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Italian Language Teachers On YouTube";
    secTowFrenchDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two French Language Teachers On YouTube";
    secTowArabicDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Arabic Language Teachers On YouTube";
    secTowHistoryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two History Teachers On YouTube";
    secTowGeographyDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Geography Teachers On YouTube";
    secOnePhysics.innerHTML = "Physics";
    secOneChemistry.innerHTML = "Chemistry";
    secOneBio.innerHTML = "Biology";
    secOneMath.innerHTML = "Math";
    secOneEnglish.innerHTML = "English";
    secOneGerman.innerHTML = "German";
    secOneItalian.innerHTML = "Italian";
    secOneFrench.innerHTML = "French";
    secOneArabic.innerHTML = "Arabic";
    secOneHistory.innerHTML = "History";
    secOneGeography.innerHTML = "Geography";
    secOneCourseDescription.innerHTML =
      "A Large Group of links includes some English language courses to strengthen most skills";
    secOnePhysicsDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Physics Teachers On YouTube";
    secOneChemistryDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Chemistry Teachers On YouTube";
    secOneBioDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Biology Teachers On YouTube";
    secOneMathDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Math Teachers On YouTube";
    secOneEnglishDescription.innerHTML =
      "A Large Group of Links including the best Secondary One English Language Teachers On YouTube";
    secOneGermanDescription.innerHTML =
      "A Large Group of Links including the best Secondary One German Language Teachers On YouTube";
    secOneItalianDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Italian Language Teachers On YouTube";
    secOneFrenchDescription.innerHTML =
      "A Large Group of Links including the best Secondary One French Language Teachers On YouTube";
    secOneArabicDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Arabic Language Teachers On YouTube";
    secOneHistoryDescription.innerHTML =
      "A Large Group of Links including the best Secondary One History Teachers On YouTube";
    secOneGeographyDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Geography Teachers On YouTube";
    contactMainTitle.innerHTML = "Contact us";
    instaTitle.innerHTML = "Contact with us on Instagram";
    facebookTitle.innerHTML = "Contact with us on Facebook";
    linkedInTitle.innerHTML = "Contact with me on LinkedIn";
    youtubeTitle.innerHTML = "My YouTube Channel";
    suggestTitle.innerHTML =
      "You can suggest any addition to this Website via this link";
    emailTitle.innerHTML = "Contact me via Email";
    clickBtnOne.innerHTML = "Click here";
    clickBtnTwo.innerHTML = "Click here";
    clickBtnThree.innerHTML = "Click here";
    clickBtnFour.innerHTML = "Click here";
    clickBtnFive.innerHTML = "Click here";
    clickBtnSix.innerHTML = "Click here";
    footerDescription.innerHTML =
      "This Platform was built carefully with the aim of saving students time in searching for anything related to studying and facilitating the means of studying for them.";
    copyRights.innerHTML =
      "All Rights Reserved &copy;@<span>Mohamed Embrator And Rokaya Zaki</span><sub>2023</sub>";
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
    secThreeChemstryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الكيمياء للصف الثالث الثانوي على اليوتيوب";
    secThreeBioDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الأحياء للصف الثالث الثانوي على اليوتيوب";
    secThreeMathDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الرياضيات للصف الثالث الثانوي على اليوتيوب";
    secThreeEnglishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإنجليزية للصف الثالث الثانوي على اليوتيوب";
    secThreeGermanDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الألمانية للصف الثالث الثانوي على اليوتيوب";
    secThreeItalianDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإيطالية للصف الثالث الثانوي على اليوتيوب";
    secThreeSpanishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الاسبانية للصف الثالث الثانوي على اليوتيوب";
    secThreeFrenchDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الفرنسية للصف الثالث الثانوي على اليوتيوب";
    secThreeArabicDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة العربية للصف الثالث الثانوي على اليوتيوب";
    secThreeHistoryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة التاريخ للصف الثالث الثانوي على اليوتيوب";
    secThreeGeoghraphyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجغرافيا للصف الثالث الثانوي على اليوتيوب";
    secThreeGeologyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجيولوجيا للصف الثالث الثانوي على اليوتيوب";
    secThreeCourseDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم بعض كورسات اللغة الإنجليزية لتقوية معظم المهارات";
    secTwoMainTitle.innerHTML = "الدروس الأونلاين | الثاني الثانوي";
    secOneMainTitle.innerHTML = "الدروس الأونلاين | الأول الثانوي";
    secTowPhysics.innerHTML = "الفيزياء";
    secTowChemistry.innerHTML = "الكيمياء";
    secTowBio.innerHTML = "الأحياء";
    secTowMath.innerHTML = "الرياضيات";
    secTowEnglish.innerHTML = "اللغة الإنجليزية";
    secTowFrench.innerHTML = "اللغة الفرنسية";
    secTowGerman.innerHTML = "اللغة الألمانية";
    secTowItalian.innerHTML = "اللغة الإيطالية";
    secTowArabic.innerHTML = "اللغة العربية";
    secTowHistory.innerHTML = "التاريخ";
    secTowGeography.innerHTML = "الجغرافيا";
    secTowCourseDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم بعض كورسات اللغة الإنجليزية لتقوية معظم المهارات";
    secTwoPhysicsDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الفيزياء للصف الثاني الثانوي على اليوتيوب";
    secTowChemistryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الكيمياء للصف الثاني الثانوي على اليوتيوب";
    secTowBioDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الأحياء للصف الثاني الثانوي على اليوتيوب";
    secTowMathDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الرياضيات للصف الثاني الثانوي على اليوتيوب";
    secTowEnglishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإنجليزية للصف الثاني الثانوي على اليوتيوب";
    secTowGermanDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الألمانية للصف الثاني الثانوي على اليوتيوب";
    secTowItalianDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإيطالية للصف الثاني الثانوي على اليوتيوب";
    secTowFrenchDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الفرنسية للصف الثاني الثانوي على اليوتيوب";
    secTowArabicDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة العربية للصف الثاني الثانوي على اليوتيوب";
    secTowHistoryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة التاريخ للصف الثاني الثانوي على اليوتيوب";
    secTowGeographyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجغرافيا للصف الثاني الثانوي على اليوتيوب";
    secOnePhysics.innerHTML = "الفيزياء";
    secOneChemistry.innerHTML = "الكيمياء";
    secOneBio.innerHTML = "الأحياء";
    secOneMath.innerHTML = "الرياضيات";
    secOneEnglish.innerHTML = "اللغة الإنجليزية";
    secOneGerman.innerHTML = "اللغة الألمانية";
    secOneItalian.innerHTML = "اللغة الإيطالية";
    secOneFrench.innerHTML = "اللغة الفرنسية";
    secOneArabic.innerHTML = "اللغة العربية";
    secOneHistory.innerHTML = "التاريخ";
    secOneGeography.innerHTML = "الجغرافيا";
    secOneCourseDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم بعض كورسات اللغة الإنجليزية لتقوية معظم المهارات";
    secOnePhysicsDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الفيزياء للصف الأول الثانوي على اليوتيوب";
    secOneChemistryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الكيمياء للصف الأول الثانوي على اليوتيوب";
    secOneBioDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الأحياء للصف الأول الثانوي على اليوتيوب";
    secOneMathDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الرياضيات للصف الأول الثانوي على اليوتيوب";
    secOneEnglishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإنجليزية للصف الأول الثانوي على اليوتيوب";
    secOneGermanDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الألمانية للصف الأول الثانوي على اليوتيوب";
    secOneItalianDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإيطالية للصف الأول الثانوي على اليوتيوب";
    secOneFrenchDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الفرنسية للصف الأول الثانوي على اليوتيوب";
    secOneArabicDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة العربية للصف الأول الثانوي على اليوتيوب";
    secOneHistoryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة التاريخ للصف الأول الثانوي على اليوتيوب";
    secOneGeographyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجغرافيا للصف الأول الثانوي على اليوتيوب";
    contactMainTitle.innerHTML = "تواصل معنا";
    instaTitle.innerHTML = "تواصل معنا على إنستجرام";
    facebookTitle.innerHTML = "تواصل معنا على فيسبوك";
    linkedInTitle.innerHTML = "تواصل معي على لينكد إن";
    youtubeTitle.innerHTML = "قناتي على اليوتيوب";
    emailTitle.innerHTML = "راسلني عبر البريد الإلكتروني";
    suggestTitle.innerHTML = "ويمكنك إقتراح أي إضافة في الموقع عبر هذا الرابط";
    clickBtnOne.innerHTML = "إضغط هنا";
    clickBtnTwo.innerHTML = "إضغط هنا";
    clickBtnThree.innerHTML = "إضغط هنا";
    clickBtnFour.innerHTML = "إضغط هنا";
    clickBtnFive.innerHTML = "إضغط هنا";
    clickBtnSix.innerHTML = "إضغط هنا";
    footerDescription.innerHTML =
      "تم بناء هذه المنصة بعناية وبغرض توفير الوقت على الطلاب في البحث عن أي شيئ يخص الدراسة وتسهيل وسائل الدراسة لهم.";
    copyRights.innerHTML =
      "جميع الحقوق محفوظة لدى © <sub>2023</sub><span>Mohamed Embrator And Rokaya Zaki</span>";
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
    logo.innerHTML = "Cactu's EduLife Platform";
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
    secThreeChemstryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Chemistry Teachers On YouTube";
    secThreeBioDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Biology Teachers On YouTube";
    secThreeMathDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Math Teachers On YouTube";
    secThreeEnglishDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three English Language Teachers On YouTube";
    secThreeGermanDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three German Language Teachers On YouTube";
    secThreeItalianDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Italian Language Teachers On YouTube";
    secThreeSpanishDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Spanish Language Teachers On YouTube";
    secThreeFrenchDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three French Language Teachers On YouTube";
    secThreeArabicDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Arabic Language Teachers On YouTube";
    secThreeHistoryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three History Teachers On YouTube";
    secThreeGeoghraphyDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Geography Teachers On YouTube";
    secThreeGeologyDescription.innerHTML =
      "A Large Group of Links including the best Secondary Three Geology Teachers On YouTube";
    secThreeCourseDescription.innerHTML =
      "A Large Group of links includes some English language courses to strengthen most skills";
    secTwoMainTitle.innerHTML = "Online Lessons | Secondary Two";
    secTwoMainTitle.style.textTransform = "capitalize";
    secOneMainTitle.innerHTML = "Online Lessons | Secondary One";
    secOneMainTitle.style.textTransform = "capitalize";
    secTowPhysics.innerHTML = "Physics";
    secTowChemistry.innerHTML = "Chemistry";
    secTowBio.innerHTML = "Biology";
    secTowMath.innerHTML = "Math";
    secTowEnglish.innerHTML = "English";
    secTowGerman.innerHTML = "German";
    secTowItalian.innerHTML = "Italian";
    secTowFrench.innerHTML = "French";
    secTowArabic.innerHTML = "Arabic";
    secTowHistory.innerHTML = "History";
    secTowGeography.innerHTML = "Geography";
    secTowCourseDescription.innerHTML =
      "A Large Group of links includes some English language courses to strengthen most skills";
    secTwoPhysicsDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Physics Teachers On YouTube";
    secTowChemistryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Chemistry Teachers On YouTube";
    secTowBioDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Biology Teachers On YouTube";
    secTowMathDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Math Teachers On YouTube";
    secTowEnglishDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two English Language Teachers On YouTube";
    secTowGermanDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two German Language Teachers On YouTube";
    secTowItalianDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Italian Language Teachers On YouTube";
    secTowFrenchDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two French Language Teachers On YouTube";
    secTowArabicDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Arabic Language Teachers On YouTube";
    secTowHistoryDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two History Teachers On YouTube";
    secTowGeographyDescription.innerHTML =
      "A Large Group of Links including the best Secondary Two Geography Teachers On YouTube";
    secOnePhysics.innerHTML = "Physics";
    secOneChemistry.innerHTML = "Chemistry";
    secOneBio.innerHTML = "Biology";
    secOneMath.innerHTML = "Math";
    secOneEnglish.innerHTML = "English";
    secOneGerman.innerHTML = "German";
    secOneItalian.innerHTML = "Italian";
    secOneFrench.innerHTML = "French";
    secOneArabic.innerHTML = "Arabic";
    secOneHistory.innerHTML = "History";
    secOneGeography.innerHTML = "Geography";
    secOneCourseDescription.innerHTML =
      "A Large Group of links includes some English language courses to strengthen most skills";
    secOnePhysicsDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Physics Teachers On YouTube";
    secOneChemistryDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Chemistry Teachers On YouTube";
    secOneBioDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Biology Teachers On YouTube";
    secOneMathDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Math Teachers On YouTube";
    secOneEnglishDescription.innerHTML =
      "A Large Group of Links including the best Secondary One English Language Teachers On YouTube";
    secOneGermanDescription.innerHTML =
      "A Large Group of Links including the best Secondary One German Language Teachers On YouTube";
    secOneItalianDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Italian Language Teachers On YouTube";
    secOneFrenchDescription.innerHTML =
      "A Large Group of Links including the best Secondary One French Language Teachers On YouTube";
    secOneArabicDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Arabic Language Teachers On YouTube";
    secOneHistoryDescription.innerHTML =
      "A Large Group of Links including the best Secondary One History Teachers On YouTube";
    secOneGeographyDescription.innerHTML =
      "A Large Group of Links including the best Secondary One Geography Teachers On YouTube";
    contactMainTitle.innerHTML = "Contact us";
    instaTitle.innerHTML = "Contact with us on Instagram";
    facebookTitle.innerHTML = "Contact with us on Facebook";
    linkedInTitle.innerHTML = "Contact with me on LinkedIn";
    youtubeTitle.innerHTML = "My YouTube Channel";
    suggestTitle.innerHTML =
      "You can suggest any addition to this Website via this link";
    emailTitle.innerHTML = "Contact me via Email";
    clickBtnOne.innerHTML = "Click here";
    clickBtnTwo.innerHTML = "Click here";
    clickBtnThree.innerHTML = "Click here";
    clickBtnFour.innerHTML = "Click here";
    clickBtnFive.innerHTML = "Click here";
    clickBtnSix.innerHTML = "Click here";
    footerDescription.innerHTML =
      "This Platform was built carefully with the aim of saving students time in searching for anything related to studying and facilitating the means of studying for them.";
    copyRights.innerHTML =
      "All Rights Reserved &copy;@<span>Mohamed Embrator And Rokaya Zaki</span><sub>2023</sub>";
    for (let i = 0; i <= arrows.length; i++) {
      arrows[i].classList.remove("fa-arrow-left");
      arrows[i].classList.add("fa-arrow-right");
      boxReadMore[i].innerHTML = "Read More";
    }
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
    secThreeChemstryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الكيمياء للصف الثالث الثانوي على اليوتيوب";
    secThreeBioDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الأحياء للصف الثالث الثانوي على اليوتيوب";
    secThreeMathDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الرياضيات للصف الثالث الثانوي على اليوتيوب";
    secThreeEnglishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإنجليزية للصف الثالث الثانوي على اليوتيوب";
    secThreeGermanDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الألمانية للصف الثالث الثانوي على اليوتيوب";
    secThreeItalianDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإيطالية للصف الثالث الثانوي على اليوتيوب";
    secThreeSpanishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الاسبانية للصف الثالث الثانوي على اليوتيوب";
    secThreeFrenchDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الفرنسية للصف الثالث الثانوي على اليوتيوب";
    secThreeArabicDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة العربية للصف الثالث الثانوي على اليوتيوب";
    secThreeHistoryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة التاريخ للصف الثالث الثانوي على اليوتيوب";
    secThreeGeoghraphyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجغرافيا للصف الثالث الثانوي على اليوتيوب";
    secThreeGeologyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجيولوجيا للصف الثالث الثانوي على اليوتيوب";
    secThreeCourseDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم بعض كورسات اللغة الإنجليزية لتقوية معظم المهارات";
    secTwoMainTitle.innerHTML = "الدروس الأونلاين | الثاني الثانوي";
    secOneMainTitle.innerHTML = "الدروس الأونلاين | الأول الثانوي";
    secTowPhysics.innerHTML = "الفيزياء";
    secTowChemistry.innerHTML = "الكيمياء";
    secTowBio.innerHTML = "الأحياء";
    secTowMath.innerHTML = "الرياضيات";
    secTowEnglish.innerHTML = "اللغة الإنجليزية";
    secTowGerman.innerHTML = "اللغة الألمانية";
    secTowItalian.innerHTML = "اللغة الإيطالية";
    secTowFrench.innerHTML = "اللغة الفرنسية";
    secTowArabic.innerHTML = "اللغة العربية";
    secTowHistory.innerHTML = "التاريخ";
    secTowGeography.innerHTML = "الجغرافيا";
    secTowCourseDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم بعض كورسات اللغة الإنجليزية لتقوية معظم المهارات";
    secTwoPhysicsDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الفيزياء للصف الثاني الثانوي على اليوتيوب";
    secTowChemistryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الكيمياء للصف الثاني الثانوي على اليوتيوب";
    secTowBioDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الأحياء للصف الثاني الثانوي على اليوتيوب";
    secTowMathDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الرياضيات للصف الثاني الثانوي على اليوتيوب";
    secTowEnglishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإنجليزية للصف الثاني الثانوي على اليوتيوب";
    secTowGermanDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الألمانية للصف الثاني الثانوي على اليوتيوب";
    secTowItalianDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإيطالية للصف الثاني الثانوي على اليوتيوب";
    secTowFrenchDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الفرنسية للصف الثاني الثانوي على اليوتيوب";
    secTowArabicDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة العربية للصف الثاني الثانوي على اليوتيوب";
    secTowHistoryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة التاريخ للصف الثاني الثانوي على اليوتيوب";
    secTowGeographyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجغرافيا للصف الثاني الثانوي على اليوتيوب";
    secOnePhysics.innerHTML = "الفيزياء";
    secOneChemistry.innerHTML = "الكيمياء";
    secOneBio.innerHTML = "الأحياء";
    secOneMath.innerHTML = "الرياضيات";
    secOneEnglish.innerHTML = "اللغة الإنجليزية";
    secOneGerman.innerHTML = "اللغة الألمانية";
    secOneItalian.innerHTML = "اللغة الإيطالية";
    secOneFrench.innerHTML = "اللغة الفرنسية";
    secOneArabic.innerHTML = "اللغة العربية";
    secOneHistory.innerHTML = "التاريخ";
    secOneGeography.innerHTML = "الجغرافيا";
    secOneCourseDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم بعض كورسات اللغة الإنجليزية لتقوية معظم المهارات";
    secOnePhysicsDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الفيزياء للصف الأول الثانوي على اليوتيوب";
    secOneChemistryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الكيمياء للصف الأول الثانوي على اليوتيوب";
    secOneBioDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الأحياء للصف الأول الثانوي على اليوتيوب";
    secOneMathDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الرياضيات للصف الأول الثانوي على اليوتيوب";
    secOneEnglishDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإنجليزية للصف الأول الثانوي على اليوتيوب";
    secOneGermanDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الألمانية للصف الأول الثانوي على اليوتيوب";
    secOneItalianDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الإيطالية للصف الأول الثانوي على اليوتيوب";
    secOneFrenchDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة الفرنسية للصف الأول الثانوي على اليوتيوب";
    secOneArabicDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة اللغة العربية للصف الأول الثانوي على اليوتيوب";
    secOneHistoryDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة التاريخ للصف الأول الثانوي على اليوتيوب";
    secOneGeographyDescription.innerHTML =
      "مجموعة كبيرة من الروابط تضم أفضل معلمين مادة الجغرافيا للصف الأول الثانوي على اليوتيوب";
    contactMainTitle.innerHTML = "تواصل معنا";
    instaTitle.innerHTML = "تواصل معنا على إنستجرام";
    facebookTitle.innerHTML = "تواصل معنا على فيسبوك";
    linkedInTitle.innerHTML = "تواصل معي على لينكد إن";
    youtubeTitle.innerHTML = "قناتي على اليوتيوب";
    emailTitle.innerHTML = "راسلني عبر البريد الإلكتروني";
    suggestTitle.innerHTML = "ويمكنك إقتراح أي إضافة في الموقع عبر هذا الرابط";
    clickBtnOne.innerHTML = "إضغط هنا";
    clickBtnTwo.innerHTML = "إضغط هنا";
    clickBtnThree.innerHTML = "إضغط هنا";
    clickBtnFour.innerHTML = "إضغط هنا";
    clickBtnFive.innerHTML = "إضغط هنا";
    clickBtnSix.innerHTML = "إضغط هنا";
    footerDescription.innerHTML =
      "تم بناء هذه المنصة بعناية وبغرض توفير الوقت على الطلاب في البحث عن أي شيئ يخص الدراسة وتسهيل وسائل الدراسة لهم.";
    copyRights.innerHTML =
      "جميع الحقوق محفوظة لدى © <sub>2023</sub><span>Mohamed Embrator And Rokaya Zaki</span>";
    for (let i = 0; i <= arrows.length; i++) {
      arrows[i].classList.remove("fa-arrow-right");
      arrows[i].classList.add("fa-arrow-left");
      boxReadMore[i].innerHTML = "قراءة المزيد";
    }
  }
}
// End English And Arabic Switch
