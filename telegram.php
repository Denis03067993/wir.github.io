<?php

// ***https://api.telegram.org/bot5875620863:AAH3QwovD0BmpmLmMr_VzKuoGKjC7glqQJw/getUpdates

$name=$_POST['name'];
$phone =$_POST['phone'];

$token='5875620863:AAH3QwovD0BmpmLmMr_VzKuoGKjC7glqQJw';
$chat_id='-882082445';
$arr =array (
'Имя пользователя:' => $name,
'Телефон' => $phone
)

foreach($arr as $key => $value) {
    $txt .='<b>.'$key.'</b>'.$value.'%OA';
};
$sendToTelegram = fopen('https://api.telegram.org/bot{$token}/
sendMessage?chat_id={$chat_id}&parse_mode=html&text={&txt}', 'r');
if($sendToTelegram){
    header('Location: Thanks.html')
} else {
    echo 'Error'
}
?>