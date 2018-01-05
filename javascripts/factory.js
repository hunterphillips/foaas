'use strict'; 
//xhr request(s) module 
const $ = require('jquery'); 

module.exports.getAsteroids = (date1, date2) => {
    console.log('androids otw');
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date1}&end_date=${date2}&api_key=p5tnB8mHoBpjPYjFmVIsIQDyuP1bGH2UkMY8ogUn`
        })
            .done(data => {
                resolve(data.near_earth_objects);
                // console.log('data', data.near_earth_objects);
            })
            .fail(error => {
                reject(error);
            });
    });
};

