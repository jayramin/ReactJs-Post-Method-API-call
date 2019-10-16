<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');


$data = json_decode(file_get_contents('php://input'), true);

// print_r($data);
echo json_encode($data);
?>