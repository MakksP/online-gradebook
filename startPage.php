<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">

    <link rel="stylesheet" href="styles/startPageStyles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/constMainHtmlElements.js"></script>

</head>
<body>


<main id="main_container">

    <script>get_nav_bar("main_container")</script>

    <section id="images_section">
        <div class="image_div">
            <img src="images/grades.png" alt="grades.png" id="grades_image" class="start_page_image">
            <label for="grades_image" class="image_description">Kontroluj oceny swojego dziecka</label>
        </div>

        <div class="image_div">

            <img src="images/studentInSchool.png" alt="studentInSchool.png" id="student_in_school_image" class="start_page_image">
            <label for="student_in_school_image" class="image_description">Sprwadź czy twoje dziecko<br> chodzi na zajęcia</label>
        </div>

        <div class="image_div">

            <img src="images/timetable.png" alt="timetable.png" id="timetable_image" class="start_page_image">
            <label for="timetable_image" class="image_description">Przeglądaj plan lekcji</label>
        </div>

    </section>

    <script>get_footer("main_container")</script>


</main>
<script src="scripts/initMainButtonsOnclick.js"></script>
</body>
</html>