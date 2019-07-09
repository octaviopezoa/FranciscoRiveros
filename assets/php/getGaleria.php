<?php

$response2 = "";

 $files = array();
 $dir = opendir('../img/galeria/640x480');
 while(false != ($file = readdir($dir))) {
         if(($file != ".") and ($file != "..")) {
                 $files[] = $file;
         }   
 }
 
 natsort($files);
 

 foreach($files as $file) {
    $response2 .= '<div><a data-fancybox="galeria" href="assets/img/galeria/1366x1025/'.$file.'"><img src="assets/img/galeria/640x480/'.$file.'"></a></div>';
 }

 echo $response2;

 ?>