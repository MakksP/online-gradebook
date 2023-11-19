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


function get_single_raw_timetable_element(element_index){
    return "<button class='timetable_element_button' id='timetable_" + element_index + "'><label class='timetable_element_label'></label></button>"
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