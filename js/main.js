var api = 'AIzaSyADWq5jhf-y-IUM8c7jZZXpqrHnthg3lac';


function initMap() {
  var latLng = {
    lat: -33.4267374,
    lng: -70.6210752
  };
  var map = new google.maps.Map(document.getElementById('mapa'), {
    'center': latLng,
    'zoom': 15,
    'mapTypeId': 'roadmap'
  });

  var contenido = '<h2>My New Skin</h2>' +
    '<p>Almirante Pastene 244</p>' +
    '<p>A pasos de metro M.Montt</p>'+
    '<p>Visitanos!</p>' 

  var informacion = new google.maps.InfoWindow({
    content:contenido
  });

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'My New Skin'
  });

  marker.addListener('click', function () {
    informacion.open(map, marker);
  });
}


(function () {
  "use strict";
  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function () {

    //Campos Datos Usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    //Campos PAses

    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //botones y divs
    var calcular = document.getElementById('calcular');
    var errordiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    //Extras

    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');

    if (calcular !== null) {
      calcular.addEventListener('click', calcularMontos);



      pase_dia.addEventListener('blur', mostrarDias);
      pase_dosdias.addEventListener('blur', mostrarDias);
      pase_completo.addEventListener('blur', mostrarDias);

      nombre.addEventListener('blur', validarCampos);
      apellido.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarMail);
    }

    function validarCampos() {
      if (this.value == '') {
        errordiv.style.display = 'block';
        errordiv.innerHTML = "este campo es obligatorio";
        this.style.border = '1px solid red';
        errordiv.style.border = '1px solid red';
      }
      else {
        errordiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      }
    }


    function validarMail() {
      if (this.value.indexOf("@") > -1) {
        errordiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';

      } else {

          errordiv.style.display = 'block';
          errordiv.innerHTML = "debe ingresar correo";
          this.style.border = '1px solid red';
          errordiv.style.border = '1px solid red';
        
      }

    }


    function calcularMontos(event) {
      event.preventDefault();

      if (regalo.value == '') {
        alert("Debes elegir un regalo")
        regalo.focus();
      } else {
        var boletosDia =parseInt( pase_dia.value, 10)||0,
          boletos2Dias = parseInt(pase_dosdias.value,10) ||0,
          boletoCompleto = parseInt(pase_completo.value,10)||0,
          cantCamisas = parseInt(camisas.value,10)||0,
          cantEtiquetas = parseInt(etiquetas.value,10)||0;

        var totalPagar = (boletosDia * 30000) + (boletos2Dias * 45000) + (boletoCompleto * 50000)+ ((cantCamisas*5000)*0.93)+(cantEtiquetas*1000);
        console.log(totalPagar);

        var listadoProductos = [];
        if (boletosDia >= 1) {
          listadoProductos.push(boletosDia + 'Pases por día');
        }
        if (boletos2Dias >= 1) {
          listadoProductos.push(boletos2Dias + 'Pases por 2 días');
        }

        if (boletoCompleto >= 1) {
          listadoProductos.push(boletoCompleto + 'Pases Completos');
        }

        if (cantCamisas >= 1) {
          listadoProductos.push(cantCamisas + 'Camisas');
        }

        if (cantEtiquetas >= 1) {
          listadoProductos.push(cantEtiquetas + 'Etiquetas');
        }
        lista_productos.style.display= "block";
       lista_productos.innerHTML='';
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + '<br/>';
        }
        suma.innerHTML = "$" + totalPagar.toFixed(0);
      }

  
    }

    function mostrarDias() {



      var boletosDia = parseInt(pase_dia.value, 10) || 0,
        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
        boletoCompleto = parseInt(pase_completo.value, 10) || 0;

       var diasElegidos = [];
       if (boletosDia > 0) {
         diasElegidos.push('viernes');
       }
       if (boletos2Dias > 0) {
         diasElegidos.push('viernes', 'sabado');
       }
       if (boletoCompleto > 0) {
         diasElegidos.push('viernes', 'sabado', 'domingo');
       }
       for (var i = 0; i < diasElegidos.length; i++) {
         document.getElementById(diasElegidos[i]).style.display='block';
       }
      }

  })//DOM CONTENT LOADED
})();


$(function () {

  //Lettering

  $('.nombre-sitio').lettering();

  //menu fijo

  /*var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > windowHeight) {
      $('.barra').addClass(fixed);
      $('body').css({ 'margin-top': barraAltura + 'px' });
    } else {
      $('.barra').removeClass('fixed');
      

    }
    //console.log(scroll);
  });*/

  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > windowHeight) {
      $('.barra').addClass('fixed');
      $('body').css({ 'margin-top': barraAltura + 'px' });
    } else {
      $('.barra').removeClass('fixed');
      $('body').css({ 'margin-top': '0px' });
    }
  });


  //Menu Responsive

  $('.menu-movil').on('click', function () {
    $('.navegacion-principal').slideToggle();
  });
  //Programa de COnferencia
  $('div.ocultar').hide();
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  
  $('.menu-programa a').on('click', function () {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();

    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    return false;
  });
  //Animaciones para los numeros
  $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
  $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
  $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200);
  $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);


  //cuenta Regresiva
  $('.cuenta-regresiva').countdown('2018/12/10 09:00:00', function (event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));

  });
});


