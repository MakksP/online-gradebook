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
    <link rel="stylesheet" href="styles/subjectInfoStyles.css">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <link rel="stylesheet" href="styles/subjectsToAddPaneStyles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>

<?php session_start()?>

<main id="main_container">

    <div id="icons_div">
        <i class="icon-home" id="home_page"></i>
        <i class="icon-user-circle-o" id="user_symbol">
            <label for="user_symbol" id="user_label"><?php echo $_SESSION["name"] . " " . $_SESSION["surname"] . " (" . $_SESSION["role"] . ")"?></label>
        </i>
    </div>

    <header id="subjects_header">
        <h2 id="header_text">Prowadzone przez ciebie przedmioty:</h2>
    </header>

    <div id="subjects_table">
        <?php
            require 'serverActions/getAndDrawSubjects.php';
            get_and_draw_subjects();
        ?>
    </div>


</main>
    <script src="scripts/teacherHomePageScripts.js"></script>
</body>
</html>