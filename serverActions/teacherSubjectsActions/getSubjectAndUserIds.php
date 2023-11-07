<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "GET"){
    select_php_query_core('get_subject_and_user_ids', "ss", $_GET["email"], $_GET["subject_name"]);
}

