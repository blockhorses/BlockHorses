// import choo
var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo()

// import template
var main = require('./templates/main.js')
var apihorse = require('./templates/main.js')

app.use(function (state) {
    // initialize state
    state.horses = [
        {color: 'Red', mane: 'Black', tail: 'Violet', shoes: 'Blue', eye: 'Yellow', type: 'Normal'},
        {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red', type: 'Normal'},
        {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red', type: 'Unicorn'},
        {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red', type: 'Winged'}
    ]
})

// create a route
app.route('/', main);
app.route('/BlockHorses', main)
app.route('/BlockHorses/test', main)
app.route('/BlockHorses/api/horse/:horse', apihorse)

// start app
app.mount('div')

