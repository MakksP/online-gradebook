<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">
    <link rel="stylesheet" href="styles/loginPageStyles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>
    <main id="main_container">

        <section id="main_pane">
            <div id="online_gradebook_logo">
                <img src="./images/gradebook_logo.png" alt="gradebook_logo">
            </div>
            <label id="login_label">Logowanie:</label>

            <form id="login_form">
                <div class="form_element">
                    <label for="email" class="login_label">Email</label>
                    <input type="email" name="email" class="login_input" required>
                </div>

                <div class="form_element">
                    <label for="password" class="login_label">Hasło </label>
                    <input type="password" name="password" class="login_input" required>
                </div>


                <div class="button_container">
                    <input type="submit" id="login_button" class="form_button" value="Zaloguj">
                </div>
            </form>
            <label id="incorrect_email_password"></label>

        </section>

    </main>
    
    <script src="scripts/constHtmlElements.js"></script>
    <script src="scripts/menuScripts.js"></script>
    <script src="scripts/menuAjaxScripts.js"></script>
    <script src="scripts/initButtonsOnClick.js"></script>

</body>
</html>