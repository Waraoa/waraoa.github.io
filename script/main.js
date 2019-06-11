
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

function init2() {
   imageMapResize();

   $('#login').hide();
   $('#harzt2').hide();
   $('#tharzt').hide();
   $('#endeA2').hide();
   $('#meinTermin').hide();
   $('#meinTerminClick').hide();
   $('#meinTerminAbsagen').hide();
   $('#meinTerminAbgesagt').hide();
   $('#meinTerminWeg').hide();

   last = 'start';

   imageMapResize();
}
