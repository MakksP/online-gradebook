<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/teacherHomePageStyles.css">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>



<main class="main_container">

    <div id="icons_div">
        <i class="icon-home" id="home_page"></i>
        <i class="icon-user-circle-o" id="user_symbol">
            <label for="user_symbol" id="user_label"><?php session_start(); echo $_SESSION["name"] . " " . $_SESSION["surname"] . " (" . $_SESSION["role"] . ")"?></label>
        </i>
    </div>

    <header id="subjects_header">
        <h2>Prowadzone przez ciebie przedmioty:</h2>
    </header>

    <div id="subjects_table">
        <?php
            require 'dbConnection/databaseConnect.php';
            require 'dbConnection/databaseQueries.php';

            $db_connection = connect_to_database();
            $sql_query = get_teaching_subjects();

            if ($prepared_sql_query = $db_connection->prepare($sql_query)){
                $prepared_sql_query->bind_param("s", $_SESSION["userId"]);
                if ($prepared_sql_query->execute()){
                    $prepared_sql_query->bind_result($subject);
                    while ($prepared_sql_query->fetch()){
                        echo "<button type='button' class='subject_button'>$subject</button>";
                    }
                    $add_subject_button_content = '<i class="icon-plus-circled"></i>';
                    echo "<button type='button' class='subject_button' id='new_subject_button'>$add_subject_button_content</button>";
                } else{
                    echo "Nie udało się wykonać zapytania";
                    http_response_code(400);
                    return;
                }

            } else {
                echo "Nie udało się przygotować zapytania";
                http_response_code(400);
                return;
            }
        ?>
    </div>


</main>

</body>
</html>