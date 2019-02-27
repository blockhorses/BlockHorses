var horse = require('../../templates/horse.js')
var horseJSON = require('../../templates/horseapi.js')

var fs = require('fs');

var horses = [
    {color: 'Red', mane: 'Black', tail: 'Violet', shoes: 'Blue', eye: 'Yellow'},
    {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red'},
    {color: 'SlateGrey', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red'},
    {color: 'Purple', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red'},
    {color: 'Fuchsia', mane: 'Black', tail: 'Black', shoes: 'Blue', eye: 'Purple'},
    {color: 'Red', mane: 'Black', tail: 'Black', shoes: 'Blue', eye: 'Purple'},
    {color: 'GoldenRod', mane: 'Black', tail: 'Black', shoes: 'Blue', eye: 'Purple'},
    {color: 'HoneyDew', mane: 'Black', tail: 'Black', shoes: 'Blue', eye: 'Purple'},
    {color: 'HotPink', mane: 'Black', tail: 'Black', shoes: 'Blue', eye: 'Purple'},
    {color: 'Indigo', mane: 'Black', tail: 'Black', shoes: 'Blue', eye: 'Purple'},
    {color: 'White', mane: 'White', tail: 'White', shoes: 'White', eye: 'White', unicorn: 'White', wings: 'White'},
    {color: 'Gainsboro', mane: 'SlateGrey', tail: 'SlateGrey', shoes: 'Black', eye: 'Grey'},
    {color: 'Lavender', mane: 'Purple', tail: 'Purple', shoes: 'Indigo', eye: 'Pink', unicorn: 'Gold', wings: 'GoldenRod'},
    {color: 'Green', mane: 'Orange', tail: 'Red', shoes: 'Violet', eye: 'Blue', wings: 'Yellow'}
 
]

horses.forEach(generateSVG)
horses.forEach(generateJSON)


function generateSVG(item, index) {
    var data = horse(item);

    fs.writeFile((index + 1) + '.svg', data, function(err, data){
        if (err) console.log(err);
        console.log("Generated SVG");
    });
}


function generateJSON(item, index) {
    var data = horseJSON(item, index + 1);

    fs.writeFile((index + 1) + "", data, function(err, data){
        if (err) console.log(err);
        console.log("Generated JSON");
    });
}