let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  //grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
  

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

const nav = document.querySelector('.nav');
const dr = document.querySelector('nav');
nav.addEventListener('click',(event) => {
    nav.classList.toggle('open');
    dr.classList.toggle('active');
    dr.setAttribute("style", "transition: 0.5s");
});


const card = document.getElementById('card');
const coffee = document.getElementById('coffee');
const candy = document.getElementById('candy');
let rotation = 0;

card.addEventListener('click', function() {
  console.log('hi');
    rotation += 180;
    this.querySelector('.flip-card').style.transform = `rotateY(${rotation}deg)`;
    coffee.classList.toggle('hidden');
    candy.classList.toggle('hidden');
    coffee.classList.toggle('animate');
    candy.classList.toggle('animate');
});

images = document.querySelectorAll('.swiper-slide').forEach(image => {
  image.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e);
      let description = e.target.parentElement.querySelectorAll('.description')[0];
      description.classList.toggle('description-visible'); 
      document.querySelectorAll('.swiper-slide .description').forEach(desc => {
        if (description != desc) {
          desc.classList.remove('description-visible');
        }
      });
      console.log(e.target.parentElement.querySelectorAll('.description')[0]);
  });
});
