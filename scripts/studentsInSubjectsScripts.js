function get_and_draw_students_grades(subject_name) {
    $.ajax({
        type: "GET",
        url: "../serverActions/getStudentsGrades.php",
        data: {subject_name: subject_name},
        dataType: "json",
        success: function (response) {
            add_students_grades(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

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

function draw_students_labels_in_subject(button_text) {
    $.ajax({
        type: "GET",
        url: "../serverActions/studentsAndSubjects.php",
        data: {subject_name: button_text},
        success: function (response) {
            document.getElementById("header_text").innerHTML = button_text;
            document.getElementById("subjects_table").insertAdjacentHTML("beforeend", get_students_list_div(response));
            set_rows_height_by_number_of_students();
            get_and_draw_students_grades(button_text);

        },
        error: function (response) {
            console.log(response);
        }
    });
}

function get_all_grade_buttons_from_div(button_labels, button_labels_index) {
    return button_labels[button_labels_index].getElementsByClassName("grade_button");
}

function get_current_grade_button_value(grade_button) {
    return grade_button.getElementsByTagName("label")[0].innerHTML;
}

function set_button_grade_color_by_grade_value() {
    const button_labels = document.getElementsByClassName("grade_part")

    for (let button_labels_index = 0; button_labels_index < button_labels.length; button_labels_index++) {
        const grade_buttons = Array.from(get_all_grade_buttons_from_div(button_labels, button_labels_index));
        grade_buttons.forEach(grade_button => {
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


        });
    }
}

function add_students_grades(response) {
    for (let student in response) {
        response[student].forEach(grade => {
            const button_grade_id = student + "_grade_div";
            document.getElementById(button_grade_id).insertAdjacentHTML("beforeend", grade);
        });
    }
    set_button_grade_color_by_grade_value();

}