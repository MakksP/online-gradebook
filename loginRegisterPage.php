<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">
    <link rel="stylesheet" href="styles/loginStyles.css">
    <link rel="stylesheet" href="styles/loginRegisterCardAnim.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body onload="fill_login_form()">
    <div class="main_container">

        <div id="main_pane">
            <div id="login_register_card">
                <div id="login_card" class="card_button_container">
                    <button type="button" class="card_button">Logowanie</button>
                </div>

                <div id="register_card" class="card_button_container">
                    <button type="button" class="card_button">Rejestracja</button>
                </div>
            </div>


            <div id="login_field">


                <div id="online_gradebook_logo">
                    <img src="images/gradebook_logo.png" alt="gradebook_logo">
                </div>

                <div>
                    <form id="login_form" action="serverActions/registerActions.php"></form>
                </div>
                <div>
                    <form id="register_form" action="serverActions/registerActions.php"></form>
                    <label id="incorrect_teacher_password"></label>
                </div>


            </div>
        </div>

    </div>
    <script src="scripts/menuScripts.js"></script>
    <script src="scripts/menuAjaxScripts.js"></script>

</body>
</html>