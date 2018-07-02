var smoothScroll = require('smoothscroll');

let homeBtn = document.querySelector('#home');
let aboutBtn = document.querySelector('#about');
let projectsBtn = document.querySelector('#projects');
let contactBtn = document.querySelector('#contact');
let homeDest = document.querySelector('#section-container-home');
let aboutDest = document.querySelector('#section-container-about');
let projectsDest = document.querySelector('#section-container-projects');
let contactDest = document.querySelector('#section-container-contact');
let homeBtn2 = document.querySelector('#home2');
let aboutBtn2 = document.querySelector('#about2');
let projectsBtn2 = document.querySelector('#projects2');
let contactBtn2 = document.querySelector('#contact2');

//Main Nav "links"
//Home
var handleClickHome = function(event) {
  event.preventDefault();

  smoothScroll(homeDest);
};

homeBtn.addEventListener('click', handleClickHome);

//About
var handleClickAbout = function(event) {
  event.preventDefault();

  smoothScroll(aboutDest);
};

aboutBtn.addEventListener('click', handleClickAbout);

//Projects
var handleClickProjects = function(event) {
  event.preventDefault();

  smoothScroll(projectsDest);
};

projectsBtn.addEventListener('click', handleClickProjects);

//Contact
var handleClickContact = function(event) {
  event.preventDefault();

  smoothScroll(contactDest);
};

contactBtn.addEventListener('click', handleClickContact);

//Hamburg "links"
//Home
var handleClickHomeAlt = function(event) {
  event.preventDefault();

  smoothScroll(homeDest);
};

homeBtn2.addEventListener('click', handleClickHomeAlt);

//About
var handleClickAboutAlt = function(event) {
  event.preventDefault();

  smoothScroll(aboutDest);
};

aboutBtn2.addEventListener('click', handleClickAboutAlt);

//Projects
var handleClickProjectsAlt = function(event) {
  event.preventDefault();

  smoothScroll(projectsDest);
};

projectsBtn2.addEventListener('click', handleClickProjectsAlt);

//Contact
var handleClickContactAlt = function(event) {
  event.preventDefault();

  smoothScroll(contactDest);
};

contactBtn2.addEventListener('click', handleClickContactAlt);
