<?php
session_start();

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('add_favourite_element', "ss", "Pomyślnie dodano element do ulubionych",
        $_POST['elementName'], $_SESSION['userId']);
}