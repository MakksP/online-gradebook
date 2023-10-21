<?php

$hostname = "localhost";
$username = "root";
$password = "";
$dbName = "online_gradebook_database";
$server_port = "3310";
global $db_connection;
$db_connection = new mysqli($hostname, $username, $password, $dbName, $server_port);

if ($db_connection->connect_error) {
    die("Failed to connect to database: " . $db_connection->connect_error);
}

?>
