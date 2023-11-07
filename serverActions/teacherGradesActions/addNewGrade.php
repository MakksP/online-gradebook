<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('insert_new_grade_to_database', "sssss", "Pomyślnie dodano ocenę",
        $_POST['grade'], $_POST['description'], $_POST['date'], $_POST['subjectId'], $_POST['userId']);
}