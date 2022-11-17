/////////////// nav bar collapse ////////////////

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
  }
});


////////// copy email on click and alert ////////////

function copy(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = that.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  alert("Email Copied");
}

////////// language selector ////////////

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.lang');
const subtitleEl = document.querySelector('.subtitle');
const galleryEl = document.querySelector('.galleryTitle');
const aboutEl = document.querySelector('.aboutTitle');
const aboutDescEl = document.querySelector('.aboutDesc');
const contactEl = document.querySelector('.contactTitle');
const clickEl = document.querySelector('.clickToCopy');

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    subtitleEl.textContent = data[attr].subtitle;
    galleryEl.textContent = data[attr].galleryTitle;
    aboutEl.textContent = data[attr].aboutTitle;
    aboutDescEl.textContent = data[attr].aboutDesc;
    contactEl.textContent = data[attr].contactTitle;
    clickEl.textContent = data[attr].clickToCopy;

  });
});

var data = {
  "english": {
    "subtitle": "Illustrator",
    "galleryTitle": "Gallery",
    "aboutTitle": "About",
    "aboutDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "contactTitle": "Contact",
    "clickToCopy": "Click to copy"
  },
  "portuguese": {
    "subtitle": "Ilustrador",
    "galleryTitle": "Galeria",
    "aboutTitle": "Sobre Mim",
    "aboutDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "contactTitle": "Contato",
    "clickToCopy": "Clique para copiar"
  },
  "german": {
    "subtitle": "Illustrator",
    "galleryTitle": "Galerie",
    "aboutTitle": "Über mich",
    "aboutDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "contactTitle": "Kontakt",
    "clickToCopy": "Zum Kopieren klicken"
  }
};

// ***************** Gallery related **************** //

// const zoomBtn = document.querySelectorAll('.gallery-img img');
const allImages = document.querySelectorAll('.gallery-img');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})


allImages.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imageBox.style.background = `url(css/img${currentImageIdx}.png) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === 16){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
})