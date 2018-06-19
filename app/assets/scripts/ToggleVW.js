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

about.addEventListener ('click', function() {

  if (aboutSection.classList.contains('.hidden')) {
      aboutSection.classList.remove('.hidden');
    } else {
        console.log('alala');
    }

  if (sectionContAbout.classList.contains('.hidden')) {
      sectionContAbout.classList.remove('.hidden');
    } else {
        console.log('lololo');
  }

  if (homeSection.classList.contains('.hidden')) {
      console.log('home contains hidden')
    } else {
        homeSection.classList.add('.hidden');
    }

    if (sectionContHome.classList.contains('.hidden')) {
        console.log('home contains hidden')
      } else {
          sectionContHome.classList.add('.hidden');
      }


  });

home.addEventListener ('click', function() {

    if (homeSection.classList.contains('hidden')) {
      homeSection.classList.remove('hidden');
      aboutSection.classList.add('hidden');
      sectionContAbout.classList.add('hidden');
      sectionContHome.classList.remove('hidden');
    } else {
        console.log('alala');
    }
  });
