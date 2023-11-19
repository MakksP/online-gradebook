<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    select_php_query_core('get_all_students_belonging_to_subject', "s", false, $_GET["subject_name"]);
}
