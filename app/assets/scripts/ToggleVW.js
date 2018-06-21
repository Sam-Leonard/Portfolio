let sectionContHome = document.querySelector('#section-container-home');
let sectionContAbout = document.querySelector('#section-container-about');
let sectionContProjects = document.querySelector('#section-container-projects');
let sectionContResume = document.querySelector('#section-container-resume');
let sectionContContact = document.querySelector('#section-container-contact');
let home = document.querySelector('#home');
let homeSection = document.querySelector('#home-section');
let about = document.querySelector('#about');
let aboutSection = document.querySelector('#about-section');
let projects = document.querySelector('#projects');
let projectsSection = document.querySelector('#projects-section');
let resume = document.querySelector('#resume');
let resumeSection = document.querySelector('#resume-section');
let contact = document.querySelector('#contact');
let contactSection = document.querySelector('#contact-section');


home.addEventListener ('click', function() {
  if (homeSection.classList.contains('hidden')) {
  homeSection.classList.remove('hidden');
  sectionContHome.classList.remove('hidden');
  aboutSection.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  projectsSection.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');
  contactSection.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

about.addEventListener ('click', function() {
  if (aboutSection.classList.contains('hidden')) {
  aboutSection.classList.remove('hidden');
  sectionContAbout.classList.remove('hidden');
  homeSection.classList.add('hidden');
  sectionContHome.classList.add('hidden');
  projectsSection.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');
  contactSection.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

projects.addEventListener ('click', function() {
  if (projectsSection.classList.contains('hidden')) {
  projectsSection.classList.remove('hidden');
  sectionContProjects.classList.remove('hidden');
  homeSection.classList.add('hidden');
  sectionContHome.classList.add('hidden');
  aboutSection.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');
  contactSection.classList.add('hidden');
  sectionContContact.classList.add('hidden');
  }
});

resume.addEventListener ('click', function() {
  if (resumeSection.classList.contains('hidden')) {
  resumeSection.classList.remove('hidden');
  sectionContResume.classList.remove('hidden');
  homeSection.classList.add('hidden');
  sectionContHome.classList.add('hidden');
  aboutSection.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  projectsSection.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  contactSection.classList.add('hidden');
  sectionContContact.classList.add('hidden');

  }
});

contact.addEventListener ('click', function() {
  if (contactSection.classList.contains('hidden')) {
  contactSection.classList.remove('hidden');
  sectionContContact.classList.remove('hidden');
  homeSection.classList.add('hidden');
  sectionContHome.classList.add('hidden');
  aboutSection.classList.add('hidden');
  sectionContAbout.classList.add('hidden');
  projectsSection.classList.add('hidden');
  sectionContProjects.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');
  }
});