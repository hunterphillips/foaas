'use strict'; 

module.exports.getThreats = (data)=>{
        let currentRock = Object.keys(data);
        let threats = [];
        currentRock.forEach(function (rock) {
            for (let i = 0; i < data[rock].length; i++) {
                if (data[rock][i].is_potentially_hazardous_asteroid === true) {
                    // console.log(data[rock][i]);
                    threats.push(data[rock][i].name);
                }
            }
        });
        return threats;
};