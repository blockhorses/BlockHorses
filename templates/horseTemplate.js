var html = require('choo/html')

var horseSvg = require('./horse.js')

// export module
module.exports = function (horse, index, horses) {
    return html `
    ${horseSvg(horse)}
    
    `;
}