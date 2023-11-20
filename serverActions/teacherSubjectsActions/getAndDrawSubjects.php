<?php
require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';
require __DIR__ . '/../../serverActions/dbSchematicFunctions.php';

function get_and_draw_subjects(){
    $db_connection = connect_to_database();
    $sql_query = get_teaching_subjects();

    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_SESSION["userId"]);
        if ($prepared_sql_query->execute()){
            $favourite_elements = select_php_query_core('get_all_favourite_elements', "s", true, $_SESSION["userId"]);
            $prepared_sql_query->bind_result($subject, $subjectId);
            $is_favourite_flag = false;
            while ($prepared_sql_query->fetch()){
                foreach ($favourite_elements as $favourite_element){
                    if (strcmp($favourite_element, $subject) == 0){
                        if ($_SESSION["role"] == "teacher"){
                            echo "<div class='subject_div'>
                           <button type='button' class='subject_button' id='$subjectId'>$subject</button>
                           <button class='delete_button'><i class='icon-trash'></i></button>
                           <button class='delete_favourite_button'><i class='icon-block'></i></button>
                       </div>";
                        } else {
                            echo "<div class='subject_div'>
                           <button type='button' class='subject_button' id='$subjectId'>$subject</button>
                           <button class='delete_favourite_button' style='grid-column: 1/3'><i class='icon-block'></i></button>
                       </div>";
                        }

                        $is_favourite_flag = true;
                        break;
                    }
                }
                if ($is_favourite_flag){
                    $is_favourite_flag = false;
                    continue;
                }

                if ($_SESSION["role"] == "teacher"){
                    echo "<div class='subject_div'>
                           <button type='button' class='subject_button' id='$subjectId'>$subject</button>
                           <button class='delete_button'><i class='icon-trash'></i></button>
                           <button class='favourite_button'><i class='icon-star-circled'></i></button>
                       </div>";
                } else {
                    echo "<div class='subject_div'>
                           <button type='button' class='subject_button' id='$subjectId'>$subject</button>
                           <button class='favourite_button' style='grid-column: 1/3'><i class='icon-star-circled'></i></button>
                       </div>";
                }
            }
            if ($_SESSION["role"] == "teacher"){
                $add_subject_button_content = '<i class="icon-plus-circled"></i>';
                echo "<div  class='subject_div'>
                    <button type='button' class='subject_button' id='new_subject_button'>$add_subject_button_content
                    </button>
                  <div>";
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

