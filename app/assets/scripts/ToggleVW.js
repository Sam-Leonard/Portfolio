let sectionContHome = document.querySelector('#section-container-home');
let sectionContAbout = document.querySelector('#section-container-about');
let sectionContProjects = document.querySelector('#section-container-projects');
let sectionContContact = document.querySelector('#section-container-contact');
let home = document.querySelector('#home');
let about = document.querySelector('#about');
let projects = document.querySelector('#projects');
let contact = document.querySelector('#contact');


window.onload = function() {
  if (window.innerWidth >= 1200) {
    sectionContHome.classList.remove('hidden');
    sectionContAbout.classList.add('hidden');
    sectionContProjects.classList.add('hidden');
    sectionContContact.classList.add('hidden');
  } else if (window.innerWidth < 1200) {
    sectionContHome.classList.remove('hidden');
    sectionContAbout.classList.remove('hidden');
    sectionContProjects.classList.remove('hidden');
    sectionContContact.classList.remove('hidden');
  }
};

home.addEventListener ('click', function() {
  if (window.innerWidth >= 1200) {
  sectionContHome.classList.remove('hidden');
  sectionContAbout.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

about.addEventListener ('click', function() {
  if (window.innerWidth >= 1200) {
  sectionContAbout.classList.remove('hidden');
  sectionContHome.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

projects.addEventListener ('click', function() {
  if (window.innerWidth >= 1200) {
  sectionContProjects.classList.remove('hidden');
  sectionContHome.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});


contact.addEventListener ('click', function() {
  if (window.innerWidth >= 1200) {
  sectionContContact.classList.remove('hidden');
  sectionContHome.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  }
});
