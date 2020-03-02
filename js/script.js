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


var sublistArhive = document.querySelector('.sublist-arhive');
var arhiveToggle = document.querySelector('.sublist-arhive__toggle');

arhiveToggle.addEventListener('click', function() {
  if (sublistArhive.classList.contains('sublist-arhive--closed')) {
    sublistArhive.classList.remove('sublist-arhive--closed');
    sublistArhive.classList.add('sublist-arhive--opened');
  } else {
    sublistArhive.classList.add('sublist-arhive--closed');
    sublistArhive.classList.remove('sublist-arhive--opened');
  }
});


var sublistForauthors = document.querySelector('.sublist-forauthors');
var forauthorsToggle = document.querySelector('.sublist-forauthors__toggle');

forauthorsToggle.addEventListener('click', function() {
  if (sublistForauthors.classList.contains('sublist-forauthors--closed')) {
    sublistForauthors.classList.remove('sublist-forauthors--closed');
    sublistForauthors.classList.add('sublist-forauthors--opened');
  } else {
    sublistForauthors.classList.add('sublist-forauthors--closed');
    sublistForauthors.classList.remove('sublist-forauthors--opened');
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
