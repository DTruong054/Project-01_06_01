/*
    Project 01_06_01

      Author: Daniel Truong
      Date:   08.16.18

      Filename: script.js

*/

"use strict";
var formValidity = true;

//Function to validate the form
function validateForm (methodCall) {  
    var results = true;
    var form = document.getElementsByTagName("form")
    if (methodCall.preventDefault) {
        methodCall.preventDefault();
    } else {
        methodCall.returnValue = false;
    }
    formValidity = true;

    validateRequired();
}

function validateRequired() {
    var collectInput = document.querySelectorAll("#contactinfo input")
    var errorDiv = document.getElementById("errortext");
    var currentElementCount = collectInput.length;

    try {
        for (var i = 0; i < currentElementCount; i++) {
            if (document.getElementById("addrinput").value === "") {
                
            } else {
                
            }
        }
    } catch (msg) {
        
    }

    alert(collectInput);
}

//An function that would call all the other functions
function createEventListeners() {
     var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false)
    } else {
        form.addEventListener("onsubmit", validateForm)
    }
}

addEventListener("load", createEventListeners);