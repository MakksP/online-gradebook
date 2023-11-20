<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('delete_grade_from_archive', "s", "Pomyślnie usunięto ocenę z archiwum", $_POST["grade_id"]);
    insert_php_query_core('delete_grade', "s", "Pomyślnie usunięto ocenę", $_POST["grade_id"]);
}