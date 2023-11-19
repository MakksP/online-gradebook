<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    select_php_query_core('get_subject_name_by_id', "s", false, $_GET["subjectId"]);
}
