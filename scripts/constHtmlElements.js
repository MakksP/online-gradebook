function get_subjects_to_add_pane(response) {
    return `<div id='subjects_to_add_pane'>
               <label id="subjects_to_add_pane_header">Możliwe przedmioty do dodania:</label>
               <button id="close_pane_button"><i class="icon-cancel-circled"></i></button>
               ${response}
           </div>`;
}

function get_students_list_div(student_labels) {
    return `<div class="gradebook_grid_element" id="student_names">
                    <label class="gradebook_grid_header">Studenci:</label>
                    ${student_labels}
                </div>`;
}

function get_nav_bar(elementId){
    document.getElementById(elementId).insertAdjacentHTML("beforeend", `<nav id="nav_panel">
            <ul id="nav_list">
                <li>
                    <button id="logo_button"><img src="/images/gradebook_logo.png" alt="gradebook_logo.png" id="logo_image"></button>
                </li>
                <li>
                    <button class="nav_pane_button" id="additional_info_button"><label class="nav_pane_label">Informacje dodatkowe</label></button>
                </li>
                <li>
                    <button class="nav_pane_button"><label class="nav_pane_label">O dzienniku</label></button>
                </li>
                <li>
                    <button class="nav_pane_button" id="login_button_nav"><label class="nav_pane_label">Zaloguj się</label></button>
                </li>
                <li>
                    <button class="nav_pane_button" id="registration_button_nav"><label class="nav_pane_label">Stwórz konto</label></button>
                </li>
            </ul>
        </nav>`);
}