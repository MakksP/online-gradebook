<?php
session_start();

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';
require './dbSchematicFunctions.php';



if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('assign_subject_to_you', "ss", "Pomyślnie przypisano przedmiot", $_POST["subject_tag"], $_SESSION["userId"]);
}