 <?php

$response = "";

 $files = array();
 $dir = opendir('../img/entorno/640x480');
 while(false != ($file = readdir($dir))) {
         if(($file != ".") and ($file != "..")) {
                 $files[] = $file;
         }   
 }
 
 natsort($files);
 

 foreach($files as $file) {
    $response .= '<div><a data-fancybox="entorno" href="assets/img/entorno/1366x1025/'.$file.'"><img src="assets/img/entorno/640x480/'.$file.'"></a></div>';
 }

 echo $response;

 ?>