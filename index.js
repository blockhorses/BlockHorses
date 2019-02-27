// import choo
var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo()

// import template
var main = require('./templates/main.js')
var horsesList = require('./templates/horses.js')


app.use(function (state) {
    // initialize state
    state.horses = horsesList()
})

// create a route
app.route('/', main);
app.route('/BlockHorses', main)
app.route('/api/horse', main)
app.route('/BlockHorses/api/horse', main)

// start app
app.mount('div')

