function get_subjects_to_add_pane(response) {
    return `<div id='subjects_to_add_pane' class="appearing_pane">
               <button id="close_pane_button"><i class="icon-cancel-circled"></i></button>
               <label id="subjects_to_add_pane_header">Możliwe przedmioty do dodania:</label>
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
            <img src="/images/gradebook_logo.png" alt="gradebook_logo.png" id="footer_logo_image">
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

function get_grade_edit_pane(name, surname, grade, description, date){
    const available_grades = find_rest_of_grades(grade);
    return `
        <div id="grade_edit_pane" class="appearing_pane">
            <div id="grade_edit_close_button_div">
                <button id="grade_edit_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="student_name_label">
                <label>Ocena studenta:<br>${name} ${surname}</label>
            </div>
            <div id="grade_symbol">
                <label>${grade}</label>
            </div>
            <div id="change_grade_div">
                <label>Zmień ocenę:</label>
                <div class="possible_grades">
                    <button class="available_grade_button"><label class="grade_label">${available_grades[0]}</label></button>
                    <button class="available_grade_button"><label class="grade_label">${available_grades[1]}</label></button>
                    <button class="available_grade_button"><label class="grade_label">${available_grades[2]}</label></button>
                </div>
            </div>
            <div id="description">
                <label>Opis:</label>
                <input type="text" id="edit_grade_pane_description_input" value="${description}" />
            </div>
            <div id="date">
                <label>Data:</label>
                <input type="text" id="edit_grade_pane_date_input" value="${date}" />
            </div>
            <div class="save">
                <button type="submit" id="save_changes_button">Zapisz</button>
            </div>
            <div class="delete">
                <button type="submit" id="delete_grade_button">Usuń ocenę</button>
            </div>
        </div>
    `
}

function get_add_grade_pane(name, surname){
    const available_grades = [2, 3, 4, 5];
    return `
        <div id="add_grade_pane" class="appearing_pane">
            <div id="grade_add_close_button_div">
                <button id="grade_add_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="student_name_label">
                <label>Dodaj ocenę dla studenta:<br>${name} ${surname}</label>
            </div>
            <div id="chosen_grade_div">
                <label id="chosen_grade_label"></label>
            </div>
            <div id="change_grade_div">
                <label>Wybierz ocenę:</label>
                <div class="possible_grades">
                    <button class="available_grade_button"><label class="grade_label">${available_grades[0]}</label></button>
                    <button class="available_grade_button"><label class="grade_label">${available_grades[1]}</label></button>
                    <button class="available_grade_button"><label class="grade_label">${available_grades[2]}</label></button>
                    <button class="available_grade_button"><label class="grade_label">${available_grades[3]}</label></button>
                </div>
            </div>
            <div id="description">
                <label>Opis:</label>
                <input type="text" id="add_grade_pane_description_input"/>
            </div>
            <div id="date">
                <label>Data:</label>
                <input type="text" id="add_grade_pane_date_input"/>
            </div>
            <div class="save">
                <button type="submit" id="save_grade_button">Zapisz</button>
            </div>
        </div>
    `
}

function get_add_attendance_pane(name, surname){
    const available_attendances = ["Obecny", "Nieobecny"];
    return `
        <div id="add_attendance_pane" class="appearing_pane">
            <div id="attendance_add_close_button_div">
                <button id="attendance_add_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="student_name_label">
                <label>Dodaj obecność dla studenta:<br>${name} ${surname}</label>
            </div>
            <div id="chosen_attendance_div">
                <label id="chosen_attendance_label"></label>
            </div>
            <div id="change_attendance_div">
                <label>Wybierz obecność:</label>
                <div class="possible_attendances">
                    <button class="available_attendance_button"><label class="grade_label">${available_attendances[0]}</label></button>
                    <button class="available_attendance_button"><label class="grade_label">${available_attendances[1]}</label></button>
                </div>
            </div>
            <div id="week">
                <label>Tydzien:</label>
                <input type="text" id="add_attendance_pane_week_input"/>
            </div>
            <div id="date">
                <label>Data:</label>
                <input type="text" id="add_attendance_pane_date_input"/>
            </div>
            <div class="save">
                <button type="submit" id="save_attendance_button">Zapisz</button>
            </div>
        </div>
    `
}

function get_new_grade_button(){
    return "<button class='new_grade_button'><i class=\"icon-plus-circled\"></i></button>";
}

function get_new_attendance_button(){
    return "<button class='new_attendance_button'><i class=\"icon-plus-circled\"></i></button>";
}

function get_single_raw_timetable_element(element_index){
    return "<button class='timetable_element_button' id='timetable_" + element_index + "'><label class='timetable_element_label'></label></button>"
}

function get_timetable_tag(timetable_id){
    return `<button class="timetable_tag_button">
                <label class="timetable_tag_label">Plan ${timetable_id}</label>
            </button>`;
}

function get_edit_subject_pane(){
    return `
        <div id="edit_subject_pane">
            <div id="add_new_subject_close_button_div">
                <button id="add_new_subject_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="title_div">
                <label>Edytuj przedmioty</label>
            </div>
            <div id="available_subjects"></div>
            <div id="new_subject_input_div">
                <label for="new_subject_input" id="new_subject_description">
                    Dane nowego przdmiotu:
                    <input type="text" id="new_subject_name_input" class="new_subject_input" placeholder="nazwa przedmiotu...">
                    <input type="text" id="new_subject_ects_points_input" class="new_subject_input" placeholder="ilość punktów ECTS...">
                    <input type="text" id="new_subject_semester_input" class="new_subject_input" placeholder="semestr...">
                    <button type="button" id="confirm_new_subject_button">Zatwierdź przedmiot</button>
                </label>
            </div>
        </div>
    `;
}

function add_existing_subjects_to_pane(response) {
    Array.from(response).forEach(subject => {
        document.getElementById("available_subjects").insertAdjacentHTML("beforeend",
            `<div class='existing_subject_element'>
                        <div class='existing_subject_div'>
                            <label class="existing_subject_label"><span id="subject_name_span">${subject}</span></label>
                        </div>
                        <button class="delete_subject_button"><i class="icon-trash"></i></button>
                    </div>`)


    });
}


function get_ask_to_remove_subject_div(element_to_delete, question, class_name, delete_yes, delete_no, pane_name) {
    return `<div id=${pane_name}>
                        <label id="delete_subject_decision_label">${question}<br>${element_to_delete}</label>
                        <div id="decision_buttons_div">
                            <button class=${class_name} id=${delete_yes}><label class="delete_subject_label">TAK</label></button>
                            <button class=${class_name} id=${delete_no}><label class="delete_subject_label">NIE</label></button>
                        </div>
                        
                   </div>`;
}


function get_assign_subject_to_timetable_pane(){
    return `
            <div id="assign_subject_pane_div">
                <div id="assign_subject_pane_close_button_div">
                    <button id="assign_subject_pane_close_button"><i class="icon-cancel-circled"></i></button>
                </div>
                <h3 id="assign_subject_pane_header"></h3>
                <div id="set_subject_div">
                    <label id="set_subject_label" for="select_subject">
                        <select id="select_subject"></select>
                    </label>
                </div>
                <div id="subject_time_div">
                    <label id="day_label"></label>
                    <label id="hour_label"></label>
                </div>
                <div id="confirm_setting_new_subject_div">
                    <button id="confirm_setting_new_subject">Zatwierdź zmiany</button>
                    <button id="delete_subject_from_cell">Usuń przedmiot z komórki</button>
                </div>
            </div>
    `;
}

function get_add_student_to_timetable_pane(){
    return `
        <div id="add_student_to_timetable_pane_div">
            <div id="add_student_to_timetable_pane_close_button_div">
                <button id="add_student_to_timetable_pane_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <h3 id="add_student_to_timetable_pane_header">Edytuj użytkowników w planie </h3>
            
            <div id="existing_students_in_timetable"></div>
            
            <div id="choose_student_div">
                <label id="choose_student_label" for="choose_student">
                    Dodaj użytkownika
                    <select id="choose_student"></select>
                </label>
            </div>
            <button id="add_student_to_timetable_button">Dodaj użytkownika</button> 
        </div>
    `;
}

function get_student_in_timetable_div(response, students_data_index) {
    return `<div class='student_in_timetable_div'>
                        <div class='student_data'>${response[students_data_index]} ${response[students_data_index + 1]} ${response[students_data_index + 2]}</div> 
                        <button class='delete_student_from_timetable_button'><i class=\"icon-trash\"></i></button>
                    </div>`;
}

function get_subjects_table_grade_and_attendance_buttons(){
    return `
        <div id="subjects_table_buttons_div">
            <button class="subject_section_button" id="grades_section">Oceny</button>
            <button class="subject_section_button" id="attendances_section">Obecności</button>
        </div>            
    `;
}