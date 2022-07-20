const btn = document.querySelector(".btns");
const btns = document.querySelectorAll(".btn-g2");
const img_ele = document.querySelectorAll(".project-1");
const btnHire = document.querySelector(".btn-hire-1");
const btnHire2 = document.querySelector(".btn-hire-2");
const cover = document.querySelector(".project-1-cover");

// NAvebar//

const navbar_list = document.querySelectorAll(".nav-bar-list-item");
const navbar_ul = document.querySelector(".nav-bar-list");
navbar_ul.addEventListener("click", (e) => {
  let bb = e.target.dataset.btnNav;
  if (bb == 2) {
    window.scroll({
      top: 590,
      left: 0,
      behavior: "smooth",
    });
  } else if (bb == 3) {
    window.scroll({
      top: 1360,
      left: 0,
      behavior: "smooth",
    });
  } else if (bb == 4) {
    window.scroll({
      top: 3390,
      left: 0,
      behavior: "smooth",
    });
  }
});

// Projects

btn.addEventListener("click", ftn);
function ftn(e) {
  btns.forEach((element) => {
    element.classList.remove("btn-active");
  });
  e.target.classList.add("btn-active");
  const num = e.target.dataset.btnNum;
  const all_img = document.querySelectorAll(`.pbtn${num}`);
  console.log(img_ele);
  img_ele.forEach((element) => {
    element.classList.add("img-not-active");
  });

  all_img.forEach((element) => {
    element.classList.remove("img-not-active");
  });
}

// Slider
let width = window.innerWidth;
if (width > 770) {
  spv = 3;
  sb = 30;
} else {
  spv = 2;
  sb = 3;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: spv,
  spaceBetween: sb,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll property

const scrollElement = document.createElement("button");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="icon-scroll"></ion-icon>`;
scrollElement.classList.add("scroll-element");
document.querySelector("footer").after(scrollElement);

scrollElement.addEventListener("click", moveTop);
function moveTop() {
  document.body.scrollTop = 0; // For Safari
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
window.onscroll = function () {
  if (document.documentElement.scrollTop < 600) {
    scrollElement.style.display = "none";
  } else {
    scrollElement.style.display = "inline-block`";
  }
};

// Number Change

const number = document.querySelectorAll(".num");
number.forEach((ele) => {
  // console.log("djk");
  function updateNum() {
    let insideEle = parseInt(ele.innerHTML);
    const finalValue = parseInt(ele.dataset.num);

    insideEle = parseInt(ele.innerHTML);

    if (insideEle < finalValue) {
      ele.innerHTML = insideEle + 500;
      setTimeout(updateNum(ele), 5000);
    }
  }
  updateNum();
});

// NavBar responsive

nav = false;
handleActive = () => {
  console.log("hello");
  if (nav == false) {
    const navbar = document.querySelector(".nav-bar-list");
    const bar = document.querySelector(".bar-res");
    const cross = document.querySelector(".close-res");

    cross.classList.remove("not-active-icon");
    bar.classList.add("not-active-icon");

    navbar.classList.remove("navbar-left");
    navbar.classList.add("navbar-right");

    nav = true;
  } else {
    const navbar = document.querySelector(".nav-bar-list");
    const bar = document.querySelector(".bar-res");
    const cross = document.querySelector(".close-res");

    bar.classList.remove("not-active-icon");
    cross.classList.add("not-active-icon");

    navbar.classList.remove("navbar-right");
    navbar.classList.add("navbar-left");
    console.log("ja");
    nav = false;
  }
};
btnHire.addEventListener("click", () => {
  window.scroll({
    top: 2500,
    left: 0,
    behavior: "smooth",
  });
});
btnHire2.addEventListener("click", () => {
  window.scroll({
    top: 2500,
    left: 0,
    behavior: "smooth",
  });
});
