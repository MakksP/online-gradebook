<?php
require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

session_start();
if ($_SERVER["REQUEST_METHOD"] == "GET"){
    select_php_query_core('get_student_data_by_id', "s", false, $_SESSION["userId"]);
}
