//navbar animation
$(window).scroll(function(){
  if($(document).scrollTop() > 600){
    $('nav').addClass('shrink');
  }
  else{
    $('nav').removeClass('shrink');
  }
});

//smooth scroll animation
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    //Scroll and show hash
    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function(){
      window.location.hash = target;
    });
  });
});


//MODALS
//pokemonmodal
// get modal element
var pokemonmodal = document.getElementById('pokemonModal');
// get modal button
var pokemon = document.getElementById('pokemon');
//get close button
var pokeCloseBtn = document.getElementsByClassName('closeBtn')[0];

//listen for a click
pokemon.addEventListener('click', pokeOpenModal);
//Listen for close click
pokeCloseBtn.addEventListener('click', pokeCloseModal);
//Listen for outside click
window.addEventListener('click', pokeClickOutside);

//Function to open open modal
function pokeOpenModal(){
  pokemonmodal.style.display = 'block';
}

function pokeCloseModal(){
  pokemonModal.style.display = 'none'
}

function pokeClickOutside(e){
  if(e.target == pokemonmodal){
    pokemonModal.style.display = 'none'
  }

}


//lolmodal
// get modal element
var lolmodal = document.getElementById('lolModal');
// get modal button
var lol = document.getElementById('lol');
//get close button
var lolCloseBtn = document.getElementsByClassName('closeBtn')[1];

//listen for a click
lol.addEventListener('click', lolOpenModal);
//Listen for close click
lolCloseBtn.addEventListener('click', lolCloseModal);
//Listen for outside click
window.addEventListener('click', lolClickOutside);

//Function to open open modal
function lolOpenModal(){
  lolmodal.style.display = 'block';
}

function lolCloseModal(){
  lolModal.style.display = 'none'
}

function lolClickOutside(e){
  if(e.target == lolmodal){
    lolModal.style.display = 'none'
  }

}

//sdmodal
// get modal element
var sdmodal = document.getElementById('sdModal');
// get modal button
var sd = document.getElementById('sd');
//get close button
var sdCloseBtn = document.getElementsByClassName('closeBtn')[2];

//listen for a click
sd.addEventListener('click', sdOpenModal);
//Listen for close click
sdCloseBtn.addEventListener('click', sdCloseModal);
//Listen for outside click
window.addEventListener('click', sdClickOutside);

//Function to open open modal
function sdOpenModal(){
  sdmodal.style.display = 'block';
}

function sdCloseModal(){
  sdModal.style.display = 'none'
}

function sdClickOutside(e){
  if(e.target == sdmodal){
    sdModal.style.display = 'none'
  }

}


//stockmodal
// get modal element
var stockmodal = document.getElementById('stockModal');
// get modal button
var stock = document.getElementById('stock');
//get close button
var stockCloseBtn = document.getElementsByClassName('closeBtn')[3];

//listen for a click
stock.addEventListener('click', stockOpenModal);
//Listen for close click
stockCloseBtn.addEventListener('click', stockCloseModal);
//Listen for outside click
window.addEventListener('click', stockClickOutside);

//Function to open open modal
function stockOpenModal(){
  stockmodal.style.display = 'block';
}

function stockCloseModal(){
  stockModal.style.display = 'none'
}

function stockClickOutside(e){
  if(e.target == stockmodal){
    stockModal.style.display = 'none'
  }

}

//dialysismodal
// get modal element
var dialysismodal = document.getElementById('dialysisModal');
// get modal button
var dialysis = document.getElementById('dialysis');
//get close button
var dialysisCloseBtn = document.getElementsByClassName('closeBtn')[4];

//listen for a click
dialysis.addEventListener('click', dialysisOpenModal);
//Listen for close click
dialysisCloseBtn.addEventListener('click', dialysisCloseModal);
//Listen for outside click
window.addEventListener('click', dialysisClickOutside);

//Function to open open modal
function dialysisOpenModal(){
  dialysismodal.style.display = 'block';
}

function dialysisCloseModal(){
  dialysisModal.style.display = 'none'
}

function dialysisClickOutside(e){
  if(e.target == dialysismodal){
    dialysisModal.style.display = 'none'
  }

}

//cpumodal
// get modal element
var cpumodal = document.getElementById('cpuModal');
// get modal button
var cpu = document.getElementById('cpu');
//get close button
var cpuCloseBtn = document.getElementsByClassName('closeBtn')[5];

//listen for a click
cpu.addEventListener('click', cpuOpenModal);
//Listen for close click
cpuCloseBtn.addEventListener('click', cpuCloseModal);
//Listen for outside click
window.addEventListener('click', cpuClickOutside);

//Function to open open modal
function cpuOpenModal(){
  cpumodal.style.display = 'block';
}

function cpuCloseModal(){
  cpuModal.style.display = 'none'
}

function cpuClickOutside(e){
  if(e.target == cpumodal){
    cpuModal.style.display = 'none'
  }

}

//dbmodal
// get modal element
var dbmodal = document.getElementById('dbModal');
// get modal button
var db = document.getElementById('db');
//get close button
var dbCloseBtn = document.getElementsByClassName('closeBtn')[6];

//listen for a click
db.addEventListener('click', dbOpenModal);
//Listen for close click
dbCloseBtn.addEventListener('click', dbCloseModal);
//Listen for outside click
window.addEventListener('click', dbClickOutside);

//Function to open open modal
function dbOpenModal(){
  dbmodal.style.display = 'block';
}

function dbCloseModal(){
  dbModal.style.display = 'none'
}

function dbClickOutside(e){
  if(e.target == dbmodal){
    dbModal.style.display = 'none'
  }

}

//dbmodal
// get modal element
var hwcmodal = document.getElementById('hwcModal');
// get modal button
var hwc = document.getElementById('hwc');
//get close button
var hwcCloseBtn = document.getElementsByClassName('closeBtn')[7];

//listen for a click
hwc.addEventListener('click', hwcOpenModal);
//Listen for close click
hwcCloseBtn.addEventListener('click', hwcCloseModal);
//Listen for outside click
window.addEventListener('click', hwcClickOutside);

//Function to open open modal
function hwcOpenModal(){
  hwcmodal.style.display = 'block';
}

function hwcCloseModal(){
  hwcModal.style.display = 'none'
}

function hwcClickOutside(e){
  if(e.target == hwcmodal){
    hwcModal.style.display = 'none'
  }

}



