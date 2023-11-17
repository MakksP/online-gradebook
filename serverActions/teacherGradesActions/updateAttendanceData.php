<?php

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';
require '../dbSchematicFunctions.php';


if ($_SERVER["REQUEST_METHOD"] == "POST"){
    insert_php_query_core('update_attendance', "sss", "Pomyślnie zmieniono obecność", $_POST["date"], $_POST["wasPresent"], $_POST["attendanceId"]);
}
