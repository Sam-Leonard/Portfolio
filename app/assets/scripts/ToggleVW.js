let sectionContHome = document.querySelector('#section-container-home');
let sectionContAbout = document.querySelector('#section-container-about');
let sectionContProjects = document.querySelector('#section-container-projects');
let sectionContContact = document.querySelector('#section-container-contact');
let home = document.querySelector('#home');
let about = document.querySelector('#about');
let projects = document.querySelector('#projects');
let contact = document.querySelector('#contact');


home.addEventListener ('click', function() {
  if (sectionContHome.classList.contains('hidden')) {
  sectionContHome.classList.remove('hidden');
  sectionContAbout.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

about.addEventListener ('click', function() {
  if (sectionContAbout.classList.contains('hidden')) {
  sectionContAbout.classList.remove('hidden');
  sectionContHome.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

projects.addEventListener ('click', function() {
  if (sectionContProjects.classList.contains('hidden')) {
  sectionContProjects.classList.remove('hidden');
  sectionContHome.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});


contact.addEventListener ('click', function() {
  if (sectionContContact.classList.contains('hidden')) {
  sectionContContact.classList.remove('hidden');
  sectionContHome.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  }
});
