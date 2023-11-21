const add_new_grade_buttons = document.getElementsByClassName("new_grade_button");
const new_attendance_button = document.getElementsByClassName("new_attendance_button");



function create_add_new_grade_button_onclick_action(){
    Array.from(add_new_grade_buttons).forEach(button => button.onclick = function (){
        const student_email = get_student_email_from_student_label_div(button);
        const subject_name = get_current_subject_name()
        serve_add_grade_attendance_action(student_email, subject_name, "grade");
    });
}


function init_student_grade_on_click_action(button_class_name) {
    let student_grade_buttons = document.getElementsByClassName(button_class_name);

    for (let student_grade_button_index = 0; student_grade_button_index < student_grade_buttons.length; student_grade_button_index += 1) {

        if (student_grade_buttons[student_grade_button_index] != null) {
            student_grade_buttons[student_grade_button_index].onclick = function () {
                create_grade_edit_pane(student_grade_buttons[student_grade_button_index].id, button_class_name)

            }
        }
    }
    return student_grade_buttons;
}



function create_change_grade_button_onclick_action(available_grades_buttons, grade, name, surname, grade_id) {
    available_grades_buttons.forEach(button => button.onclick = function () {
        const description_and_date = get_current_grade_description_and_date();
        document.getElementById("grade_edit_pane").remove();
        grade = get_grade_value_of_pressed_button(button);
        repaint_grade_edit_pane(name, surname, grade, description_and_date.description, description_and_date.date, grade_id, "grade_button");
    });
    return {available_grades_buttons, grade};
}


function create_save_button_onclick_action(grade, grade_id) {
    document.getElementById("save_changes_button").onclick = function () {
        const description_and_date = get_current_grade_description_and_date();
        update_grade(grade_id, grade, description_and_date);
        repaint_subject_table_dynamic_content(get_and_draw_students_grades);
    }
}


function available_grade_button_onclick_action(buttons_class) {
    Array.from(document.getElementsByClassName(buttons_class)).forEach(button => {
        button.onclick = function () {
            let button_value = button.getElementsByTagName("label")[0].innerHTML;
            if (buttons_class === "available_grade_button"){
                change_chosen_grade_attendance_value_in_label(button_value, "chosen_grade_label");
            } else if (buttons_class === "available_attendance_button"){
                change_chosen_grade_attendance_value_in_label(button_value, "chosen_attendance_label");
            }
        }
    });
}



function create_delete_grade_button_onclick_action(grade_id) {
    document.getElementById("delete_grade_button").onclick = function () {
        delete_grade_from_database(grade_id);
    }
}


function create_grades_onclick_action() {
    document.getElementById("grades_section").onclick = function () {
        serve_subject_table_buttons_color_after_click("attendances_section", "grades_section");
        document.getElementById("subjects_table").innerHTML = "";
        add_header_to_grades_table();
        draw_students_labels_in_subject(get_subject_name(), student_grade_buttons, get_and_draw_students_grades);
    }
}

function create_your_grades_onclick_action() {
    document.getElementById("grades_section").onclick = function () {
        serve_subject_table_buttons_color_after_click("attendances_section", "grades_section");
        document.getElementById("subjects_table").innerHTML = "";
        add_header_to_your_grades_table();
        document.getElementById("subjects_table_buttons_div").remove();
        repaint_your_grades_table(get_subject_name());
    }
}