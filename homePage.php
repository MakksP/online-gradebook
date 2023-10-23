<!DOCTYPE html>
<html lang="PL-pl">
<head>
    <meta charset="UTF-8">
    <title>Online gradebook</title>
    <meta name="description" content="Welcome to my gradebook">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/homePageStyles.css">
    <link rel="stylesheet" href="fontello/css/fontello.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>
<div class="main_container">

    <div id="icons_div">
        <i class="icon-home" id="home_page"></i>
        <i class="icon-user-circle-o" id="user_symbol">
            <label for="user_symbol" id="user_label"><?php session_start(); echo $_SESSION["name"] . " " . $_SESSION["surname"] . " (" . $_SESSION["role"] . ")"?></label>
        </i>

    </div>


    <header id="subjects_header">
        <h2>Prowadzone przez ciebie przedmioty:</h2>
    </header>




</div>

</body>
</html>