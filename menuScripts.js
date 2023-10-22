const INACTIVE_CARD_COLOR = "#015289";

const ACTIVE_CARD_COLOR = "#D6FFF6";

function changeCardsColor(activeCardId, inactiveCardId) {
    let activeCard = document.getElementById(activeCardId)
    let inactiveCard = document.getElementById(inactiveCardId)
    inactiveCard.style.backgroundColor = INACTIVE_CARD_COLOR
    activeCard.style.backgroundColor = ACTIVE_CARD_COLOR
}

function fill_login_form() {
    document.getElementById("login_form").innerHTML =
        `<label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email..." required>
         <span class="required_field">*</span>

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło..." required>
         <span class="required_field">*</span>

        <div class="button_container">
            <input type="submit" id="login_button" class="form_button" value="Zaloguj">
        </div>`
}

document.getElementById("login_card").onclick = function (){
    changeCardsColor("login_card", "register_card");
    document.getElementById("login_field").style.height = "40%";
    document.getElementById("register_form").innerHTML = ""
    fill_login_form();
}

function fill_register_form() {
    document.getElementById("register_form").innerHTML =
        `

        <label for="name" class="login_label">Imię:</label>
        <input type="text" name="name" class="login_input" placeholder="podaj imię..." required>
        <span class="required_field">*</span>
        
        <label for="surname" class="login_label">Nazwisko:</label>
        <input type="text" name="surname" class="login_input" placeholder="podaj nazwisko..." required>
         <span class="required_field">*</span>

        <label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email..." required>
         <span class="required_field">*</span>

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło..." required>
         <span class="required_field">*</span>
        
        <label for="password" class="login_label">Potwierdź hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="potwierdź hasło..." required>
         <span class="required_field">*</span>
        
        <label for="password" class="login_label">Hasło nauczyciela:</label>
        <input type="password" name="teacher_password" class="login_input" placeholder="podaj hasło nauczyciela...">

        <div class="button_container">
            <input type="submit" id="register_button" class="form_button" value="Zarejestruj się">
        </div>`
}

document.getElementById("register_card").onclick = function (){
    changeCardsColor("register_card", "login_card")
    document.getElementById("login_field").style.height = "80%";
    document.getElementById("login_form").innerHTML = ""
    fill_register_form();
}