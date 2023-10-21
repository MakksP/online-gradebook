<?php
require "../dbConnection/databaseConnect.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        global $db_connection;
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql_query = "INSERT INTO users (email, name, password, role, surname) VALUES (?, ?, ?, ?, ?)";
        if ($prepared_sql_query = $db_connection->prepare($sql_query)){
            $str = "Maksymilian";
            $str1 = "student";
            $str2 = "Pietras";
            $prepared_sql_query->bind_param("sssss", $email, $str ,$password, $str1, $str2);
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
