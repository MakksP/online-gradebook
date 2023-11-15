<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST'){
    insert_php_query_core('add_new_timetable', null, "Pomyślnie dodano plan lekcji", null);
}
