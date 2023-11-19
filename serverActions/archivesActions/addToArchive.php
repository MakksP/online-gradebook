<?php
session_start();

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('add_element_to_archive', "sssss", "Pomyślnie dodano element do archiwum",
        $_POST['email'], $_POST['grade'], $_POST['name'], $_POST['surname'], $_POST['subjectName']);
}