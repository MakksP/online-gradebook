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
    <script src="scripts/constMainHtmlElements.js"></script>

</head>
<body>


<main id="main_container">
    <?php require "./serverActions/studentSiteConstHtml.php"; get_nav_bar_after_login(); ?>
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
                <button id="student_lesson_plans_button" class="options_table_button">
                    <img src="/images/timetableButton.png" alt="subjects" class="option_button_image">

                </button>
                <label class="button_description">Plany lekcji</label>
            </div>
            <div class="options_table_div">
                <button id="observed_button_student" class="options_table_button">
                    <img src="/images/favourite.png" alt="subjects" class="option_button_image">

                </button>
                <label class="button_description">Obserwowane</label>
            </div>

        </div>
    </div>

    <script>get_footer("main_container")</script>


</main>
<script src="scripts/teacherHomePageScripts.js"></script>
<script src="scripts/initMainButtonsOnclick.js"></script>
<script src="scripts/studentsInSubjectsScripts.js"></script>
</body>
</html>