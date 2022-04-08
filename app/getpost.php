<?php
require './connexion.php';
header( 'Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');

$getpost = "SELECT * FROM `post`";
$postList = [];

try {
    $query = mysqli_query($db, $getpost);

    while($row = mysqli_fetch_array($query)) {
        $postList[] = $row;
    }

    var_dump($postList);
    echo json_encode($postList);
} catch(\Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}