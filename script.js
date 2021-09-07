const mobileOpenNav = document.querySelector('#mobile-open-nav');
const hamburger = document.querySelector('#hamburger');
const speakerNamesArray = document.querySelectorAll('.speaker-name');
const speakerJobsArray = document.querySelectorAll('.speaker-job');
const speakerGraduatedArray = document.querySelectorAll('.speaker-graduated');
const closeButton = document.querySelector('#close-button');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileOpenNav.classList.toggle('display-none');
}

const speakersArray = [
  {
    name: 'Adam Abraham',
    job: 'Senior Back End Dev at Facebook',
    graduated: 'Studied IT at the University of California',
  },
  {
    name: 'Megan Alsop',
    job: 'Senior Full Stack Dev at Google',
    graduated: 'Studied IT at the University of Korea.',
  },
  {
    name: 'Bruce B. Austin',
    job: 'Full Stack Dev at Google',
    graduated: 'Studied IT at the University of California',
  },
  {
    name: 'James R. King',
    job: 'Senior Full Stack Dev at Uber',
    graduated: 'Studied IT at the University of California',
  },
];

window.addEventListener('load', () => {
  for (let i = 0; i < speakersArray.length; i += 1) {
    speakerNamesArray[i].textContent = speakersArray[i].name;
    speakerJobsArray[i].textContent = speakersArray[i].job;
    speakerGraduatedArray[i].textContent = speakersArray[i].graduated;
  }
});

closeButton.addEventListener('click', toggleMenu);
