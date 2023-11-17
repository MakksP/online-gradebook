<?php
session_start();

require '../../dbConnection/databaseConnect.php';
require '../../dbConnection/databaseQueries.php';


/**
 * @param array $response
 * @param $student_email
 * @param $current_attendance_button
 * @return array
 */
function add_attendance_to_array(array $response, $student_email, $current_attendance_button): array
{
    if (!isset($response[$student_email])) {
        $response[$student_email] = array($current_attendance_button);
    } else {
        $response[$student_email][] = $current_attendance_button;
    }
    return $response;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    $db_connection = connect_to_database();
    $sql_query = get_student_email_and_attendance();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["subject_name"]);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($student_email, $attendance, $attendanceId);
            $response = array();
            while ($prepared_sql_query->fetch()){
                $current_attendance_button = "<button class='attendance_button' id='$attendanceId'>
                                                    <label class='attendance_label'>$attendance</label>
                                          </button>";

                $response = add_attendance_to_array($response, $student_email, $current_attendance_button);

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
