function get_subjects_to_add_pane(response) {
    return `<div id='subjects_to_add_pane'>
               <label id="subjects_to_add_pane_header">Możliwe przedmioty do dodania:</label>
               <button id="close_pane_button"><i class="icon-cancel-circled"></i></button>
               ${response}
           </div>`;
}

function get_students_list_div(student_labels) {
    return `<div class="gradebook_grid_element" id="student_names">
                    ${student_labels}
            </div>`;
}

function get_students_in_subject_header(){
    return `<div id="gradebook_grid_header">
        <label id="gradebook_grid_students_header">Studenci:</label>
        <label id="gradebook_grid_grades_header">Oceny:</label>
    </div>`
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



function get_footer(elementId){
    document.getElementById(elementId).insertAdjacentHTML("beforeend", `<footer id="start_page_footer">
        <div class="footer_div">
            <img src="images/gradebook_logo.png" alt="gradebook_logo.png" id="footer_logo_image">
        </div>
        
        <div id="login_to_system" class="footer_div">
            <label>Zaloguj się do systemu</label>
            <ul class="footer_list">
                <li>
                    e-Sekretariat
                </li>
                <li>
                    e-Świadectwa
                </li>
                <li>
                    e-Nauczanie
                </li>
                <li>
                    e-Biblioteka
                </li>
            </ul>
        </div>

        <div id="find_out_more" class="footer_div">
            <label>Dowiedz się więcej</label>
            <ul class="footer_list">
                <li>
                    Wszystkie artykuły
                </li>
                <li>
                    O nas
                </li>
                <li>
                    Biuro prasowe
                </li>
                <li>
                    Partnerzy
                </li>
                <li>
                    Kariera
                </li>
                <li>
                    Kontakt
                </li>
            </ul>

        </div >

        <div id="copyright" class="footer_div">
            <label>Online-gradebook wszelkie prawa zastrzeżone©</label>
        </div>
    </footer>`);
}
