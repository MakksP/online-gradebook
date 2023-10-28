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

</head>
<body>


<main id="main_container">

    <nav id="main_panel">
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
                <button class="nav_pane_button" id="login_button"><label class="nav_pane_label">Zaloguj się</label></button>
            </li>
            <li>
                <button class="nav_pane_button" id="registration_button"><label class="nav_pane_label">Stwórz konto</label></button>
            </li>
        </ul>
    </nav>

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
<script src="scripts/startPageScripts.js">
</body>
</html>