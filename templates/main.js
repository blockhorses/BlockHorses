// import choo's template helper
var html = require('choo/html')

// import template
var horse = require('./horse.js')

// export module
module.exports = function (state, emit) {
    return html `
    <div>
        <h1>Block Horses</h1>
        ${state.horses.map(horse)}
    </div>`
}