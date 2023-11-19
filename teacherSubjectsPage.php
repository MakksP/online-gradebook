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
    <link rel="stylesheet" href="styles/teacherSubjectsPage.css">
    <link rel="stylesheet" href="styles/gradeEditPaneStyles.css">
    <link rel="stylesheet" href="styles/subjectsEditPane.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/teacherHomePageScripts.js"></script>
    <script src="scripts/calculateFunctions.js"></script>
    <script src="scripts/initGradeButtonsOnclick.js"></script>
    <script src="scripts/constMainHtmlElements.js"></script>
    <script src="scripts/constGradesHtmlElements.js"></script>
    <script src="scripts/constAttendanceHtmlElements.js"></script>
</head>
<body>


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
                    <div id="user_label">
                        <div>
                            <i class="icon-user"></i><?php session_start(); echo $_SESSION["name"] . " " . $_SESSION["surname"] . " (" . $_SESSION["role"] . ")"?>
                        </div>
                        <button id="logout_button">Wyloguj się <i class="icon-logout"></i></button>
                    </div>
                </div>
            </li>
        </ul>
    </nav>


    <section id="subjects_container">
        <header id="subjects_header">
            <h2 id="header_text">Dostępne opcje:</h2>
        </header>
        <section id="table_container">
            <div id="subjects_table">
                <?php require 'serverActions/teacherSubjectsActions/getAndDrawSubjects.php'; get_and_draw_subjects(); ?>
            </div>
        </section>


    </section>

    <script>get_footer("main_container")</script>


</main>

<script src="scripts/initMainButtonsOnclick.js"></script>
<script src="scripts/initSubjectsButtonsOnclick.js"></script>
<script src="scripts/studentsInSubjectsScripts.js"></script>
<script src="scripts/teacherGradesScripts.js"></script>
<script src="scripts/teacherTimetableScripts.js"></script>
<script src="scripts/initAttendanceButtonsOnclick.js"></script>
</body>
</html>