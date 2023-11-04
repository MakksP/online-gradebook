<?php
session_start();

require '../dbConnection/databaseConnect.php';
require '../dbConnection/databaseQueries.php';

/**
 * @param array $response
 * @param $student_email
 * @param $current_grade_button
 * @return array
 */
function add_grade_to_array(array $response, $student_email, $current_grade_button): array
{
    if (!isset($response[$student_email])) {
        $response[$student_email] = array($current_grade_button);
    } else {
        $response[$student_email][] = $current_grade_button;
    }
    return $response;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    $db_connection = connect_to_database();
    $sql_query = get_student_email_and_grade();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["subject_name"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($student_email, $grade, $gradeId);
            $response = array();
            while ($prepared_sql_query->fetch()){
                $current_grade_button = "<button class='grade_button' id='$gradeId'>
                                                    <label class='grade_label'>$grade</label>
                                          </button>";

                $response = add_grade_to_array($response, $student_email, $current_grade_button);

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
