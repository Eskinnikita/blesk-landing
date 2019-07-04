<?php
$to_mail = '751324@mail.ru';

$result['success'];
if (isset($_POST['type'])) {
    $type = $_POST['type'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    if ($type == 'request') {
        mail($to_mail, "Пользователь отправил запрос", "Имя: $name \r\nТелефон: $phone");
        $result['success'] = '1';
    }
} else {
    $result['error'] = 'type_error';
}

echo (json_encode($result));
