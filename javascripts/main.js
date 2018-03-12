'use strict'; 
const $ = require('jquery'); 
const factory = require('./factory');  
const filter = require('./filter');
const view = require('./view');

const btn = $('#getDataBtn');

btn.click(()=>{
   let date1 = $('#date1').val();
   let date2 = $('#date2').val(); 
   let badGuys;
   
   // let foaas = factory.getFucked('/fyyff/:from')
   factory.getAsteroids(date1, date2)
   .then(myData=>{
      badGuys = filter.getThreats(myData);
   })
   .then(()=>{
      return factory.getFucked('/fyyff/:from');
   })
   .then(mymsg=>{
      view.displayFucks(mymsg, badGuys);
   })
   .catch(err => {
      console.log(`There was a problem: ${err.status} ${err.statusText}`);
  });
}); 


