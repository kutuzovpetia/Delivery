<?php

/* https://api.telegram.org/bot1160076743:AAEj2Xcq_kXC9mwePwAI8ZGcZGFgVscGIwY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['surname'];
$email = $_POST['textArea'];
$token = "1160076743:AAEj2Xcq_kXC9mwePwAI8ZGcZGFgVscGIwY";
$chat_id = "-270832773";
$arr = array(
  'Имя: ' => $name,
  'Фамилия: ' => $phone,
  'Сообщение' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>