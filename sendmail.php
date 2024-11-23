<?php 

if ((isset($_POST)) || (isset($_POST['quote'])))  {

$body_att = 'colspan="2" align="left" style="background-color:#000;color:#E84704;text-align: center;"';
$body_att1 = 'colspan="2" align="left" style="background-color:#57585B;color:#fff;"';

// Get data
$data = (isset($_POST['inquiry'])) ? $_POST['inquiry'] : $_POST;


$data['ip'] = $_SERVER["REMOTE_ADDR"];


// Set template

// Client email
$to = "support@vieforgood.com";
// test email
//$to = "mikejason014@gmail.com";
$subject = (isset($_POST['inquiry'])) ? "Job Application - Form Alert" : "SignIn - Form Alert";


$inputs = '';
foreach ($data as $key => $value) {
	$inputs .= "<tr>
			<td width='14%' align='left'>".$key."</td>
			<td width='14%' align='left'>" . $value . "</td>
		</tr>";
}

$message = "
<html>
<head>
<title>Inquiry - Form</title>
</head>
<body>

<div style='margin-top:-10px'>
		<table width='70%' border='1' cellpadding='6' cellspacing='5' style='font-family:Verdana;font-size:12px; border-collapse:collapse'>
			<tr>
				<td border='0' colspan='2' " . $body_att . ">
				<img src='https://demo-htmllinks.com/vie/v7/images/logo.png' width='190' />
				</td>
			</tr>

		".$inputs."
		</table>
	</div>";

  
	
$message.= "</body></html>";


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: Vie Play for Good <info@vieforgood.com>' . "\r\n";

if(mail($to,$subject,$message,$headers)){
   // echo "1";
	$parm['status'] = 1;
	$parm['data'] = 'Thanks for contacting us! We will be in touch with you shortly.';
   echo json_encode($parm);
}
else{
    $parm['status'] = 0;
    $parm['data'] = 'Some error occured';
    echo json_encode($parm);
    
}
}


?>
