<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'GET'){
    select_php_query_core('get_timetable_details', "s", $_GET["planId"]);
}
