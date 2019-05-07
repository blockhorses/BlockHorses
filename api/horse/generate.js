var horse = require('../../templates/horse.js')
var horseJSON = require('../../templates/horseapi.js')
var horsesList = require('../../templates/horses.js')
var horses = horsesList()

var fs = require('fs');

horses.forEach(generateSVG)
horses.forEach(generateJSON)


function generateSVG(item, index) {
    var data = horse(item);

    fs.writeFile('api/horse/' + (index + 1) + '.svg', data, function(err, data){
        if (err) console.log(err);
        console.log("Generated SVG");
    });
}


function generateJSON(item, index) {
    var data = horseJSON(item, index + 1);

    fs.writeFile('api/horse/' + (index + 1) + "", data, function(err, data){
        if (err) console.log(err);
        console.log("Generated JSON");
    });
}