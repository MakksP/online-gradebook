<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('add_attendance', "ssss", "Pomyślnie dodano obecność",
        $_POST['date'], $_POST['subjectId'], $_POST['userId'], $_POST['wasPresent']);
}