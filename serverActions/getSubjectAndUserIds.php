<?php

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';

if ($_SERVER["REQUEST_METHOD"] == "GET"){
    $db_connection = connect_to_database();
    $sql_query = get_subject_and_user_ids();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("ss", $_GET["email"], $_GET["subject_name"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($subjectId, $userId, $name, $surname);
            $prepared_sql_query->fetch();

            $response = ['subjectId' => $subjectId, 'userId' => $userId, 'name' => $name, 'surname' => $surname];
            echo json_encode($response);
        } else {
            $prepared_sql_query->close();
            $db_connection->close();
            echo "Nie udało się przygotować zapyania";
            http_response_code(400);
        }
    } else {
        $db_connection->close();
        echo "Nie udało się przygotować zapyania";
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connection->close();
}

