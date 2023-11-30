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
    <link rel="stylesheet" href="styles/teacherTimetableStyles.css">
    <link rel="stylesheet" href="styles/appearingPanesInTimetableStyles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/teacherHomePageScripts.js"></script>
    <script src="scripts/calculateFunctions.js"></script>
    <script src="scripts/initGradeButtonsOnclick.js"></script>
    <script src="scripts/teacherTimetableScripts.js"></script>
    <script src="scripts/constMainHtmlElements.js"></script>

</head>
<body>


<main id="main_container">

    <?php require "./serverActions/teacherSiteConstHtml.php"; get_nav_bar_after_login(); ?>

    <header id="subjects_header">
        <h2 id="header_text">Plany lekcji</h2>
    </header>
    <section id="subjects_container">
        <button id="add_subject_button"><label id="add_subject_label">Edytuj przedmioty</label></button>
        <aside id="timetables_panel">
            <div id="timetable_buttons_container">
                <?php require './serverActions/teacherTimetablesActions/getAllTimetables.php'; get_all_timetables_buttons(); ?>
            </div>
            <button id="new_timetable_button"><i class="icon-list-add"></i></button>
        </aside>
        <div id="timetable">
            <header id="hours">
                <div class="hour_div" id="filler">
                    <button id="add_new_student_button">
                        <i class="icon-user-plus"></i>
                    </button>

                </div>
                <div class="hour_div" id="first_hour">
                    <label>8:15 - 9:00</label>
                </div>
                <div class="hour_div">
                    <label>9:15 - 10:00</label>
                </div>
                <div class="hour_div">
                    <label>10:15 - 11:00</label>
                </div>
                <div class="hour_div">
                    <label>11:15 - 12:00</label>
                </div>
                <div class="hour_div">
                    <label>12:15 - 13:00</label>
                </div>
                <div class="hour_div">
                    <label>13:15 - 14:00</label>
                </div>
                <div class="hour_div">
                    <label>14:15 - 15:00</label>
                </div>
                <div class="hour_div">
                    <label>15:15 - 16:00</label>
                </div>
                <div class="hour_div">
                    <label>16:15 - 17:00</label>
                </div>
                <div class="hour_div" id="last_hour">
                    <label>17:15 - 18:00</label>
                </div>
            </header>
            <header id="days">
                <div class="day_div" id="monday">
                    <label>Poniedziałek</label>
                </div>
                <div class="day_div" id="tuesday">
                    <label>Wtorek</label>
                </div>
                <div class="day_div" id="wednesday">
                    <label>Środa</label>
                </div>
                <div class="day_div" id="thursday">
                    <label>Czwartek</label>
                </div>
                <div class="day_div" id="friday">
                    <label>Piątek</label>
                </div>
            </header>
            <script src="scripts/teacherTimetableScripts.js"></script>
            <script>fill_timetable_with_elements(get_single_raw_timetable_element)</script>
        </div>

    </section>

    <script>get_footer("main_container")</script>


</main>

<script src="scripts/initMainButtonsOnclick.js"></script>
<script src="scripts/studentsInSubjectsScripts.js"></script>
<script src="scripts/teacherGradesScripts.js"></script>
<script src="scripts/initTimetableButtonsOnclick.js"></script>
<script src="scripts/timetableCellsScripts.js"></script>
<script src="scripts/timetableNewSubjectsScripts.js"></script>
</body>
</html>