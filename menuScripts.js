function changeCardsColor(activeCardId, inactiveCardId) {
    let activeCard = document.getElementById(activeCardId)
    let inactiveCard = document.getElementById(inactiveCardId)
    inactiveCard.style.backgroundColor = "#015289"
    activeCard.style.backgroundColor = "#D6FFF6"
}

document.getElementById("login_card").onclick = function (){
    changeCardsColor("login_card", "register_card");
    document.getElementById("register_form").innerHTML = ""
    document.getElementById("login_form").innerHTML =
        `<label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email...">

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło...">

        <div class="button_container">
        <input type="submit" id="login_button" value="Zaloguj">
        </div>`
}

document.getElementById("register_card").onclick = function (){
    changeCardsColor("register_card", "login_card")
    document.getElementById("login_form").innerHTML = ""
    document.getElementById("register_form").innerHTML =
        `<label for="email" class="login_label">Wpisz email:</label>
        <input type="email" name="email" class="login_input" placeholder="podaj email...">

        <label for="password" class="login_label">Wpisz hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="podaj hasło...">
        
        <label for="password" class="login_label">Potwierdź hasło:</label>
        <input type="password" name="password" class="login_input" placeholder="potwierdź hasło...">

        <div class="button_container">
        <input type="submit" id="register_button" class="form_button" value="Zarejestruj się">
        </div>`
}