<?php
require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';

if ($_SERVER["REQUEST_METHOD"] == "GET"){
    $db_connection = connect_to_database();
    $sql_query = get_grade_data();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["grade_id"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($name, $surname, $grade, $description, $date);
            $prepared_sql_query->fetch();

            $response = [$name, $surname, $grade, $description, $date];
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
