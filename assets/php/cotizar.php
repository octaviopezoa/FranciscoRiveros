<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
?>

<?php

// session_start();

include_once('../bd/bd.inc.php');
include ('classes/phpmailer/PHPMailerAutoload.php');


$proyecto = mysqli_real_escape_string($con,$_POST['proyecto']);

$nombre = mysqli_real_escape_string($con,$_POST['nombre']);
$rut = mysqli_real_escape_string($con,$_POST['rut']);
$telefono = mysqli_real_escape_string($con,$_POST['telefono']);
$email = mysqli_real_escape_string($con,$_POST['email']);
// $planta = mysqli_real_escape_string($con,$_POST['planta']);
$planta = mysqli_real_escape_string($con,'-');
$plazo = mysqli_real_escape_string($con,$_POST['plazo']);
$comentarios = mysqli_real_escape_string($con,$_POST['comentarios']);


$sql = 'INSERT INTO formulario(nombre, rut, telefono, email, planta, plazo, comentarios) VALUES ("'.$nombre.'", "'.$rut.'", '.$telefono.', "'.$email.'","'.$planta.'", "'.$plazo.'", "'.$comentarios.'")';
$result = mysqli_query($con,$sql);


if($result) {
    
        //Envío de mail
        // Planta: '.$planta.'<br>

        $cuerpo = 'Nuevo ingreso de cotización:<br><br>
        Proyecto: '.$proyecto.'<br>        
        Plazo: '.$plazo.'<br><br>
        Información de Cliente:<br>
        Nombre: '.$nombre.'<br>
        Rut: '.$rut.'<br>
        Teléfono: '.$telefono.'<br>
        Email: '.$email.'<br><br>
        Comentarios: '.$comentarios.'<br><br><br>
        
        <small>Este mensaje fue enviado automáticamente desde el sitio web de '.$proyecto.'</small>';

        $mail = new PHPMailer;
	
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->Host = 'copahue.vhn.cl';
        $mail->SMTPAuth = true; 
        $mail->Username = 'noreply@franciscoderiveros.cl'; //mail proyecto
        $mail->Password = '[H]_!Q!ajryE';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('noreply@franciscoderiveros.cl', 'Francisco de Riveros' /*proyecto*/ );
        $mail->addAddress('opezoa@grupobyl.cl');
        $mail->addCC('opezoa@grupobyl.cl');
        // $mail->addAddress('ggomez@copahue.cl');
        // $mail->addCC('k.latud@copahue.cl');
        $mail->addReplyTo($email, $nombre);
		
		$mail->isHTML(true);
		
		$mail->Subject = 'Cotización | '.$proyecto.'.';
        $mail->Body    = $cuerpo;
        
        if ($mail->Send()) {
            echo "success";
        } else {
            echo "error con el envío";
        }

} else {
    echo mysqli_error($con);
}