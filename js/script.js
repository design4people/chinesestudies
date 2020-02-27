var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


var ItemSublist21 = document.querySelector('.item-sublist21');
var navSublist21Toggle = document.querySelector('.nav-sublist21__toggle');

navSublist21Toggle.addEventListener('click', function() {
  if (ItemSublist21.classList.contains('nav-sublist21--closed')) {
    ItemSublist21.classList.remove('nav-sublist21--closed');
    ItemSublist21.classList.add('nav-sublist21--opened');
  } else {
    ItemSublist21.classList.add('nav-sublist21--closed');
    ItemSublist21.classList.remove('nav-sublist21--opened');
  }
});


var ItemSublist22 = document.querySelector('.item-sublist22');
var navSublist22Toggle = document.querySelector('.nav-sublist22__toggle');

navSublist22Toggle.addEventListener('click', function() {
  if (ItemSublist22.classList.contains('nav-sublist22--closed')) {
    ItemSublist22.classList.remove('nav-sublist22--closed');
    ItemSublist22.classList.add('nav-sublist22--opened');
  } else {
    ItemSublist22.classList.add('nav-sublist22--closed');
    ItemSublist22.classList.remove('nav-sublist22--opened');
  }
});


var pageSidebar  = document.querySelector('.page-sidebar');
var listToggle = document.querySelector('.list__toggle');

pageSidebar.classList.remove('page-sidebar--nojs');

listToggle.addEventListener('click', function() {
  if (pageSidebar.classList.contains('page-sidebar--closed')) {
    pageSidebar.classList.remove('page-sidebar--closed');
    pageSidebar.classList.add('page-sidebar--opened');
  } else {
    pageSidebar.classList.add('page-sidebar--closed');
    pageSidebar.classList.remove('page-sidebar--opened');
  }
});
