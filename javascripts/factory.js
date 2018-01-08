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


module.exports.getFucked = (query) => {
    console.log('msgs otw');
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `http://www.foaas.com${query}`,
            dataType: 'json'
        })
            .done(msg => {
                resolve(msg.message);
                // console.log(msg.message);
            })
            .fail(error => {
                reject(error);
            });
    });
};

