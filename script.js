/*
    Project 01_06_01

      Author: Daniel Truong
      Date:   08.16.18

      Filename: script.js

*/

"use strict";
var formValidity = true;

//Function to validate the form
function validateForm (evt) {  
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
}



//An function that would call all the other functions
function createEventListeners() {
    // validateForm();
     var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false)
    } else {
        form.addEventListener("onsubmit", validateForm)
    }
}

addEventListener("load", createEventListeners);