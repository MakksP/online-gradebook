<?php
session_start();

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $db_connect = connect_to_database();
    $sql_query = assign_subject_to_you();
    if ($prepared_sql_query = $db_connect->prepare($sql_query)){
        $prepared_sql_query->bind_param("ss", $_POST["subject_tag"], $_SESSION["userId"]);
        if ($prepared_sql_query->execute()){
            echo "Pomyślnie przypisano przedmiot";
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connect->close();
            http_response_code(400);
        }
    } else {
        echo "Nie udało się przygotować zapytania";
        $db_connect->close();
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connect->close();
}