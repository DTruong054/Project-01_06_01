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
    if (methodCall.preventDefault) {
        methodCall.preventDefault();
    } else {
        methodCall.returnValue = false;
    }
    validateRequired();
}

//Function to validate the input fields
function validateRequired() {
    var collectInput = document.getElementsByTagName("input")
    var errorDiv = document.getElementById("errorText");
    var currentElementCount = collectInput.length;
    var validity = true;
    //todo delete this later
    var currentElement;

    //Looping though the inputs and coloring the blanks the color "Ugly Pink -Mr.buckler". if not blank leave/color white.
    try {
        for (let i = 0; i < currentElementCount; i++) {
            currentElement = collectInput[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                validity = false;
            } else {
                currentElement.style.background = "rgb(255,255,255)";
            }
        }

        //If the user misses a form a message would pop up telling them to do the rest
        if (validity === false) {
            throw "Please enter the rest of the form";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            formValidity = true;
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }

    //If the form has no wrongs, submit the form
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
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