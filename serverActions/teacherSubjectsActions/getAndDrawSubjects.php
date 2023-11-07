<?php
require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';

function get_and_draw_subjects(){
    $db_connection = connect_to_database();
    $sql_query = get_teaching_subjects();

    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_SESSION["userId"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($subject, $subjectId);
            while ($prepared_sql_query->fetch()){
                echo "<div class='subject_div'>
                           <button type='button' class='subject_button' id='$subjectId'>$subject</button>
                           <button class='delete_button'><i class='icon-trash'></i></button>
                           <button class='favourite_button'><i class='icon-star-circled'></i></button>
                       </div>";
            }
            $add_subject_button_content = '<i class="icon-plus-circled"></i>';
            echo "<div  class='subject_div'><button type='button' class='subject_button' id='new_subject_button'>$add_subject_button_content</button></div>";
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

