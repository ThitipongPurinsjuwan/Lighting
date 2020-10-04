<?php

include 'config_db.php';

$message = '';

$connection = new mysqli($host_name, $host_user, $host_password, $database_name);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$json = json_decode(file_get_contents('php://input'), true);

$query = "INSERT INTO light(SerialNumber,Detail,Optical,Color,OpenStatus) values('$json[serialNumber]','$json[detail]',10,'#000000',0)";

$query_result = $connection->query($query);

if ($query_result === true) {
    $message = 'Success!';
} else {
    $message = 'Error! Try Again.';
}

echo json_encode($message);

$connection->close();
