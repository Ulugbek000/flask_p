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