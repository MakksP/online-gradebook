<?php
require __DIR__ . '/../../dbConnection/databaseConnect.php';
require __DIR__ . '/../../dbConnection/databaseQueries.php';
require __DIR__ . '/../../serverActions/dbSchematicFunctions.php';

function get_and_draw_student_data(){
    $db_connection = connect_to_database();
    $sql_query = get_archive_student_data();

    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["student_email"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($subjectName, $grade);;
            $tmp_subject_name = "";
            while ($prepared_sql_query->fetch()){
                $main_div_name = $subjectName . "_subject_div";
                $subject_name_div = $subjectName . "_subject_name_div";
                $grades_name_div = $subjectName . "_grades_name_div";
                $average_name_div = $subjectName . "_average_name_div";
                if ($tmp_subject_name != $subjectName){
                    create_new_container_for_subject($main_div_name, $subject_name_div,
                        $subjectName, $grades_name_div, $grade, $average_name_div);
                    $tmp_subject_name = $subjectName;
                } else{
                    echo "<script> 
                            document.getElementById('$grades_name_div').insertAdjacentHTML('beforeend', ', $grade');
                        </script>";
                }

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

/**
 * @param string $main_div_name
 * @param string $subject_name_div
 * @param $subjectName
 * @param string $grades_name_div
 * @param $grade
 * @param string $average_name_div
 * @return void
 */
function create_new_container_for_subject(string $main_div_name, string $subject_name_div, $subjectName, string $grades_name_div, $grade, string $average_name_div): void
{
    echo "<div id='$main_div_name' class='student_data_element'>
                                <div id='$subject_name_div'>
                                    $subjectName
                                </div>
                                <div id='$grades_name_div'>
                                    Oceny cząstkowe: $grade
                                </div>
                                <div id='$average_name_div'>
                                    Średnia: 
                                </div>
                            </div>";
}

