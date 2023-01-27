//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }    
};

document.addEventListener('click', removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

// The localStorage read-only property of the window interface allows you 
// to access a Storage object for the Document's origin.
// The stored data is saved across browser sessions.

if(currentTheme){
    bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');
    
    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active');
    }else{
        localStorage.removeItem('darkTheme');
    };
};

themeToggleButton.addEventListener('click', toggleTheme);

// !SCROLL REVEAL
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.main-title', {origin: 'top'});
sr.reveal('.scroll-reveal-left', {origin: 'left'});
sr.reveal('.scroll-reveal-right', {origin: 'right'});
sr.reveal('.tech-stack-item', {interval: 250});
sr.reveal(`.section-title, .section-subtitle-container`, {
    origin: 'top',
    interval: 250
});
sr.reveal('.portfolio-card', {interval: 500});
sr.reveal(`.form-container, .footer`, {origin: 'top'});

// !IMAGE-ENLARGE
const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle("bigger");
  });
});

// !CHANGE-SPAN BACKGROUND-IMAGE
var ImagesF = [
  './assets/images/projects/projects-0.png',
  './assets/images/projects/projects-1.png',
  /*'./assets/images/projects/projects-2.png',*/
  './assets/images/projects/projects-3.png',
  './assets/images/projects/projects-4.JPEG',
  './assets/images/projects/projects-5.png',
  /*'./assets/images/projects/projects-6.png',*/
  './assets/images/projects/projects-7.png',
  './assets/images/projects/projects-8.png',
  /*'./assets/images/projects/projects-9.png', */
  './assets/images/projects/projects-10.jpg'
]

var span = document.getElementById('hero');

function autoImgB(arr, i) {
  if (i < arr.length) {
    span.style.backgroundImage = 'url("' + arr[i] + '")';
    setTimeout(autoImgB, 3000, arr, ++i);
  } else if (i === arr.length) {
    i = 0;
    autoImgB(arr, i);
  }
}

autoImgB(ImagesF, 0);

// !OPEN MODAL
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('submit', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    return false;
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

function openModal(){
  const modal = document.querySelector(button.dataset.modalTarget)
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal){
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}