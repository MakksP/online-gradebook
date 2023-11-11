<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('insert_new_subject', "sss", "Pomyślnie dodano przedmiot", $_POST["ects_points"], $_POST["semester"], $_POST["subject_name"]);
}
