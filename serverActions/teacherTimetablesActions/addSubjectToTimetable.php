<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('insert_timetable_cell', "ssss", "Pomyślnie dodano przedmiot",
        $_POST["day_of_week"], $_POST["start_time"], $_POST["lesson_plan_id"], $_POST["subject_id"]);
}
