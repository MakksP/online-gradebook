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
    <link rel="stylesheet" href="styles/teacherTimetableStyles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/teacherHomePageScripts.js"></script>
    <script src="scripts/calculateFunctions.js"></script>
    <script src="scripts/initGradeButtonsOnClick.js"></script>
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
            <h2 id="header_text">Plany lekcji</h2>
        </header>
        <div id="timetable">
            <header id="hours">
                <div class="hour_div">
                    <label></label>
                </div>
                <div class="hour_div">
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
                <div class="hour_div">
                    <label>17:15 - 18:00</label>
                </div>
            </header>
            <header id="days">
                <div class="day_div">
                    <label>Poniedziałek</label>
                </div>
                <div class="day_div">
                    <label>Wtorek</label>
                </div>
                <div class="day_div">
                    <label>Środa</label>
                </div>
                <div class="day_div">
                    <label>Czwartek</label>
                </div>
                <div class="day_div">
                    <label>Piątek</label>
                </div>
            </header>
        </div>

    </section>

    <script>get_footer("main_container")</script>


</main>

<script src="scripts/initButtonsOnClick.js"></script>
<script src="scripts/studentsInSubjectsScripts.js"></script>
<script src="scripts/teacherGradesScripts.js"></script>
</body>
</html>