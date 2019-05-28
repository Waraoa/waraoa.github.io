
var last = 'login';

function login(ziel) {


   $('#' + last).hide();
   $('#' + ziel).show();
   
   last = ziel;

   imageMapResize();
   

}

function finish1() {

   setTimeout(function(){
      login('endeA1');
   }, 2000);

}



function init() {
   imageMapResize();

   $('#start').hide();
   $('#harzt').hide();
   $('#tharzt').hide();
   $('#atharzt').hide();
   $('#endeA1').hide();

   imageMapResize();
}
