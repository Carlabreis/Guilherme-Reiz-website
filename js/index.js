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

////////// hamburger menu ////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

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
const galleryNavE1 = document.querySelector('.galleryNav');
const aboutNavE1 = document.querySelector('.aboutNav');
const contactNavE1 = document.querySelector('.contactNav');
const subtitleEl = document.querySelector('.subtitle');
const galleryEl = document.querySelector('.galleryTitle');
const aboutEl = document.querySelector('.aboutTitle');
const aboutDescEl1 = document.querySelector('.aboutDesc1');
const aboutDescEl2 = document.querySelector('.aboutDesc2');
const aboutDescEl3 = document.querySelector('.aboutDesc3');
const aboutDescEl4 = document.querySelector('.aboutDesc4');
const contactEl = document.querySelector('.contactTitle');
const clickEl = document.querySelector('.clickToCopy');

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    galleryNavE1.textContent = data[attr].galleryNav;
    aboutNavE1.textContent = data[attr].aboutNav;
    contactNavE1.textContent = data[attr].contactNav;
    subtitleEl.textContent = data[attr].subtitle;
    galleryEl.textContent = data[attr].galleryTitle;
    aboutEl.textContent = data[attr].aboutTitle;
    aboutDescEl1.textContent = data[attr].aboutDesc1;
    aboutDescEl2.textContent = data[attr].aboutDesc2;
    aboutDescEl3.textContent = data[attr].aboutDesc3;
    aboutDescEl4.textContent = data[attr].aboutDesc4;
    contactEl.textContent = data[attr].contactTitle;
    clickEl.textContent = data[attr].clickToCopy;

  });
});

var data = {
  "english": {
    "galleryNav": "Gallery",
    "aboutNav": "About",
    "contactNav": "Contact",
    "subtitle": "Illustrator",
    "galleryTitle": "Gallery",
    "aboutTitle": "About",
    "aboutDesc1": "Hello, my name is Guilherme, I'm Brazilian and live in Brazil. Currently, I work with digital illustration for editorial and advertising!",
    "aboutDesc2": "Since I was little, I've been connected to art, I've always loved painting, drawing, music, crafts, etc. I remember in high school, I was not so good with the required subjects, and my notebooks were full of drawings, there were few things written, but lots of drawings.",
    "aboutDesc3": "Nowadays, I usually say that there would be no other job in the world that would make me feel happy if not illustration. I am completely in love with what I do! I am constantly improving my techniques and skills, to deliver the best to my clients and partners.",
    "aboutDesc4": "Hope we can work together soon!",
    "contactTitle": "Contact",
    "clickToCopy": "Click to copy"
  },
  "portuguese": {
    "galleryNav": "Galeria",
    "aboutNav": "Sobre Mim",
    "contactNav": "Contato",
    "subtitle": "Ilustrador",
    "galleryTitle": "Galeria",
    "aboutTitle": "Sobre Mim",
    "aboutDesc1": "Olá, meu nome é Guilherme, sou brasileiro e moro no Brasil. Atualmente trabalho com ilustração digital para editorial e publicidade!",
    "aboutDesc2": "Desde pequeno sempre fui ligado a arte, sempre adorei pintura, desenho, música, artesanato, etc. Lembro que no colégio eu não era tão bom com as matérias exigidas, e meus cadernos eram cheios de desenhos, tinha pouca coisa escrita, mas muitos desenhos.",
    "aboutDesc3": "Hoje em dia, costumo dizer que não haveria outro trabalho no mundo que me fizesse sentir feliz senão a ilustração. Sou completamente apaixonado pelo que faço! Estou sempre aprimorando minhas técnicas e habilidades, para entregar o melhor aos meus clientes e parceiros.",
    "aboutDesc4": "Espero que possamos trabalhar juntos em breve!",
    "contactTitle": "Contato",
    "clickToCopy": "Clique para copiar"
  },
  "german": {
    "galleryNav": "Galerie",
    "aboutNav": "Über mich",
    "contactNav": "Kontakt",
    "subtitle": "Illustrator",
    "galleryTitle": "Galerie",
    "aboutTitle": "Über mich",
    "aboutDesc1": "Hallo, mein Name ist Guilherme, ich bin Brasilianer und lebe in Brasilien. Derzeit arbeite ich mit digitaler Illustration für Redaktion und Werbung!",
    "aboutDesc2": "Seit ich klein bin, bin ich der Kunst verbunden, ich habe schon immer gerne gemalt, gezeichnet, musiziert, gebastelt usw. Ich erinnere mich, dass ich in der High School nicht so gut in den erforderlichen Fächern war und meine Hefte voll waren Zeichnungen, es gab wenig Geschriebenes, aber viele Zeichnungen.",
    "aboutDesc3": "Heutzutage sage ich normalerweise, dass es keinen anderen Job auf der Welt geben würde, der mich glücklich machen würde, wenn nicht der Illustration. Ich bin total verliebt in das, was ich tue! Ich verbessere ständig meine Techniken und Fähigkeiten, um meinen Kunden und Partnern die beste Qualität zu bieten.",
    "aboutDesc4": "Hoffentlich können wir bald zusammenarbeiten!",
    "contactTitle": "Kontakt",
    "clickToCopy": "Zum Kopieren klicken"
  },
  "spanish": {
    "galleryNav": "Galería",
    "aboutNav": "Sobre Mí",
    "contactNav": "Contacto",
    "subtitle": "Ilustrador",
    "galleryTitle": "Galería",
    "aboutTitle": "Sobre Mí",
    "aboutDesc1": "Hola, mi nombre es Guilherme, soy brasileño y vivo en Brasil. Actualmente trabajo con ilustración digital para editorial y publicidad!",
    "aboutDesc2": "Desde pequeño he estado ligado al arte, siempre me ha gustado la pintura, el dibujo, la música, las manualidades, etc. Recuerdo que en la secundaria no se me daban muy bien las materias requeridas y mis cuadernos estaban llenos de dibujos, había pocas cosas escritas, pero muchos dibujos.",
    "aboutDesc3": "Hoy en día suelo decir que no habría otro trabajo en el mundo que me hiciera sentir feliz si no fuera la ilustración. Soy completamente enamorado de lo que hago! Estoy constantemente mejorando mis técnicas y habilidades, para brindar la mejor calidad a mis clientes y socios.",
    "aboutDesc4": "¡Espero que podamos trabajar juntos pronto!",
    "contactTitle": "Contacto",
    "clickToCopy": "Haga clic para copiar"
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
    imageBox.style.background = `url(css/img${currentImageIdx}.png) center/contain no-repeat`;
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