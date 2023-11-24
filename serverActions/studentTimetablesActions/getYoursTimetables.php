<?php

require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';


function get_yours_timetables_buttons(){
    $db_connection = connect_to_database();
    $sql_query = get_yours_timetables_id();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_SESSION["userId"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($lessonPlanId);
            while ($prepared_sql_query->fetch()){
                echo "   <div class='timetable_button_row'>
                        <button class='timetable_tag_button' id='timetable_button_$lessonPlanId'>
                                            <label class='timetable_tag_label'>Plan $lessonPlanId</label>
                                        </div>";
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
