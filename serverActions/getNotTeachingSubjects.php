<?php

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    $db_connection = connect_to_database();
    $sql_query = get_not_teaching_subjects();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_SESSION["userId"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($not_teaching_subject);
            while ($prepared_sql_query->fetch()){
                echo "<button class='not_teaching_subject_button' id='$not_teaching_subject'>
                            <label class='not_teaching_subject_label'>$not_teaching_subject</label>
                      </button>";
            }
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
