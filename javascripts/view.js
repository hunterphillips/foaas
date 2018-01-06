'use strict'; 
const $ = require('jquery'); 
// const output = $('#fuckingOutput');

module.exports.displayFucks = (threatsArr)=>{
    threatsArr.forEach(threat =>{
        let threatString = `<p>Fuck off, ${threat}.</p>`;
        $('#fuckingOutput').append(threatString);
    });
};