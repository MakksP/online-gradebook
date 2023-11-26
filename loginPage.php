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


        <section class="main_pane" id="login_main_pane">

            <form id="login_form">
                <label id="login_label">Logowanie:</label>
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

                <div class="button_container">
                    <input type="submit" id="login_button" class="form_button" value="Zaloguj">

                </div>
                <span id="incorrect_email_password"></span>
            </form>

            <aside class="login_icon" id="login_div">
                <img src="images/schoolSymbol.png" alt="schoolSymbol" class="login_icon_image">
            </aside>

        </section>




    </main>

    <script src="scripts/menuAjaxScripts.js"></script>
    <script src="scripts/initMainButtonsOnclick.js"></script>
</body>
</html>