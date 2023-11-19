function add_site_params_to_header(){
    let urlParams = new URLSearchParams(window.location.search);
    let name = urlParams.get("student_name");
    let surname = urlParams.get("student_surname");
    let email = urlParams.get("student_email");
    document.getElementById("header_text").insertAdjacentHTML("beforeend", name + " " + surname + " " + email)
}