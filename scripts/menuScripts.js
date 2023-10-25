const INACTIVE_CARD_COLOR = "#015289";
const ACTIVE_CARD_COLOR = "#D6FFF6";

function changeCardsColor(activeCardId, inactiveCardId) {
    let activeCard = document.getElementById(activeCardId)
    let inactiveCard = document.getElementById(inactiveCardId)
    inactiveCard.style.backgroundColor = INACTIVE_CARD_COLOR
    activeCard.style.backgroundColor = ACTIVE_CARD_COLOR
}

function set_default_fonts(formId) {
    const element_style = document.getElementById(formId).style;
    element_style.fontSize = "15px";
    element_style.fontFamily = "Tilt Neon, sans-serif";
    element_style.color = "black";
    element_style.textShadow = "none"

}


function fill_login_form() {
    document.getElementById("login_form").innerHTML =
        get_login_form_content()
    set_default_fonts("login_form");
}



function fill_register_form() {
    document.getElementById("register_form").innerHTML =
        get_registration_form_content()
    set_default_fonts("register_form")
}


