var smoothScroll = require('smoothscroll');

let homeBtn = document.querySelector('#home');
let aboutBtn = document.querySelector('#about');
let projectsBtn = document.querySelector('#projects');
let contactBtn = document.querySelector('#contact');
let homeDest = document.querySelector('#section-container-home');
let aboutDest = document.querySelector('#section-container-about');
let projectsDest = document.querySelector('#section-container-projects');
let contactDest = document.querySelector('#section-container-contact');

var handleClickHome = function(event) {
  event.preventDefault();

  smoothScroll(homeDest);
};

homeBtn.addEventListener('click', handleClickHome);

var handleClickAbout = function(event) {
  event.preventDefault();

  smoothScroll(aboutDest);
};

aboutBtn.addEventListener('click', handleClickAbout);

var handleClickProjects = function(event) {
  event.preventDefault();

  smoothScroll(projectsDest);
};

projectsBtn.addEventListener('click', handleClickProjects);

var handleClickContact = function(event) {
  event.preventDefault();

  smoothScroll(contactDest);
};

contactBtn.addEventListener('click', handleClickContact);
