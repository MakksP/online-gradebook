<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    select_php_query_core('get_all_your_grades', "ss", false, $_SESSION["userId"], $_GET["subjectName"]);
}
