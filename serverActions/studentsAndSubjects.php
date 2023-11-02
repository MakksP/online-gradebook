<?php
session_start();
require "../dbConnection/databaseConnect.php";
require "../dbConnection/databaseQueries.php";


if ($_SERVER["REQUEST_METHOD"] == "GET"){
    $db_connection = connect_to_database();
    $sql_query = get_students_by_subject();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $_GET["subject_name"]);
        $prepared_sql_query->bind_result($student_name, $student_surname, $student_email);
        if ($prepared_sql_query->execute()){
            while ($prepared_sql_query->fetch()){
                $grade_div_id = $student_email . "_grade_div";
                echo "<div class='student_label_div'><label class='student_label'>$student_name $student_surname $student_email</label></div><div id='$grade_div_id' class='grade_part'></div>";
            }
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connection->close();
            http_response_code(400);
        }
    } else{
        echo "Nie udało się przygotować zapytania";
        $db_connection->close();
        http_response_code(400);
    }
    $prepared_sql_query->close();
    $db_connection->close();
}
