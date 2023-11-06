<?php

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';



if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    $db_connection = connect_to_database();
    $sql_query = get_all_students_belonging_to_subject();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["subject_name"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($student_email);
            $response = array();
            while ($prepared_sql_query->fetch()){
                $response[] = $student_email;
            }
            echo json_encode($response);
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connection->close();
            http_response_code(400);
        }
    } else {
        echo "Nie udało się przygotować zapytania";
        $db_connection->close();
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connection->close();
}
