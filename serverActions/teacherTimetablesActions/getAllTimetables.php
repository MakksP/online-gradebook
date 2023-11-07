<?php

require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';
require __DIR__ . '/../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == "GET"){
    select_php_query_core('get_all_timetables_id', null, null);
}


