<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('delete_all_grades_from_subject', "s", "Pomyślnie usunięto oceny z przedmiotu",
        $_POST["subject_name"]);
    insert_php_query_core('delete_all_teachers_subjects', "s",
        "Pomyślnie usunięto prawo do nauczania wszystkim nauczycielom", $_POST["subject_name"]);
    insert_php_query_core('delete_subject_from_all_timetables', "s",
        "Pomyślnie usunięto przedmiot ze wszystkich planów", $_POST["subject_name"]);
    insert_php_query_core('delete_subject_from_database', "s", "Pomyślnie usunięto przedmiot",
        $_POST["subject_name"]);
}
