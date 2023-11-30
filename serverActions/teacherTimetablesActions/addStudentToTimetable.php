<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('add_student_to_timetable', "ss", "Pomyślnie dodano studenta", $_POST["timetable_id"], $_POST["student_email"]);
}
