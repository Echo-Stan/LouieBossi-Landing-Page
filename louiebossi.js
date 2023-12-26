let bocaBtn = document.querySelector(".mobileBocaBtn");
let fortBtn = document.querySelector(".mobileFortBtn");
let bocatime = document.querySelector(".bocatime");
let forttime = document.querySelector(".forttime");
let bocaPhone = document.querySelector(".bocaPhoneNum");
let fortPhone = document.querySelector(".fortPhoneNum");
let locationName = document.querySelectorAll(".locationTitle");
let bocaAddress = document.querySelector(".bocaAddress");
let fortAddress = document.querySelector(".fortAddress");

// --------------------------

function fortActive() {
  forttime.style.display = "";
  fortPhone.style.display = "";
  fortAddress.style.display = "";
}
function fortDeactive() {
  forttime.style.display = "none";
  fortPhone.style.display = "none";
  fortAddress.style.display = "none";
}
function bocaActive() {
  bocatime.style.display = "";
  bocaPhone.style.display = "";
  bocaAddress.style.display = "";
}
function bocaDeactive() {
  bocatime.style.display = "none";
  bocaPhone.style.display = "none";
  bocaAddress.style.display = "none";
}
// --------------------------
function smallestScreen(smaller) {
  if (smaller.matches) {
    locationName[0].style.display = "none";
    locationName[1].style.display = "none";
    bocaBtn.style.display = "";
    fortBtn.style.display = "";
    fortDeactive();
  } else {
    locationName[0].style.display = "";
    locationName[1].style.display = "";
    bocaBtn.style.display = "none";
    fortBtn.style.display = "none";
    fortActive();
    bocaActive();
  }
}

let smaller = window.matchMedia("(max-width: 299px)");
smallestScreen(smaller);

smaller.addEventListener("change", function () {
  smallestScreen(smaller);
});

fortBtn.addEventListener("click", (e) => {
  fortActive();
  //   ------
  bocaDeactive();
});

bocaBtn.addEventListener("click", (e) => {
  fortDeactive();
  //   ------
  bocaActive();
});
