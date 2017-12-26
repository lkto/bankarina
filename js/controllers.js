angular.module('starter.controllers', [])

.controller('ConfCtrl', function($scope,$http,$location) {

  $scope.cambiar = function (){
    var actual = document.getElementById("clavea").value;
    var nueva = document.getElementById("nuevo").value;
    var confirmar = document.getElementById("confirmar").value;
    //console.log(confirmar);
    var req = {
    method: 'POST',
    url: 'http://appember.sigtics.org/cambiar.php',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'Content-Type': 'application/x-www-form-urlencoded;'
   },
   data: { actual: actual,
    nueva: nueva, 
    confirmar:confirmar }
  }
$http(req).then(function(data){
     if (data.data == 1) {

        alert("Las contraseñas no coinciden");
    }else{
      if(data.data == 2) {
        alert("Contraseña cambiada"); 
      }else{
        alert("Las contraseñas no coinciden");
      }
    }
    //console.log(respuesta);
    document.getElementById("clavea").value = "";
    document.getElementById("nuevo").value = "";
    document.getElementById("confirmar").value = "";
     
});
   
  }

  $scope.salir = function (){

    $location.path( "/login" );
  }

})

.controller('InicioCtrl', function($scope,$http,$rootScope,$location) {

  $http.get('http://appember.sigtics.org/listar.php')
    .then( function(respuesta) {
       
        $scope.personas = respuesta.data;
        //console.log(respuesta.data);
         });


    $scope.ver = function (id){
      //console.log(id);
      $rootScope.id = id;
      $location.path( "tab/ver" );
      //$location.path( "tab/agregar" );
    }

    $scope.agregar = function (){
     
      //$location.path( "tab/agregarP" );
      $location.path( "tab/agregar" );
    }

})

.controller('AgregarCtrl', function($scope,$http,$location) {

  $scope.guardar = function (){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var total = document.getElementById("total").value;
    //console.log(total);

    var req = {
    method: 'POST',
     url: 'http://appember.sigtics.org/guardar.php',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  // 'Content-Type': 'application/x-www-form-urlencoded;'
    },
    data: { nombre: nombre, apellido: apellido, total:total}
    }
    $http(req).then(function(data){
     alert("datos guardados");
    //console.log(data);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("total").value = "";
    $location.path( "tab/inicio" );
     
     
    });
  }

})

.controller('VerCtrl', function($scope,$rootScope,$http,$location) {

  //console.log($rootScope.id);
  var id = $rootScope.id;

  var req = {
 method: 'POST',
 url: 'http://appember.sigtics.org/ver.php',
 headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
  // 'Content-Type': 'application/x-www-form-urlencoded;'
 },
 data: { id: id }
}
$http(req).then(function(data){
      $scope.ver = data.data
     
});

 

    $scope.agregarM = function (){
     console.log($rootScope.id);
    // $rootScope.id = id;
      //$location.path( "tab/agregarP" );
     $location.path( "tab/agregarM" );
    }
})
.controller('AgregarMCtrl', function($scope,$http,$location,$rootScope) {

  $http.get('http://appember.sigtics.org/com_tipo.php')
    .then( function(respuesta) {
       
        $scope.tipo = respuesta.data;
        console.log(respuesta.data);
         });


  $scope.guardarM = function (){
    var tipo = document.getElementById("tipo").value;
    var cantidad = document.getElementById("cantidad").value;
    var id = $rootScope.id;
    
    var req = {
 method: 'POST',
 url: 'http://appember.sigtics.org/guardar-movimientos.php',
 headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
  // 'Content-Type': 'application/x-www-form-urlencoded;'
 },
 data: { tipo: tipo, cantidad: cantidad, id:id}
}
$http(req).then(function(data){
     
      if(data.data == 1){
        alert("El monto del retiro supera la cantidad registrada en el banco");
      }else{
        alert("datos guardados");
      }
    
   // console.log(respuesta);
    $location.path( "tab/ver" );
     
});

  } 

})

.controller('loginCtrl', function($scope,$http,$rootScope,$location) {

  $scope.login = function (){

    var usuario = document.getElementById("user").value;
    var clave = document.getElementById("clave").value;
    
var req = {
 method: 'POST',
 url: 'http://appember.sigtics.org/login.php',
 headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
  // 'Content-Type': 'application/x-www-form-urlencoded;'
 },
 data: { usuario:usuario,
         clave:clave }
}
$http(req).then(function(data){
     console.log(data.data);
     if(data.data == 1){
      
      $location.path( "tab/inicio" );
     }
     else{
         alert("Datos Incorrectos");
     }
     
});
  
  
}


});
