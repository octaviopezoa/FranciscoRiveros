<?php

$response3 = "";
$planta = 0;

 $files = array();
 $dir = opendir('../img/plantas');
 while(false != ($file = readdir($dir))) {
         if(($file != ".") and ($file != "..")) {
                 $files[] = $file;
         }   
 }
 
 natsort($files);
 

 foreach($files as $file) {
    $planta = $planta +1;
    $response3 .= '<div class="columnaPLanta column is-3"><img name="'.$planta.'" src="assets/img/plantas/'.$file.'" class="image planta"></div>';
 }

 echo $response3;

 ?>