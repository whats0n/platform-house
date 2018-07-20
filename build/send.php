<?php
    /* Email address which will get the message */
    $to = "info@platformhouse.sk";

    /* subject (message theme) */
    $subject = 'Contact Form from platformhouse';

    /* form fields (getting by attr name) */
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $floors = $_POST['floors'];
    $message = $_POST['message'];

    /* message */
    $body = '
        <html>
        <head>
         <title>' . $subject . '</title>
        </head>
        <body>'
           .' <p>Name: ' . $name . '</p>'
           .' <p>Surname: ' . $surname . '</p>'
           .' <p>Email: ' . $email . '</p>'
           .' <p>Phone: ' . $phone . '</p>'
           .' <p>Floors: ' . $floors . '</p>'
           .' <p>Message: <br>' . $message . '</p>'
        .'</body>
        </html>';

    /* For sending HTML email you can set up headers Content-type. */
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    /* additional header */
    $headers .= "From: platformhouse <" . $email . ">\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<b>Message send!</b>";
    } else {
        echo "Send error!";
    }
?>