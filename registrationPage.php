<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">
    <link rel="stylesheet" href="styles/loginPageStyles.css">
    <link rel="stylesheet" href="styles/startPageStyles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>


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
                <button class="nav_pane_button" id="login_button_nav"><label class="nav_pane_label">Zaloguj się</label></button>
            </li>
            <li>
                <button class="nav_pane_button" id="registration_button_nav"><label class="nav_pane_label">Stwórz konto</label></button>
            </li>
        </ul>
    </nav>


    <section id="main_pane">


    </section>

    <aside class="login_icon">
        <img src="images/newUser.png" alt="schoolSymbol" id="new_user"  class="login_icon_image">
    </aside>

</main>

<script src="scripts/constHtmlElements.js"></script>
<script src="scripts/menuAjaxScripts.js"></script>
<script src="scripts/initButtonsOnClick.js"></script>
<script src="scripts/startPageScripts.js"></script>
</body>
</html>