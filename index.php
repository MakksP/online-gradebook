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
</head>
<body>
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
                    <img src="images/gradebook_logo.png">
                </div>

                <form id="login_form">
                    <label for="email" class="login_label">Wpisz email:</label>
                    <input type="email" name="email" class="login_input" placeholder="podaj email...">

                    <label for="password" class="login_label">Wpisz hasło:</label>
                    <input type="password" name="password" class="login_input" placeholder="podaj hasło...">

                    <div class="button_container">
                        <input type="submit" id="login_button" value="Zaloguj">
                    </div>
                </form>

            </div>
        </div>

    </div>


</body>
</html>