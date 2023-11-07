<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';


if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('update_grade', "ssss", "Pomyślnie zmieniono ocenę", $_POST["grade"], $_POST["description"], $_POST["date"], $_POST["grade_id"]);
}
