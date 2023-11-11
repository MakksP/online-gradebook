<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('update_timetable_cell', "ssss", "Pomyślnie zaktualizowano przedmiot",
        $_POST["subject_id"], $_POST["start_time"], $_POST["day_of_week"], $_POST["lesson_plan_id"]);
}
