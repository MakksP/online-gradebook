<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">
    <link rel="stylesheet" href="styles/loginRegisterPagesStyles.css">
    <link rel="stylesheet" href="styles/startPageStyles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/constMainHtmlElements.js"></script>


</head>
<body>
<main id="main_container">

    <script>get_nav_bar("main_container")</script>


    <section class="main_pane">

        <label id="login_label">Stwórz konto:</label>

        <form id="registration_form">

            <div class="form_element">
                <label for="name" class="login_label">Imię</label>
                <span class="form_field">
                        <input type="text" name="name" class="login_input" required>
                </span>
            </div>

            <div class="form_element">
                <label for="surname" class="login_label">Nazwisko</label>
                <span class="form_field">
                        <input type="text" name="surname" class="login_input" required>
                </span>
            </div>


            <div class="form_element">


                <label for="email" class="login_label">Email</label>
                <span class="form_field"><i class="icon-user" id="icon_login"></i>
                        <input type="email" name="email" class="login_input" required>
                </span>

            </div>

            <div class="form_element">
                <label for="password" class="login_label">Hasło</label>
                <span class="form_field"><i class="icon-key" id="icon_password"></i>
                        <input type="password" name="password" class="login_input" id="password_field" required>
                </span>

            </div>

            <div class="form_element">
                <label for="rewrite_password" class="login_label">Powtórz hasło</label>
                <span class="form_field"><i class="icon-key" id="icon_password"></i>
                    <input type="password" name="rewrite_password" class="login_input" id="password_field" required>
                </span>

            </div>

            <div class="form_element">
                <label for="teacher_password" class="login_label">Hasło nauczyciela</label>
                <span class="form_field"><i class="icon-key" id="icon_password"></i>
                    <input type="password" name="teacher_password" class="login_input" id="password_field">
                </span>

            </div>

            <div class="button_container">
                <input type="submit" id="registration_button" class="form_button" value="Zarejestruj się">

            </div>
            <div id="wrong_registration_data">
                <span id="incorrect_email_password"></span>
            </div>

        </form>

    </section>

    <aside class="login_icon">
        <img src="images/newUser.png" alt="schoolSymbol" id="new_user"  class="login_icon_image">
    </aside>


</main>

<script src="scripts/menuAjaxScripts.js"></script>
<script src="scripts/initMainButtonsOnclick.js"></script>
</body>
</html>