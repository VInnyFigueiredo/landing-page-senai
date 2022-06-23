console.log('vaaai')
let header = document.getElementsByClassName('header'); 

 window.addEventListener('scroll', function() {
    window.scrollY > 215 ? 
    header[0].classList.add('fixed') :
    header[0].classList.remove('fixed')
} )

$(document).ready(function () {
    let form = $('form');

    $("form input[type=submit]").bind('click', function(event) {
        event.preventDefault();

        if (validarCampos(form)) {
            submeterFormulario(form);
        }
        
    })
 });

 function validarCampos() {}

 function submeterFormulario() {}