"use strict";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


const glassCounter = document.querySelector('.glass__counter--js');
const navigationAdd = document.querySelector('.navigation__add--js');
const navigationRemove = document.querySelector('.navigation__remove--js');

navigationAdd.addEventListener('click', function(e){
  let counter = parseInt(glassCounter.innerHTML);
  counter += 1;
  glassCounter.innerHTML = counter;
});

navigationRemove.addEventListener('click', function(e){
  let counter = parseInt(glassCounter.innerHTML);
  if(counter > 0)
    counter-=1;
  glassCounter.innerHTML = counter;
});