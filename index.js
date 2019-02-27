// import choo
var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo()

// import template
var main = require('./templates/main.js')
var horseapi = require('./templates/horseapi.js')

app.use(function (state) {
    // initialize state
    state.horses = [
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
})

// create a route
app.route('/', main);
app.route('/BlockHorses', main)
app.route('/api/horse', main)
app.route('/BlockHorses/api/horse', main)

// start app
app.mount('div')

