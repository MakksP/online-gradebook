<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('delete_student_from_timetable', "s", "Pomyślnie usunięto ucznia", $_POST["student_email"]);
}
