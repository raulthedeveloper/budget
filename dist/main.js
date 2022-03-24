import { Controller } from './controller.js';
import { View } from './view.js';
// Completely object oriented program. No functions only object methods allowed.
const controller = new Controller();
controller.init();
document.getElementById("description").addEventListener("keyup", function () {
    View.formValidation();
});
document.getElementById("amount").addEventListener("keyup", function () {
    View.formValidation();
});
