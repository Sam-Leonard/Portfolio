let home = document.querySelector('#home');
let homeSection = document.querySelector('#home-section');
let about = document.querySelector('#about');
let projects = document.querySelector('#projects');
let resume = document.querySelector('#resume');
let contact = document.querySelector('#contact');

  home.addEventListener('click', function() {
    console.log('clicked');
    homeSection.classList.toggle('home--hidden');
    homeSection.classList.toggle('home');
    about.classList.toggle('about');
    about.style.visibility = 'hidden';
    projects.classList.toggle('projects');
    projects.style.visibility = 'hidden';
    resume.classList.toggle('resume');
    resume.style.visibility = 'hidden';
    contact.classList.toggle('contact');
    contact.style.visibility = 'hidden';
  });

    about.addEventListener('click', function() {
    home.classList.toggle('home');
    home.style.visibility = 'hidden';
    about.classList.toggle('about');
    about.style.visibility = 'visi';
    projects.classList.toggle('projects');
    projects.style.visibility = 'hidden';
    resume.classList.toggle('resume');
    resume.style.visibility = 'hidden';
    contact.classList.toggle('contact');
    contact.style.visibility = 'hidden';
  });










//let home = document.querySelector('#home');

//  home.addEventListener('click', function() {
//    var home = document.getElementById("home");
//    if (home.style.display === "none") {
//      home.style.display = "block";
//    } else {
//      home.style.display = "none";
//      console.log('aaa');
//    }
//  });
