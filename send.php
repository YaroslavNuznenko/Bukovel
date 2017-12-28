<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['tour'])&&$_POST['tour']!="")){ 
        $to = 'svitbezmezh@ukr.net'; 
        $subject = 'Заявки в Буковель'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Тур: '.$_POST['tour'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>