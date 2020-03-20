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

const key = new Date().toISOString().slice(0, 10);

window.addEventListener('load', function(){
  let counter = 0;
  
  if(localStorage.getItem(key))
    counter = localStorage.getItem(key);
  else 
    localStorage.setItem(key, counter);

  glassCounter.innerHTML = counter;
});

navigationAdd.addEventListener('click', function(e){
  let counter = parseInt(glassCounter.innerHTML);
  counter += 1;
  glassCounter.innerHTML = counter;
  
  localStorage.setItem(key, counter);
});

navigationRemove.addEventListener('click', function(e){
  let counter = parseInt(glassCounter.innerHTML);
  if(counter > 0)
    counter-=1;
  glassCounter.innerHTML = counter;

  if(localStorage.getItem(key))
    localStorage.setItem(key, counter);
});