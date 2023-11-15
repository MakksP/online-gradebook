<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('delete_timetable_from_database', "s", "Pomyślnie usunięto plan zajęć", $_POST["timetable_id"]);
}
