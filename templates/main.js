// import choo's template helper
var html = require('choo/html')

// import template
var horse = require('./horseTemplate.js')

// export module
module.exports = function (state, emit) {
    return html `
    <div>
   
    <!-- Top menu on small screens -->
    <header class="w3-container w3-top w3-white w3-xlarge w3-padding-16">
      <span class="w3-left w3-padding">BLOCK HORSES</span>
    </header>
    
    <!-- !PAGE CONTENT! -->
    <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px">
      
      <!-- Photo grid -->
      <div class="w3-row w3-grayscale-min">
        <div>
        ${state.horses.map(horse)}
        </div>

       
      </div>
    
      
      <!-- Modal for full size images on click-->
      <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
        <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" class="w3-image">
          <p id="caption"></p>
        </div>
      </div>
    
      <!-- About section -->
      <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
        <img src="7.svg" alt="BlockHorse" class="w3-image w3-padding-32" width="150" height="150">
        <div class="w3-content w3-justify" style="max-width:600px">
          <h4>Block Horses</h4>
          <p>A whole field of ponies.
          </p>
          <hr class="w3-opacity">
    
          
        </div>
      </div>
    
   
     
      <div class="w3-black w3-center w3-padding-24">Standing on the shoulders of giants; Thanks Ethereum, OpenZeppelin, Truffle, Infura, MetaMask</div>
    
    <!-- End page content -->
    </div>
   
    
    </div>`
}