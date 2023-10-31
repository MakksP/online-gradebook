<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <link rel="stylesheet" href="styles/startPageStyles.css">
    <link rel="stylesheet" href="styles/teacherHomePageStyles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>

<?php session_start()?>

<main id="main_container">

    <nav id="nav_panel">
        <ul id="nav_list">
            <li>
                <button id="logo_button"><img src="/images/gradebook_logo.png" alt="gradebook_logo.png" id="logo_image"></button>
            </li>
            <li>
                <button class="nav_pane_button" id="additional_info_button"><label class="nav_pane_label">Informacje dodatkowe</label></button>
            </li>
            <li>
                <button class="nav_pane_button"><label class="nav_pane_label">O dzienniku</label></button>
            </li>
            <li>
                <div id="icons_div">

                    <label for="user_symbol" id="user_label">
                        <i class="icon-user"></i><?php echo $_SESSION["name"] . " " . $_SESSION["surname"] . " (" . $_SESSION["role"] . ")"?>
                        <button id="logout_button">Wyloguj się <i class="icon-logout"></i></button>
                    </label>

                </div>
            </li>
        </ul>
    </nav>




    <div id="options_table">
        <header id="subjects_header">
            <h2 id="header_text">Dostępne opcje:</h2>
        </header>
        <div id="buttons_area">
            <div class="options_table_div">
                <button id="subjects_button" class="options_table_button">
                    <img src="/images/subjects.png" alt="subjects" class="option_button_image">
                </button>
                <label class="button_description">Twoje przedmioty</label>
            </div>

            <div class="options_table_div">
                <button id="lesson_plans_button" class="options_table_button">
                    <img src="/images/timetableButton.png" alt="subjects" class="option_button_image">

                </button>
                <label class="button_description">Plany lekcji</label>
            </div>
            <div class="options_table_div">
                <button id="observed_button" class="options_table_button">
                    <img src="/images/favourite.png" alt="subjects" class="option_button_image">

                </button>
                <label class="button_description">Obserwowane</label>
            </div>

        </div>
    </div>


</main>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/teacherHomePageScripts.js"></script>
    <script src="scripts/initButtonsOnClick.js"></script>
<script src="scripts/studentsInSubjectsScripts.js"></script>
</body>
</html>