let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
menuBtn.onclick = () =>{
menuBtn.classList.toggle('fa-times');
navbar.classList.toggle('active');
}
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,            // 👈 helps natural swiping feel
  simulateTouch: true,            // 👈 enables swiping with mouse (not just touch)
  slidesPerView: 1,               // 👈 set a default view (adjusted by breakpoints below)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,            // 👈 helps natural swiping feel
  simulateTouch: true,            // 👈 enables swiping with mouse (not just touch)
  slidesPerView: 1,               // 👈 set a default view (adjusted by breakpoints below)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,            // 👈 helps natural swiping feel
  simulateTouch: true,            // 👈 enables swiping with mouse (not just touch)
  slidesPerView: 1,               // 👈 set a default view (adjusted by breakpoints below)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
let isLogin = false; // Start in SignUp mode

const loginModal = document.getElementById("loginModal");
const fullnameInput = document.getElementById("fullnameInput");
const googleBtnText = document.getElementById("googleText");
const submitBtn = document.getElementById("submitBtn");
const togglePrompt = document.getElementById("togglePrompt");
const toggleLink = document.getElementById("toggleLink");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Update modal fields and texts
function updateFormMode() {
  if (isLogin) {
    fullnameInput.style.display = "none";
    submitBtn.textContent = "Login";
    googleBtnText.textContent = "Sign In With Google";
    togglePrompt.textContent = "Don't have an account?";
    toggleLink.textContent = "Sign Up";
  } else {
    fullnameInput.style.display = "block";
    submitBtn.textContent = "Sign Up";
    googleBtnText.textContent = "Sign Up With Google";
    togglePrompt.textContent = "Have an account?";
    toggleLink.textContent = "Login";
  }
}

// Open modal in SignUp mode
openModalBtn.addEventListener("click", () => {
  isLogin = false;
  updateFormMode();
  loginModal.style.display = "block";
});

// Toggle between Login and Sign Up inside modal
toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  updateFormMode();
});

// Close modal
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Optional: Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});
 
