<?php
const TEACHER_ROLE_STRING = "teacher";
const STUDENT_ROLE_STRING = "student";
const TEACHER_PASSWORD = "imteacher";

require "../dbConnection/databaseConnect.php";
require "../dbConnection/databaseQueries.php";

/**
 * @return array
 */
function getDataFromNewUser(): array
{
    $email = cleanInput($_POST["email"]);
    $password = cleanInput($_POST["password"]);
    $name = cleanInput($_POST["name"]);
    $surname = cleanInput($_POST["surname"]);
    $teacher_password = cleanInput($_POST["teacher_password"]);
    return array($email, $password, $name, $surname, $teacher_password);
}


/**
 * @param $teacher_password
 * @return bool
 */
function entered_teacher_password($teacher_password)
{
    return strlen($teacher_password) != 0;
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $db_connection = connect_to_database();
    list($email, $password, $name, $surname, $teacher_password) = getDataFromNewUser();
    if (entered_teacher_password($teacher_password)){
        if (strcmp($teacher_password, TEACHER_PASSWORD) == 0){
            $role = TEACHER_ROLE_STRING;
        } else {
            http_response_code(400);
            return;
        }
    } else {
        $role = STUDENT_ROLE_STRING;
    }
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $sql_query = get_insert_user_query();
    if ($prepared_sql_query = $db_connection->prepare($sql_query)){
            $prepared_sql_query->bind_param("sssss", $name, $surname, $email, $hashed_password, $role);
            if ($prepared_sql_query->execute()){
                echo "Pomyślnie dodano użytkownika";
            } else {
                $prepared_sql_query->close();
                $db_connection->close();
                echo "Nie udało się wykonać zapytania";
                http_response_code(400);
            }
            $prepared_sql_query->close();
    } else {
            $db_connection->close();
            echo "Błąd przy tworzeniu zapytania";
            http_response_code(400);
    }
    $db_connection->close();
}
