<?php
require "../dbConnection/databaseConnect.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        global $db_connection;
        $email = $_POST["email"];
        $password = $_POST["password"];
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $teacher_password = $_POST["teacher_password"];
        $sql_query = "INSERT INTO users (name, surname, email, password, role) VALUES (?, ?, ?, ?, ?)";
        if ($prepared_sql_query = $db_connection->prepare($sql_query)){
            $prepared_sql_query->bind_param("sssss", $name, $surname, $email, $password, $teacher_password);
            if ($prepared_sql_query->execute()){
                echo `Pomyślnie dodano użytkownika`;
            } else {
                echo `Nie udało się wykonać zapytania`;
            }
            $prepared_sql_query->close();
        } else {
            echo `Błąd przy tworzeniu zapytania`;
        }


}


?>
