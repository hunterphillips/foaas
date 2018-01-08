'use strict'; 
const $ = require('jquery'); 
// const output = $('#fuckingOutput');

module.exports.displayFucks = (msg, threatsArr)=>{
    threatsArr.forEach(threat =>{
        let threatString = `<p>${msg.replace('.','')}, ${threat}.</p>`;
        $('#fuckingOutput').append(threatString);
    });
};