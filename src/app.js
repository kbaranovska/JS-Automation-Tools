import * as lodash from 'lodash';
import * as jquery from 'jquery';

const styles = require('../scss/main.scss');

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#output').innerHTML = hello();
},false);


//string should be doublequote
var str = 'test';

//missed semicolon
goodBye()

var counter = 1;

function hello(){
    //empty block statement
    if (counter === 2){
    }

    console.log("Hello");
    return "Hello";
}

function goodBye(){
console.log("Hello");
}
