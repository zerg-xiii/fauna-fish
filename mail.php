<meta http-equiv='refresh' content='6; url=https://zerg-xiii.github.io/zerg-xiii/asd.html'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['sub'])) {$sub = $_POST['sub']; if ($sub == '') {unset($sub);}}
if (isset($_POST['body'])) {$body = $_POST['body']; if ($body == '') {unset($body);}}

if (isset($name) && isset($email) && isset($sub) && isset($body)){

$address = "frenchess1997@gmail.com";
$mes = "Имя: $name \nE-mail: $email \nТема: $sub \nТекст: $body";
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true')
{echo "Сообщение отправлено успешно, через 6 секунд Вы будете направлены на главную страницу блога <a href='https://bloggood.ru/'>BLOGGOOD.RU</a>,где сможете продолжить ваш просмотр";}
else {echo "Ошибка, сообщение не отправлено!";}

}
else
{
echo "Вы заполнили не все поля, вернитесь назад и заполните необходимые поля!";
}
?>
