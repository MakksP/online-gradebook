<?php
require "../dbConnection/databaseConnect.php";

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $db_connection = connect_to_database();
    $email = $_POST["email"];
    $password = $_POST["password"];
    $sql_query = "SELECT password, userId FROM users WHERE email = ?";
    if ($prepared_sql_query= $db_connection->prepare($sql_query)){
        $prepared_sql_query->bind_param("s", $email);
        if ($prepared_sql_query->execute()){
            $prepared_sql_query->bind_result($hashed_password, $userId);
            if ($prepared_sql_query->fetch()){
                if (password_verify($password, $hashed_password)){
                    $_SESSION["userId"] = $userId;
                    $response = array("redirect" => "../homePage.php");
                    echo json_encode($response);
                } else {
                    echo "Podane hasło jest błędne";
                    return;
                }
            } else{
                http_response_code(400);
                return;
            }
        } else {
            echo "Nie udało się wykonać zapytania";
        }
        $prepared_sql_query->close();
    }else {
        echo "Błąd przy tworzeniu zapytania";
    }
    $db_connection->close();
}
