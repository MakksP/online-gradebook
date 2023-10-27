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


