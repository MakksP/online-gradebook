<?php
require "../dbConnection/databaseConnect.php";
require "../dbConnection/databaseQueries.php";

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $db_connection = connect_to_database();
    $email = $_POST["email"];
    $password = $_POST["password"];
    $sql_query = get_logging_in_user_data();
    if ($prepared_sql_query= $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $email);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($hashed_password, $userId, $name, $surname, $role);
            if ($prepared_sql_query->fetch()){
                if (password_verify($password, $hashed_password)){
                    $_SESSION["userId"] = $userId;
                    $_SESSION["name"] = $name;
                    $_SESSION["surname"] = $surname;
                    $_SESSION["role"] = $role;
                    if ($_SESSION["role"] == "teacher"){
                        $response = array("redirect" => "./teacherHomePage.php");
                    } else if ($_SESSION["role"] == "student"){
                        $response = array("redirect" => "./studentHomePage.php");
                    }
                    echo json_encode($response);
                } else {
                    $prepared_sql_query->close();
                    $db_connection->close();
                    echo "Podane hasło jest błędne";
                    http_response_code(400);
                }
            } else{
                $prepared_sql_query->close();
                $db_connection->close();
                echo "Nie ma takiego użytkownika";
                http_response_code(400);
            }
        } else {
            echo "Nie udało się wykonać zapytania";
            $prepared_sql_query->close();
            $db_connection->close();
            http_response_code(400);
        }
        $prepared_sql_query->close();
    }else {
        echo "Błąd przy tworzeniu zapytania";
    }
    $db_connection->close();
}
