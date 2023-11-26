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
    <link rel="stylesheet" href="styles/studentSubjectsPage.css">
    <link rel="stylesheet" href="styles/yoursGradesStyles.css">
    <link rel="stylesheet" href="styles/studentDataStyles.css">

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

    <?php require "./serverActions/studentSiteConstHtml.php"; get_nav_bar_after_login(); ?>


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
<script src="scripts/studentGradesScripts.js"></script>
<script src="scripts/initAttendanceButtonsOnclick.js"></script>
<script src="scripts/studentGradesHistoryButtonScript.js"></script>

<script>create_student_subject_buttons_onclick_action(PANE_WITHOUT_ADD_BUTTON);
    create_add_favourite_element_onclick_action();
    create_delete_favourite_element_onclick_action();</script>
</body>
</html>