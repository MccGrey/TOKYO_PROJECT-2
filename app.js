//==========================================RESPONSIVE NAVBAR=====================================================

const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

//=====================================FUNCTION FOR OPEN NAVBAR=================================================
// function to open dropdown
const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

//========================================FUNCTION FOR CLOSE NAVBAR=================================================
//function to close dropdown
const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

//================================FLIP EFFECT FOR  DIRECTOR SECTION========================================
let btns = document.querySelectorAll(".flip");
let btn2 = document.querySelectorAll(".flp");

btns.forEach((item) => {
  item.addEventListener("click", (event) => {
    const cc = event.target.parentElement.parentElement;
    cc.classList.toggle("flipped");
  });
});

btn2.forEach((item) => {
  item.addEventListener("click", (event) => {
    const cc = event.target.parentElement.parentElement;
    cc.classList.toggle("flipped");
  });
});
