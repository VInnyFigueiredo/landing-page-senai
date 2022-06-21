console.log('vaaai')
let header = document.getElementsByClassName('header'); 

 window.addEventListener('scroll', function() {
    window.scrollY > 215 ? 
    header[0].classList.add('fixed') :
    header[0].classList.remove('fixed')
} )