// Custom Scripts
// Custom scripts
const showBtn1 = document.querySelector(".show-btn1"),
    showBtn2 = document.querySelector(".show-btn2"),
    showBtn3 = document.querySelector(".show-btn3"),
    txtBox1 = document.querySelector(".mini-box1"),
    txtBox2 = document.querySelector(".mini-box2"),
    txtBox3 = document.querySelector(".mini-box3");


const burgerMenu = document.querySelector(".burger-menu"),
    modal = document.querySelector(".modal");

burgerMenu.addEventListener("click", function(){
    modal.style.display = "flex";

    setTimeout(() => {
        modal.style.transform = "translateX(0)";
    }, 300);

    setTimeout(() => {
        modal.style.opacity = "1";
    }, 40);
});

modal.addEventListener("click", function(){
    modal.style.transform = "translateX(100%)";
});


// Получаем все элементы с классом "container7mini-box"
var container7miniBoxes = document.getElementsByClassName('container7__mini-box');

// Проходим по каждому элементу с классом "container7mini-box" и назначаем обработчик события щелчка
Array.from(container7miniBoxes).forEach(function(box) {
  box.addEventListener('click', function() {
    // Получаем блок с классом "container7lower-mini-box", который находится внутри родительского элемента
    var lowerMiniBox = this.querySelector('.container7__lower-mini-box');

    // Меняем значение свойства "display" на основе текущего состояния
    if (lowerMiniBox.style.display === 'none'){
      lowerMiniBox.style.display = 'block';
    } else {
      lowerMiniBox.style.display = 'none';
    }
  });
});

var contentBlock = document.getElementsByClassName('container12__content-block');

Array.from(contentBlock).forEach(function(box) {
  box.addEventListener('click', function() {
    var container12LowerContent = this.querySelector('.container12__content-lower-block');

    if(container12LowerContent.style.display === 'none'){
      container12LowerContent.style.display = 'block';
    } else {
      container12LowerContent.style.display = 'none';
    }
  });
});

//Search

const search = document.querySelector('.l7'),
      searchContainer = document.querySelector('.search-container'),
      searchContainerBlock = document.querySelector('.search-container__block');

search.addEventListener('click', function(){
  searchContainer.style.display = 'flex';

  setTimeout(() => {
    searchContainerBlock.style.transform = 'scale(1)'
  }, 300);
});

const clos = document.querySelector('.search-container__x');

clos.addEventListener('click', function(){
  searchContainerBlock.style.transform = 'scaleY(0)';

  setTimeout(() => {
    searchContainer.style.display = 'none';
  }, 400);
});

const searchImg = document.querySelector('.search-container__img');

searchImg.addEventListener('click', function(){
  searchContainerBlock.style.transform = 'scaleY(0)';

  setTimeout(() => {
    searchContainer.style.display = 'none';
  }, 400);
});


//Modal Search
const modalSearch = document.querySelector('.modal-search');

modalSearch.addEventListener('click', function(){
  searchContainer.style.display = 'flex';

  setTimeout(() => {
    searchContainerBlock.style.transform = 'scale(1)'
  }, 300);
});

// const vvv = document.querySelector('.container7__upper-mini-box');
// value_ = 0.5

// vvv.onclick = function() {
//   showBtn1.style.transform = 'rotate(' + value_ + 'turn)'
//   value_ = value_ + 0.5
// };
const swiper = new Swiper('.container4__slider', {

  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  speed: 500,
  
  pagination: {
    el: '.container4__swiper-pagination',
    clickable: true,
    },
  
    navigation: {
      nextEl: '.container4__swiper-button-next',
      prevEl: '.container4__swiper-button-prev',
    },

    breakpoints: {

      1199:{
        slidesPerView:3,
        slidesPerGroup: 1,
      },

      991:{
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      767:{
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },

      575:{
        slidesPerView: 1.4,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      320:{
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      }
    },

  });

  const swiper2 = new Swiper('.container6__swiper', {

    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 105,
    initialSlide: 0,
    speed: 600,
    
    pagination: {
      el: '.container6__swiper-pagination',
      clickable: true,
      },
    
      navigation: {
        nextEl: '.container6__swiper-button-next',
        prevEl: '.container6__swiper-button-prev',
      },

      breakpoints: {

        1199: {
          slidesPerView:3,
          slidesPerGroup: 1,
        },
  
        991:{
          slidesPerView: 2.4,
          spaceBetween: 105,
        },

        767:{
          slidesPerView: 2,
        },

        575:{
          slidesPerView: 1.5,
          spaceBetween: 90,
        },

        320:{
          slidesPerView: 1.5,
          spaceBetween: 90,
        },
      },
    });

    const swiper3 = new Swiper('.container9__swiper', {

      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      spaceBetween: 20,

      pagination: {
        el: '.container9__swiper-pagination',
        clickable: true,
        },
      
        navigation: {
          nextEl: '.container9__swiper-button-next',
          prevEl: '.container9__swiper-button-prev',
        },
      });

  const swiper4 = new Swiper('.container10__slider', {

    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 25,
    speed: 2000,

    autoplay:{
      delay: 1500,
      stopOnLastSlide: true,
      disableOnInteraction: true,
    },

    pagination: {
      el: '.container10__swiper-pagination',
      clickable: true,
      },

    navigation: {
      nextEl: '.container10__swiper-button-next',
      prevEl: '.container10__swiper-button-prev',
    },

    breakpoints: {

      1199: {
        slidesPerView:3,
        slidesPerGroup: 1,
      },

      991:{
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      767:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      575:{
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      320:{
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

  });

  const swiper5 = new Swiper('.container11__swiper', {

    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 105,
    initialSlide: 0,
    speed: 600,
    
    pagination: {
      el: '.container11__swiper-pagination',
      clickable: true,
      },
    
      navigation: {
        nextEl: '.container11__swiper-button-next',
        prevEl: '.container11__swiper-button-prev',
      },

      breakpoints: {

        1199: {
          slidesPerView:3,
          slidesPerGroup: 1,
        },
  
        991:{
          slidesPerView: 2.3,
        },

        767:{
          slidesPerView: 1.8,
        },

        575:{
          slidesPerView: 1.5,
          spaceBetween: 95,
        },

        320:{
          slidesPerView: 1.5,
          spaceBetween: 90,
        }
      },
  
    });
ScrollReveal().reveal(".logotype img", {
  duration: 1000,
  scale: 0.5,
  easing: "ease-in-out",
  delay: 600,
});

ScrollReveal().reveal(".l1", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 800,
});

ScrollReveal().reveal(".l2", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 1000,
});

ScrollReveal().reveal(".l3", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 1200,
});

ScrollReveal().reveal(".l4", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 1400,
});

ScrollReveal().reveal(".l5", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 1600,
});

ScrollReveal().reveal(".l6", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 1800,
});

ScrollReveal().reveal(".l7", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 2000,
});

ScrollReveal().reveal(".sc1 img", {
  duration: 1000,
  scale: 0.5,
  easing: "ease-in-out",
  delay: 2200,
});

ScrollReveal().reveal(".sc2 img", {
  duration: 1000,
  scale: 0.5,
  easing: "ease-in-out",
  delay: 2400,
});

ScrollReveal().reveal(".sc3 img", {
  duration: 1000,
  scale: 0.5,
  easing: "ease-in-out",
  delay: 2600,
});

ScrollReveal().reveal(".burger-menu img", {
  duration: 1000,
  scale: 0.5,
  easing: "ease-in-out",
  delay: 3100,
});

ScrollReveal().reveal(".phone-number", {
  duration: 1000,
  distance: "20px",
  origin: "right",
  easing: "ease-in-out",
  delay: 3100,
});

ScrollReveal().reveal(".main-container__descriptions", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 500,
});

ScrollReveal().reveal(".main-container__img", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 500,
  });

  ScrollReveal().reveal(".descriptions__txt-reveal", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 600,
  });

  ScrollReveal().reveal(".descriptions__application-reveal", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 600,
  });

  ScrollReveal().reveal(".content__title", {
    duration: 700,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 100,
  });

  ScrollReveal().reveal(".content__description", {
    duration: 1000,
    distance: "50px",
    origin: "left",
    easing: "ease-in-out",
    delay: 400,
  });

  ScrollReveal().reveal(".content__application", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 400,
  });

  ScrollReveal().reveal(".options__block1", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".options__block2", {
    duration: 700,
    scale: 0.7,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".options__block3", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container3__img", {
    duration: 700,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".about-us__title", {
    duration: 500,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".about-us__description", {
    duration: 500,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 1000,
  });

  const aboutUsBlock = document.querySelectorAll(".block__icon-txt");

  aboutUsBlock.forEach((item, index) => {
    ScrollReveal().reveal(item, {
      duration: 500,
      distance: "30px",
      origin: "bottom",
      easing: "ease-in-out",
      delay: 1300,
    });
  });

  ScrollReveal().reveal(".about-us__deal", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1500,
  });

  ScrollReveal().reveal(".about-us__application", {
    duration: 1000,
    scale: 0.6,
    easing: "ease-in-out",
    delay: 1700,
  });

  ScrollReveal().reveal(".container4__title", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 600,
  });

  ScrollReveal().reveal(".container4__description", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 600,
  });

  ScrollReveal().reveal(".container4__slide1", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });
  
  ScrollReveal().reveal(".container4__slide2", {
    duration: 1000,
    scale: 0.6,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container4__slide3", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container4__swiper-button-prev", {
    duration: 50,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1500,
  });

  ScrollReveal().reveal(".container4__swiper-button-next", {
    duration: 50,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1500,
  });

  ScrollReveal().reveal(".container5__inner-block", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container5__application", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 1300,
  });

  ScrollReveal().reveal(".container5__img", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container6__main-title", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container6__swiper", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container6__bottom-img", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container6__right", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay:800,
  });

  ScrollReveal().reveal(".container6__telegram-btn", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1300,
  });

  ScrollReveal().reveal(".container7__title", {
    duration: 700,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 100,
  });

  ScrollReveal().reveal(".container7__mini-box", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 100,
  });

  ScrollReveal().reveal(".container8__title", {
    duration: 700,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 100,
  });

  const container8UpperBox = document.querySelectorAll(".container8__upper-box");

  container8UpperBox.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        duration: 1200,
        scale: 0.5,
        easing: "ease-in-out",
        delay: 100 * index, // Установка задержки на основе индекса элемента
    });
  });

  ScrollReveal().reveal(".container8__upper-box-container_bottom-txt", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 1100,
  });

  ScrollReveal().reveal(".container8__download-link", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 1100,
  });

  ScrollReveal().reveal(".container8__lower-box1", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container8__lower-box2", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 1600,
  });

  ScrollReveal().reveal(".container8__lower-box3", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container8__lower-box4", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 1600,
  });

  ScrollReveal().reveal(".container9__title", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container9__description", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });
  
  ScrollReveal().reveal(".container9__swiper", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container9__swiper-button-prev", {
    duration: 80,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1400,
  });

  ScrollReveal().reveal(".container9__swiper-button-next", {
    duration: 80,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1400,
  });

  ScrollReveal().reveal(".container9__application", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  const container9Kid = document.querySelectorAll(".container9__bottom-kid-block");

  container9Kid.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        duration: 1200,
        scale: 0.5,
        easing: "ease-in-out",
        delay: 800 * index, // Установка задержки на основе индекса элемента
      });
  });

  ScrollReveal().reveal(".container10__title", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container10__left-description", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 1100,
  });

  ScrollReveal().reveal(".container10__right-description-block", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 1400,
  });

  ScrollReveal().reveal(".container10__application", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1000,
  });

  ScrollReveal().reveal(".container10__slider-box", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1000,
  });

  ScrollReveal().reveal(".container10__swiper-button-prev", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1100,
  });

  ScrollReveal().reveal(".container10__swiper-button-next", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1100,
  });

  ScrollReveal().reveal(".container11__title", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 1100,
  });

  ScrollReveal().reveal(".container11__description", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 1100,
  });

  const container11TeamMember = document.querySelectorAll(".container11__team-member-box");

  container11TeamMember.forEach((item, index) => {
    ScrollReveal().reveal(item, {
      duration: 1000,
      scale: 0.5,
      easing: "ease-in-out",
      delay: 300 * index, // Установка задержки на основе индекса элемента
    });
  });

  ScrollReveal().reveal(".container11__swiper", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container12__title", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 1100,
  });

  const container12ContentBlock = document.querySelectorAll(".container12__content-block");

  container12ContentBlock.forEach((item, index) => {
    ScrollReveal().reveal(item, {
      duration: 1000,
      distance: "20px",
      origin: "bottom",
      easing: "ease-in-out",
      delay: 800,
    });
  });

  ScrollReveal().reveal(".container13__left-box", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".container13__right-box", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".footer__title", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".f1", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".f2", {
    duration: 1000,
    distance: "20px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 100,
  });

  ScrollReveal().reveal(".f3", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".f4", {
    duration: 1000,
    distance: "20px",
    origin: "left",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".f5", {
    duration: 1000,
    distance: "20px",
    origin: "right",
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".footer__map", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 800,
  });

  ScrollReveal().reveal(".footer__link", {
    duration: 1000,
    scale: 0.5,
    easing: "ease-in-out",
    delay: 600,
  });
