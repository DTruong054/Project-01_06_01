/*
    Project 01_06_01

      Author: Daniel Truong
      Date:   08.16.18

      Filename: script.js

*/

"use strict";
var formValidity;
var preventDefault;

//Function to validate the form
function validateForm(evt) {
    
    formValidity = true;
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;
}

//An function that would call all the other functions
function createEventListeners() {
    validateForm();
}

window.addEventListener("load", createEventListeners);