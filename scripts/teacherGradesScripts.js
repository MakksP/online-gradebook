function add_grade_edit_pane_to_main_container(name, surname, grade, description, date) {
    document.getElementById("main_container").insertAdjacentHTML("beforeend", get_grade_edit_pane(name, surname, grade, description, date));
    appearing_pane_close_button_onclick("grade_edit_close_button", "grade_edit_pane");
}

function get_grade_value_of_pressed_button(button) {
    return button.getElementsByTagName("label")[0].innerHTML;
}


function get_current_grade_description_and_date() {
    const description = document.getElementById("edit_grade_pane_description_input").value;
    const date = document.getElementById("edit_grade_pane_date_input").value;
    return {description, date};
}


function repaint_grade_edit_pane(name, surname, grade, description, date, grade_id) {
    add_grade_edit_pane_to_main_container(name, surname, grade, description, date);
    let available_grades_buttons = Array.from(document.getElementsByClassName("available_grade_button"));
    const new_grade_data_package = create_change_grade_button_onclick_action(available_grades_buttons, grade, name, surname, grade_id);

    available_grades_buttons = new_grade_data_package.available_grades_buttons;
    grade = new_grade_data_package.grade;
    available_grades_buttons.forEach(available_grade_button => {
        set_specific_grade_button_color(available_grade_button)
    });
    create_save_button_onclick_action(grade, grade_id);
    create_delete_grade_button_onclick_action(grade_id);
}

function create_grade_edit_pane(grade_id){
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherGradesActions/getGradeData.php",
        data: {grade_id: grade_id},
        dataType: "json",
        success: function (response){
            const name = response[0];
            const surname = response[1];
            let grade = response[2];
            let description = response[3];
            let date = response[4];
            repaint_grade_edit_pane(name, surname, grade, description, date, grade_id);

        },
        error: function (response){
            console.log(response);
        }
    });
}



function create_attendance_edit_pane(attendance_id){
    $.ajax({
        type: "GET",
        url: "../serverActions/teacherGradesActions/getAttendanceData.php",
        data: {attendance_id: attendance_id},
        dataType: "json",
        success: function (response){
            const name = response[0];
            const surname = response[1];
            let wasPresent = response[2];
            let date = response[3];
            add_new_appearing_with_parameters_pane_to_main_container(get_edit_attendance_pane,
                save_changes_in_attendance_button_onclick_action, "attendance_edit_close_button", "edit_attendance_pane", name, surname, wasPresent, date, attendance_id);
            const current_attendance_button = document.getElementsByClassName("available_attendance_edit_button")[0];
            choose_color_for_available_attendance_in_edit_pane(current_attendance_button);
            create_swap_attendance_onclick_action(current_attendance_button);
            create_delete_attendance_onclick_action(attendance_id);
        },
        error: function (response){
            console.log(response);
        }
    });
}


function send_update_attendance_to_database(date, was_present, attendance_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherGradesActions/updateAttendanceData.php",
        data: {
            date: date,
            wasPresent: parse_string_attendance_to_int(was_present),
            attendanceId: attendance_id
        },
        success: function (response) {
            repaint_attendance_part();
            document.getElementById("add_attendance_pane").remove();
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function delete_attendance_from_database(attendance_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherGradesActions/deleteAttendance.php",
        data: {
            attendanceId: attendance_id
        },
        success: function (response) {
            repaint_attendance_part();
            document.getElementById("edit_attendance_pane").remove();
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function find_rest_of_grades(grade){
    let available_grades = [2, 3, 4, 5]
    return available_grades.filter(current_grade => current_grade !== parseInt(grade));
}

function update_grade(grade_id, grade, description_and_date) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherGradesActions/updateGradeData.php",
        data: {
            grade_id: grade_id,
            grade: grade,
            description: description_and_date.description,
            date: description_and_date.date
        },
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function repaint_subject_table_dynamic_content(value_function) {
    const current_subject_name = get_current_subject_name();
    document.getElementById("student_names").remove();
    draw_students_labels_in_subject(current_subject_name, student_grade_buttons, get_and_draw_students_grades);
}

function calculate_available_attendance(was_present){
    return was_present === 1 ? "Nieobecny" : "Obecny";
}

function parse_int_attendance_to_string(was_present){
    return was_present === 1 ? "Obecny" : "Nieobecny";
}

function parse_string_attendance_to_int(was_present){
    return was_present === "Obecny" ? 1 : 0;
}

function delete_grade_from_database(grade_id) {
    $.ajax({
        type: "POST",
        url: "../serverActions/teacherGradesActions/deleteGrade.php",
        data: {grade_id: grade_id},
        success: function (response) {
            repaint_subject_table_dynamic_content(get_and_draw_students_grades);
            document.getElementById("grade_edit_pane").remove();
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function add_header_to_grades_table() {
    subjects_table.insertAdjacentHTML("beforeend", get_students_in_subject_header());
}


