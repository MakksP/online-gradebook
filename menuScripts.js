const INACTIVE_CARD_COLOR = "#015289";

const ACTIVE_CARD_COLOR = "#D6FFF6";

function changeCardsColor(activeCardId, inactiveCardId) {
    let activeCard = document.getElementById(activeCardId)
    let inactiveCard = document.getElementById(inactiveCardId)
    inactiveCard.style.backgroundColor = INACTIVE_CARD_COLOR
    activeCard.style.backgroundColor = ACTIVE_CARD_COLOR
}

document.getElementById("login_card").onclick = function (){
    changeCardsColor("login_card", "register_card");
    document.getElementById("login_field").style.height = "40%";
    document.getElementById("register_form").innerHTML = ""

    document.getElementById("login_form").innerHTML =
        `<label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email...">

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło...">

        <div class="button_container">
            <input type="submit" id="login_button" class="form_button" value="Zaloguj">
        </div>`
}

document.getElementById("register_card").onclick = function (){
    changeCardsColor("register_card", "login_card")
    document.getElementById("login_field").style.height = "80%";
    document.getElementById("login_form").innerHTML = ""

    document.getElementById("register_form").innerHTML =
        `

        <label for="name" class="login_label">Imię:</label>
        <input type="text" name="name" class="login_input" placeholder="podaj imię...">
        
        <label for="surname" class="login_label">Nazwisko:</label>
        <input type="text" name="surname" class="login_input" placeholder="podaj nazwisko...">

        <label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email...">

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło...">
        
        <label for="password" class="login_label">Potwierdź hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="potwierdź hasło...">
        
        <label for="password" class="login_label">Hasło nauczyciela:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło nauczyciela...">

        <div class="button_container">
            <input type="submit" id="register_button" class="form_button" value="Zarejestruj się">
        </div>`
}