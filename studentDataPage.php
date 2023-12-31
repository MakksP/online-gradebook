<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">


    <link rel="stylesheet" href="fontello/css/fontello.css">
    <link rel="stylesheet" href="styles/startPageStyles.css">
    <link rel="stylesheet" href="styles/teacherHomePageStyles.css">
    <link rel="stylesheet" href="styles/teacherSubjectsPage.css">
    <link rel="stylesheet" href="styles/gradeEditPaneStyles.css">
    <link rel="stylesheet" href="styles/subjectsEditPane.css">
    <link rel="stylesheet" href="styles/studentDataStyles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/teacherHomePageScripts.js"></script>
    <script src="scripts/calculateFunctions.js"></script>
    <script src="scripts/initGradeButtonsOnclick.js"></script>
    <script src="scripts/constMainHtmlElements.js"></script>
    <script src="scripts/constGradesHtmlElements.js"></script>
    <script src="scripts/constAttendanceHtmlElements.js"></script>
    <script src="scripts/siteParams.js"></script>
</head>
<body>


<main id="main_container">

    <?php require "./serverActions/teacherSiteConstHtml.php"; get_nav_bar_after_login(); ?>


    <section id="subjects_container">
        <header id="subjects_header">
            <h2 id="header_text">Historie ocenowe studenta: <script>add_site_params_to_header();</script></h2>
        </header>

        <section id="table_container">
            <div id="total_student_average">Średnia całkowita: </div>
            <div id="subjects_table">

                <?php require 'serverActions/studentDataActions/getAndDrawStudentData.php'; get_and_draw_student_data(); ?>
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

<script>create_teacher_subject_buttons_onclick_action(PANE_WITHOUT_ADD_BUTTON);
    create_add_favourite_element_onclick_action();
    create_delete_favourite_element_onclick_action();</script>
</body>
</html>