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

function get_edit_attendance_pane(name, surname, was_present, date){
    const available_attendance = calculate_available_attendance(was_present);
    const current_attendance = parse_int_attendance_to_string(was_present);
    return `
        <div id="edit_attendance_pane" class="appearing_pane">
            <div id="attendance_edit_close_button_div">
                <button id="attendance_edit_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="student_name_label">
                <label>Zmień obecność dla studenta:<br>${name} ${surname}</label>
            </div>
            <div id="chosen_attendance_div">
                <label id="chosen_attendance_label">${current_attendance}</label>
            </div>
            <div id="change_attendance_div">
                <label>Wybierz obecność:</label>
                <div class="possible_attendances">
                    <button class="available_attendance_edit_button"><label class="grade_label">${available_attendance}</label></button>
                </div>
            </div>
            <div id="date">
                <label>Data:</label>
                <input type="text" id="edit_attendance_pane_date_input" value=${date} />
            </div>
            <div class="save">
                <button type="submit" id="save_attendance_edit_button">Zapisz</button>
            </div>
            <div class="delete">
                <button type="submit" id="delete_attendance_edit_button">Usuń obecność</button>
            </div>
        </div>
    `
}

function get_edit_your_attendance_pane(name, surname, was_present, date){
    const current_attendance = parse_int_attendance_to_string(was_present);
    return `
        <div id="edit_attendance_pane" class="appearing_pane">
            <div id="attendance_edit_close_button_div">
                <button id="attendance_edit_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="student_name_label">
                <label>Twoja obecność:<br>${current_attendance}</label>
            </div>
           
            <div id="date">
                <label>Data: ${date}</label>
            </div>
        </div>
    `
}



function get_new_attendance_button(){
    return "<button class='new_attendance_button'><i class=\"icon-plus-circled\"></i></button>";
}