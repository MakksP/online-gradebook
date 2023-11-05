<?php

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $db_connection = connect_to_database();
    $sql_query = update_grade();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("ssss",  $_POST["grade"], $_POST["description"], $_POST["date"], $_POST["grade_id"]);
        if ($prepared_sql_query->execute()){
            echo "Pomyślnie zmieniono ocenę";
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connection->close();
            http_response_code(400);
        }
    } else{
        echo "Nie udało się przygotować zapytania";
        $db_connection->close();
        http_response_code(400);
    }

    $prepared_sql_query->close();
    $db_connection->close();
}
