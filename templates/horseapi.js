// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (horse, number) {

  var horseName = 'Horse'

  if (typeof horse.unicorn !== 'undefined' && typeof horse.wings !== 'undefined') {
    horseName = 'Winged Unicorn'
  }
  else if (typeof horse.wings !== 'undefined') {
    horseName = 'Pegasus'
  } 
  else if (typeof horse.wings !== 'undefined') {
    horseName = 'Unicorn'
  } 

    return html `
    {
        "attributes": [
          {
            "trait_type": "color", 
            "value": "${horse.color}"
          }, 
          {
            "trait_type": "eyes", 
            "value": "${horse.eye}"
          },
          {
            "trait_type": "mane", 
            "value": "${horse.mane}"
          },
          {
            "trait_type": "tail", 
            "value": "${horse.tail}"
          },
          {
            "trait_type": "shoes", 
            "value": "${horse.shoes}"
          }
        ], 
        "description": "Block Horse", 
        "external_url": "https://blockhorses.github.io/BlockHorses", 
        "image": "https://blockhorses.github.io/BlockHorses/api/horse/${number}.svg", 
        "name": "${horse.color} ${horseName}"
      }`
}