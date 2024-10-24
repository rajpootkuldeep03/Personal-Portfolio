// navigation
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// navigation and scroll button 
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// navigation Open side 
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// navigation Close
cancelBtn.onclick = hideNavMenu;

// nevigation close when link click
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


// scripts.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // previous errors clear
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => el.style.display = 'none');

  // get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // validation flag
  let isValid = true;

  // validation name
  if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
  }

  // validation Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
  }

  // validation phone
  const phonePattern = /^[0-9]{10}$/;
  if (phone === '' || !phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent = 'Valid phone number is required';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
  }

  // validation message
  if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
  }

  // for valid form, submit and perform next
  if (isValid) {
      alert('Form submitted successfully!');
  }
});