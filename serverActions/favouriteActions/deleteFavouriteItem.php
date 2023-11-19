<?php
session_start();

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('delete_favourite_element', "ss", "Pomyślnie usunięto element z ulubionych",
        $_POST['elementName'], $_SESSION['userId']);
}