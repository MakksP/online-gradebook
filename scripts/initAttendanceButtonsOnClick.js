function init_student_attendance_on_click_action(student_attendance_buttons) {
    student_attendance_buttons = document.getElementsByClassName("attendance_button");

    for (let student_attendance_button_index = 0; student_attendance_button_index < student_attendance_buttons.length; student_attendance_button_index += 1) {

        if (student_attendance_buttons[student_attendance_button_index] != null) {
            student_attendance_buttons[student_attendance_button_index].onclick = function () {
                create_attendance_edit_pane(student_attendance_buttons[student_attendance_button_index].id)

            }
        }
    }
    return student_attendance_buttons;
}


function create_save_grade_attendance_button_onclick_action(response, save_button_id) {
    document.getElementById(save_button_id).onclick = function () {
        if (save_button_id === "save_grade_button"){
            let grade = document.getElementById("chosen_grade_label").innerHTML;
            let description = document.getElementById("add_grade_pane_description_input").value;
            let date = document.getElementById("add_grade_pane_date_input").value;
            add_grade_to_database(grade, description, date, response);
            repaint_subject_table_dynamic_content(get_and_draw_students_grades);
            document.getElementById("add_grade_pane").remove();

        } else if (save_button_id === "save_attendance_button"){
            let grade = document.getElementById("chosen_attendance_label").innerHTML;
            let date = document.getElementById("add_attendance_pane_date_input").value;
            grade = parse_attendance_from_text_to_value(grade);
            add_attendance_to_database(grade, date, response);
            repaint_attendance_part();
            document.getElementById("add_attendance_pane").remove();
        }

    }
}

function save_changes_in_attendance_button_onclick_action(attendance_id){
    document.getElementById("save_attendance_edit_button").onclick = function (){
        const date = document.getElementById("edit_attendance_pane_date_input").value
        const was_present = document.getElementById("chosen_attendance_label").innerHTML

        send_update_attendance_to_database(date, was_present, attendance_id);
    }
}


function create_delete_attendance_onclick_action(attendance_id) {
    document.getElementById("delete_attendance_edit_button").onclick = function () {
        delete_attendance_from_database(attendance_id);
    }
}

function create_add_new_attendance_button_onclick_action(){
    Array.from(new_attendance_button).forEach(button => button.onclick = function (){
        const student_email = get_student_email_from_student_label_div(button);
        const subject_name = get_current_subject_name()
        serve_add_grade_attendance_action(student_email, subject_name, "attendance");
    });
}