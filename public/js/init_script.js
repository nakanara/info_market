/******************************
 * Init Script 
 ******************************/

 var init_style = [
  '/js/lib/bootstrap/css/bootstrap.css',
  '/js/lib/jquery-ui/jquery-ui.css',
  '/js/lib/jquery-ui/jquery-ui.theme.css', 
  '/css/font-awesome/css/font-awesome.css',
  '/css/style.css'
 ];

 var init_script = [
 '/js/jquery-1.11.3.min.js',
 '/js/lib/bootstrap/js/bootstrap.js',
 '/js/lib/jquery-ui/jquery-ui.js',
 '/js/lib/bootstrap/js/bootstrap.js',
 '/js/lib/countUp/countUp.js', // Number Count
 '/js/assets/js/jquery.countTo.js',
 'js/assets/js/wow.min.js'

 ];


for(var i_=0; i_ < init_style.length; i_++) {
  document.write('<link rel="stylesheet" type="text/css" href="'+ init_style[i_] +'">');
}
for(var i_=0; i_ < init_script.length; i_++) {
  document.write('<script type="text/javascript" src="' + init_script[i_] + '"></script>');
}