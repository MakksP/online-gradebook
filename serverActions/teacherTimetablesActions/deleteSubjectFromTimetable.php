<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('delete_subject_from_timetable_cell', "sss", "Pomyślnie usunięto przedmiot", $_POST["timetable_id"], $_POST["day"], $_POST["hour"]);
}
