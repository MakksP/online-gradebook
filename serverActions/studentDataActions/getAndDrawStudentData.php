<?php
require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';
require __DIR__ . '/../../serverActions/dbSchematicFunctions.php';

function get_and_draw_student_data(){
    $db_connection = connect_to_database();
    $sql_query = get_all_favourite_elements();

    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_SESSION["userId"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($subject);;
            while ($prepared_sql_query->fetch()){
                echo "<div class='subject_div'>
                   
               </div>";
            }

        } else{
            $prepared_sql_query->close();
            $db_connection->close();
            echo "Nie udało się wykonać zapytania";
            http_response_code(400);
        }

    } else {
        $db_connection->close();
        echo "Nie udało się przygotować zapytania";
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connection->close();
}

