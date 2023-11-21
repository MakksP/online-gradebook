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

function get_your_grade_details_pane(name, surname, grade, description, date){
    return `
        <div id="grade_edit_pane" class="appearing_pane">
            <div id="grade_edit_close_button_div">
                <button id="grade_edit_close_button"><i class="icon-cancel-circled"></i></button>
            </div>
            <div id="student_name_label">
                <label>Twoja ocena:<br>${grade}</label>
            </div>

            <div id="description">
                <label>Opis: ${description} </label>
            </div>
            <div id="date">
                <label>Data: ${date}</label>
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

function get_new_grade_button(){
    return "<button class='new_grade_button'><i class=\"icon-plus-circled\"></i></button>";
}

function get_students_in_subject_header(){
    return `<div id="gradebook_grid_header">
        <label id="gradebook_grid_students_header">Studenci:</label>
        <label id="gradebook_grid_grades_header">Oceny:</label>
    </div>`
}

function get_your_grades_header(){
    return `<div id="gradebook_grid_header">
        <label id="gradebook_grid_grades_header">Oceny:</label>
    </div>`
}