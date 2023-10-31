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
    <script src="scripts/constHtmlElements.js"></script>

</head>
<body>

<?php session_start()?>

<main id="main_container">

    <script>get_nav_bar("main_container")</script>


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

    <footer id="start_page_footer">
        <div class="footer_div">
            <img src="images/gradebook_logo.png" alt="gradebook_logo.png" id="footer_logo_image">
        </div>

        <div id="login_to_system" class="footer_div">
            <label>Zaloguj się do systemu</label>
            <ul class="footer_list">
                <li>
                    e-Sekretariat
                </li>
                <li>
                    e-Świadectwa
                </li>
                <li>
                    e-Nauczanie
                </li>
                <li>
                    e-Biblioteka
                </li>
            </ul>
        </div>

        <div id="find_out_more" class="footer_div">
            <label>Dowiedz się więcej</label>
            <ul class="footer_list">
                <li>
                    Wszystkie artykuły
                </li>
                <li>
                    O nas
                </li>
                <li>
                    Biuro prasowe
                </li>
                <li>
                    Partnerzy
                </li>
                <li>
                    Kariera
                </li>
                <li>
                    Kontakt
                </li>
            </ul>

        </div >

        <div id="copyright" class="footer_div">
            <label>Online-gradebook wszelkie prawa zastrzeżone©</label>
        </div>
    </footer>


</main>
    <script src="scripts/teacherHomePageScripts.js"></script>
    <script src="scripts/initButtonsOnClick.js"></script>
    <script src="scripts/studentsInSubjectsScripts.js"></script>
</body>
</html>