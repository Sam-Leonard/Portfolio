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
  if (sectionContHome.classList.contains('hidden')) {

  sectionContHome.classList.remove('hidden');

  sectionContAbout.classList.add('hidden');

  sectionContProjects.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');
  
  sectionContContact.classList.add('hidden');
  }
});

about.addEventListener ('click', function() {
  if (sectionContAbout.classList.contains('hidden')) {

  sectionContAbout.classList.remove('hidden');

  sectionContHome.classList.add('hidden');

  sectionContProjects.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');

  sectionContContact.classList.add('hidden');
  }
});

projects.addEventListener ('click', function() {
  if (sectionContProjects.classList.contains('hidden')) {

  sectionContProjects.classList.remove('hidden');

  sectionContHome.classList.add('hidden');

  sectionContAbout.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');

  sectionContContact.classList.add('hidden');
  }
});

resume.addEventListener ('click', function() {
  if (resumeSection.classList.contains('hidden')) {
  resumeSection.classList.remove('hidden');
  sectionContResume.classList.remove('hidden');

  sectionContHome.classList.add('hidden');

  sectionContAbout.classList.add('hidden');

  sectionContProjects.classList.add('hidden');

  sectionContContact.classList.add('hidden');

  }
});

contact.addEventListener ('click', function() {
  if (sectionContContact.classList.contains('hidden')) {

  sectionContContact.classList.remove('hidden');

  sectionContHome.classList.add('hidden');

  sectionContAbout.classList.add('hidden');

  sectionContProjects.classList.add('hidden');
  resumeSection.classList.add('hidden');
  sectionContResume.classList.add('hidden');
  }
});
