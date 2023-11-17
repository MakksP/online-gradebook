function get_number_of_students_in_grid() {
    return Array.from(document.getElementById("subjects_table").getElementsByClassName("student_label_div")).length;
}

function set_rows_height_by_number_of_students() {
    let grid_templates_row_style = "";
    for (let student_index = 0; student_index < get_number_of_students_in_grid(); student_index++) {
        grid_templates_row_style += "2rem "
    }
    document.getElementById("student_names").style.gridTemplateRows = grid_templates_row_style;
}

function get_all_grade_buttons_from_div(button_labels, button_labels_index, button_type) {
    return button_labels[button_labels_index].getElementsByClassName(button_type);
}

function get_current_grade_button_value(grade_button) {
    return grade_button.getElementsByTagName("label")[0].innerHTML;
}

function set_specific_grade_button_color(grade_button) {
    const grade_value = get_current_grade_button_value(grade_button);
    if (grade_value === '2') {
        grade_button.style.backgroundColor = "#FE0000";
    } else if (grade_value === '3') {
        grade_button.style.backgroundColor = "#FFE500";
    } else if (grade_value === '4') {
        grade_button.style.backgroundColor = "#9BD33F";
    } else if (grade_value === '5') {
        grade_button.style.backgroundColor = "#257324";
    }
}

function set_specific_attendance_button_color(grade_button) {
    const grade_value = get_current_grade_button_value(grade_button);
    console.log(grade_value)
    if (grade_value === "Nieobecny") {
        grade_button.style.backgroundColor = "#FE0000";
    } else if (grade_value === "Obecny") {
        grade_button.style.backgroundColor = "#257324";
    }
}

function set_button_grade_color_by_grade_value(button_container_class_name, button_type) {
    const button_labels = Array.from(document.getElementsByClassName(button_container_class_name));
    for (let button_labels_index = 0; button_labels_index < button_labels.length; button_labels_index++) {
        const grade_buttons = Array.from(get_all_grade_buttons_from_div(button_labels, button_labels_index, button_type));
        console.log(button_type)
        grade_buttons.forEach(grade_button => {
            if (button_type === "attendance_button" || button_type === "available_attendance_button"){
                set_specific_attendance_button_color(grade_button);
            } else if (button_type === "grade_button" || button_type === "available_grade_button"){
                set_specific_grade_button_color(grade_button);
            }
        });
    }
}


function get_student_email_from_student_label_div(button) {
    return button.closest("div").id.substring(0, (button.closest("div").id.indexOf("_")));
}

function change_chosen_grade_value_in_label(grade) {
    document.getElementById("chosen_grade_label").innerHTML = grade;
}